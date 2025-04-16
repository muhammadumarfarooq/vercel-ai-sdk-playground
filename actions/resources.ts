'use server';

import {createClient} from "@/utils/supabase/server";
import {generateEmbeddings} from "@/lib/ai/embedding";


export const createResource = async ({content}: { content: string }) => {
    try {
        const supabase = await createClient();

        const {data: resource, error: insertError} = await supabase
            .from('resources')
            .insert({content})
            .select()
            .single();

        if (insertError) throw insertError;

        const embeddedChunks = await generateEmbeddings(content, resource.id);

        const {error: embedError} = await supabase.from('embeddings').insert(embeddedChunks);
        if (embedError) throw embedError;

        return {message: 'Resource successfully created and embedded.'};
    } catch (error) {
        console.log(error);
        return error instanceof Error && error.message.length > 0
            ? error.message
            : 'Error, please try again.';
    }
};
