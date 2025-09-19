import { GoogleGenerativeAI } from "@google/generative-ai";
import { SUMMARY_SYSTEM_PROMPT } from "@/utils/prompts"; // Assuming this prompt is still relevant

// Initialize the Generative AI client
const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY as string);

export const generateSummaryFromGemini = async(pdfText:string)=>{
    try {
        // For text-only input, use the gemini-pro model
        const model = genAI.getGenerativeModel({ model: "gemini-2.0-flash",
            generationConfig:{
                temperature: 0.7,
                maxOutputTokens: 1500,
            }
         });

        // The Gemini API handles system prompts a bit differently.
        // We'll combine the system prompt with the user's content.
        const fullPrompt = `${SUMMARY_SYSTEM_PROMPT}\n\nTransform this document into an engaging, easy-to-read summary with contextually relevant emojis and proper markdown formatting:\n\n${pdfText}`;

        const result = await model.generateContent({
        contents: [{ role: "user", parts: [{ text: fullPrompt }] }]});

        const response = await result.response;

        if(!response.text()){
            throw new Error('Empty response from Gemini API');
        }
        return response.text();
    } catch (err: any) {
        console.error("Gemini API Error: ", err);
        
        // if (err?.message?.includes("RESOURCE_EXHAUSTED")) {
        //     throw new Error("RATE_LIMIT_EXCEEDED");
        // }
        throw err;
    }
}