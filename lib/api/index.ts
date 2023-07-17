import axios from "axios";

export const Api = axios.create({
  baseURL: "https://api.openai.com/v1",
  headers: {
    Authorization: `Bearer ${process.env.OPENAI_KEY}`
  }
});
