'use server';

import { getDbConnection } from "@/lib/db";
import { generateSummaryFromGemini } from "@/lib/geminiai";
import { fetchAndExtractPdfText } from "@/lib/langchain";
import { generateSummaryFromOpenAI } from "@/lib/openai";
import { auth } from "@clerk/nextjs/server";
import { revalidatePath } from "next/cache";

interface PdfSummaryType {
    userId?: string; 
    fileUrl: string; 
    summary: string; 
    title: string; 
    fileName: string;
}

export async function generatePdfText({fileUrl}: {fileUrl: string;}){
    if(!fileUrl){
        return {
            success: false,
            message: 'File upload failed',
            data: null
        }
    }

    try{
        const pdfText = await fetchAndExtractPdfText(fileUrl);
        console.log({pdfText});

        if(!pdfText){
            return {
                success: false,
                message: 'Failed to fetch and extract PDF text',
                data: null
            }
        }

        return {
            success: true,
            message: 'PDF text generated successfully',
            data: { pdfText }
        }
    }catch(err){
        return {
            success: false,
            message: 'File upload failed',
            data: null,
        }
    }
}

export async function generatePdfSummary({pdfText, fileName}: {
    pdfText: string;
    fileName: string;
}){
    try{
        let summary;
        try{
            summary = await generateSummaryFromOpenAI(pdfText);
        }catch(error){
            console.error('OpenAI failed:', error);
            // Always attempt Gemini when OpenAI fails
            try{
                console.log('Calling Gemini AI...');
                summary = await generateSummaryFromGemini(pdfText);
                console.log('Gemini AI response received:', summary ? 'Success' : 'Empty response');
            }catch(geminiError){
                const geminiMsg = geminiError instanceof Error ? geminiError.message : 'GEMINI_ERROR';
                console.error('Gemini API failed after OpenAI failed:', geminiMsg);
                throw new Error('Failed to generate summary with available AI providers');
            }
        }

        if(!summary){
            return {
                success: false,
                message: 'Failed to generate summary',
                data: null
            }
        }

        return {
            success: true,
            message: 'Summary generated successfully',
            data: { title: fileName, summary }
        }
    }catch(err){
        const message = err instanceof Error ? err.message : 'Failed to generate summary';
        console.error('Error in generatePdfSummary:', message);
        return {
            success: false,
            message,
            data: null,
        }
    }
}

async function savePdfSummary({userId, fileUrl, summary, title, fileName}: PdfSummaryType){
    // sql inserting pdf summary
    try{
        const sql = await getDbConnection();
        const [savedSummary] = await sql`INSERT INTO pdf_summaries (user_id, original_file_url, summary_text, title, file_name)
        VALUES (
            ${userId}, ${fileUrl}, ${summary}, ${title}, ${fileName}
        ) RETURNING id, summary_text;`
         return savedSummary;        
    }catch(error){
        console.error('Error saving PDF summary', error);
        throw error;
    }
}

export async function storePdfSummaryAction({fileUrl, summary, title, fileName}: PdfSummaryType){
    let savedSummary: any;
    try{
        const { userId } = await auth();
        if(!userId){
            return {
                success: false,
                message: 'User not found',
            }
        }
        savedSummary = await savePdfSummary({userId, fileUrl, summary, title, fileName});
        if(!savedSummary){
            return {
                success: false,
                message: 'Failed to save PDF summary, please try again...',
            }
        }
        
    }catch(error){
        return {
            success: false,
            message: error instanceof Error ? error.message : 'Error saving PDF summary',
        }
    }

    //Revalidate our cache
    revalidatePath(`/summaries/${savedSummary.id}`);

    return {
        success: true,
        message: 'PDF summary saved successfully',
        data: {id: savedSummary.id},
    }
}