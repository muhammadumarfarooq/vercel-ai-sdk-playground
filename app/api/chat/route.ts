import { streamText } from 'ai';
import {aiModel} from "@/utils/ai-model-config";

export const maxDuration = 30;

export async function POST(req: Request) {
    const { messages } = await req.json();

    const result = streamText({
        model: aiModel,
        messages,
    });

    return result.toDataStreamResponse();
}
