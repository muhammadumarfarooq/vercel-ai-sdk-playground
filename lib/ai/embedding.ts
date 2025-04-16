import {embed, embedMany} from 'ai';
import {openai} from '@ai-sdk/openai';
import {createClient} from "@/utils/supabase/server";

const embeddingModel = openai.embedding('text-embedding-ada-002');

const generateChunks = (input: string): string[] => {
    return input
        .trim()
        .split('.')
        .filter(i => i !== '');
};

export const generateEmbeddings = async (
    value: string,
    resourceId: string
): Promise<Array<{ embedding: number[]; content: string }>> => {
    const chunks = generateChunks(value);
    const {embeddings} = await embedMany({
        model: embeddingModel,
        values: chunks,
    });
    return embeddings.map((e, i) => ({resource_id: resourceId, content: chunks[i], embedding: e}));
};

export const generateEmbedding = async (value: string): Promise<number[]> => {
    const input = value.replaceAll('\\n', ' ');
    const {embedding} = await embed({
        model: embeddingModel,
        value: input,
    });
    return embedding;
};

export const findRelevantContent = async (userQuery: string) => {
    const userQueryEmbedded = await generateEmbedding(userQuery);

    const supabase = await createClient();

    const {data, error} = await supabase.rpc('match_embeddings', {
        query_embedding: userQueryEmbedded,
        match_threshold: 0.5,
        match_count: 4,
    });

    if (error) throw error;

    return data.map((d: any) => d.content).join('\n---\n');
};
