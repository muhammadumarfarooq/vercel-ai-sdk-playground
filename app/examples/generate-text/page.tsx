import {generateText} from "ai"
import {openai} from "@ai-sdk/openai"

async function GenerateTextPage() {

    const {text} = await generateText({
        model: openai("o3-mini"),
        prompt: "Tell me a fun fact about space."
    })

    return (
        <main className="p-8">
            <h1 className="text-xl font-bold mb-4">Fun Fact About Space</h1>
            <p>{text}</p>
        </main>
    );
}

export default GenerateTextPage;
