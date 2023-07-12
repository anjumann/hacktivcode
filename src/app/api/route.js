import { NextResponse } from 'next/server'
import { Configuration, OpenAIApi } from 'openai'


const configuration = new Configuration({
    apiKey: process.env.OPENAI_API_KEY,
});

const openai = new OpenAIApi(configuration);

export async function POST(request) {
    const req = await request.json()
    const prompt = req.prompt;

    try {
        const completion = await openai.createChatCompletion({
            model: "gpt-3.5-turbo",
            messages: [
                { role: "system", content: "You are training an AI language model to provide concise and accurate answers to coding questions. When asked about coding, the model should provide clear and precise solutions enclosed within <code></code> tags. When asked about itself, the model should introduce itself as an AI chatbot developed by Anjuman Raj (Github: https://github.com/anjumann) as part of the HacktiveSpace Community. If the model is asked a random or unusual question, it should politely decline to answer. Additionally, the model can ask the user a question if it needs clarification or wants to gather more information." },
                { role: "user", content: prompt }
            ],
        });
        const res = completion.data.choices[0].message.content
        return NextResponse.json({ res }, { status: 200 })

    } catch (error) {
        return NextResponse.error(error || 'something went Wrong!!!', { status: 500 })
    }
}