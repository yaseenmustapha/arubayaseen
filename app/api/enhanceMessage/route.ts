import { NextResponse } from "next/server";
import openai from "@/lib/openai";

export async function POST(request: Request) {
  const { prompt } = await request.json();
  const chatCompletion = await openai.createChatCompletion({
    model: "gpt-3.5-turbo",
    temperature: 0.8,
    n: 1,
    stream: false,
    messages: [
      {
        role: "system",
        content:
          "You are an assistant that enhances image captions for a live feed for a wedding. For context, the people getting married are Aruba (the bride) and Yaseen (the groom).",
      },
      {
        role: "user",
        content: `Rewrite this social media caption to make it more punchy, viral and interesting for a wedding (keep it under 100 characters and add the hashtag #HaveYaSeenAruba to the end): ${prompt}`,
      },
    ],
  });

  return NextResponse.json(chatCompletion.data.choices[0].message);
}
