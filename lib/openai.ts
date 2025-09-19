import { SUMMARY_SYSTEM_PROMPT } from "@/utils/prompts";
import OpenAI from "openai";
const openai = new OpenAI({
    apiKey: process.env.OPENAI_API_KEY,
});

export async function generateSummaryFromOpenAI(pdfText: string){
    try{
        const completion = await openai.chat.completions.create({
            model: "gpt-4.1-mini-2025-04-14", // gpt-5
            messages: [
                {role: "system", content: SUMMARY_SYSTEM_PROMPT},
                {role: "user", content: `Transform this document into an engaging, easy-to-read summary with contextually relevant emojis and proper markdown formatting:\n\n${pdfText}`},
            ],
            temperature: 0.7,
            max_tokens: 1500,
        })
        return completion.choices[0].message.content;
    }catch(err: any){
        if(err?.status === 429){    // 429 -> Too many requests.
            console.log(err);
            throw new Error('RATE_LIMIT_EXCEEDED')
        }
        throw err;
    }
}

// const client = new OpenAI({
//     apiKey: process.env.OPENAI_API_KEY,
// });

// export async function generateSummaryFromOpenAI(pdfText: string){
//     try{
//         const response = await client.responses.create({
//             model: "gpt-5",
//             reasoning: { effort: "low" },
//             input: [
//                 {
//                     role: "system",
//                     content: SUMMARY_SYSTEM_PROMPT
//                 },
//                 {
//                     role: "user",
//                     content: `Transform this document into an engaging, easy-to-read summary with contextually relevant emojis and proper markdown formatting:\n\n${pdfText}`,
//                 },
//             ],
//         });
//         return response.output_text;
//     }catch(err: any){
//         if(err?.status === 429){    // 429 -> Too many requests.
//             throw new Error('RATE_LIMIT_EXCEEDED')
//         }
//         throw err;
//     }
// }
