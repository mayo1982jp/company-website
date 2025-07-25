
import { GoogleGenAI } from "@google/genai";

// Ensure the API key is available in the environment variables
const apiKey = process.env.API_KEY;
if (!apiKey) {
    throw new Error("API_KEY environment variable not set.");
}

const ai = new GoogleGenAI({ apiKey });

const model = "gemini-2.5-flash";
const systemInstruction = "あなたはQuantumLeap AI株式会社の優秀なAIアシスタントです。会社のサービスや文化について、丁寧かつ簡潔に日本語で回答してください。採用情報に関する質問には、採用ページを見るように促してください。専門的すぎる技術の質問には、問い合わせフォームから連絡するよう案内してください。";

export const askAI = async (question: string): Promise<string> => {
  try {
    const response = await ai.models.generateContent({
      model,
      contents: question,
      config: {
        systemInstruction,
        // Disable thinking for faster, more conversational responses suitable for a chatbot.
        thinkingConfig: { thinkingBudget: 0 }
      }
    });
    
    return response.text;
  } catch (error) {
    console.error("Gemini API call failed:", error);
    return "申し訳ありません。現在、AIアシスタントでエラーが発生しています。しばらくしてから再度お試しください。";
  }
};
