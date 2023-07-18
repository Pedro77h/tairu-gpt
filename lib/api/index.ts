import axios from "axios";
import { MODEL_CHAT } from "../openAi";

export const Api = axios.create({
  baseURL: "https://api.openai.com/v1",
  headers: {
    Authorization: `Bearer ${process.env.OPENAI_KEY}`,
  },
});

export const sendMessage = async (content: string) =>
  await Api.post("/chat/completions", {
    model: MODEL_CHAT,
    messages: [{ role: "user", content }],
  });
