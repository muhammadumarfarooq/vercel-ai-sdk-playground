import {openai} from '@ai-sdk/openai';
import {streamText, tool} from 'ai';
import {z} from 'zod';
import {createResource} from '@/actions/resources';
import {findRelevantContent} from '@/lib/ai/embedding';

export const maxDuration = 30;

export async function POST(req: Request) {
    const {messages} = await req.json();

    const result = streamText({
        model: openai('gpt-4o'),
        messages,
        system: `
You are Craveup Copilot, a helpful AI assistant with access to a knowledge base.
You must always use the \`getInformation\` tool to answer user questions — even if the answer seems obvious.
Before responding to any question, call the \`getInformation\` tool with the user’s full query.

Only use the retrieved content to construct your response.
If the tool returns no relevant data, respond with: "Sorry, I don't know."

Do not guess or answer from your own knowledge. All answers must come from the tool.`,
        tools: {
            addResource: tool({
                description: `Add new content or facts to Craveup Copilot's knowledge base.
If the user provides any unprompted information (like a fact, note, or statement), store it immediately without asking.`,
                parameters: z.object({
                    content: z
                        .string()
                        .describe('The factual content or statement to store in the knowledge base.'),
                }),
                execute: async ({content}) => createResource({content}),
            }),

            getInformation: tool({
                description: `Fetch relevant knowledge from Craveup Copilot's knowledge base to answer the user's question.
Craveup Copilot must use this tool before answering any question.`,
                parameters: z.object({
                    question: z.string().describe("The user's full question."),
                }),
                execute: async ({question}) => findRelevantContent(question),
            }),
        },
    });

    return result.toDataStreamResponse();
}
