/* api.js */
import { Configuration, OpenAIApi } from 'openai'
const openaiApiKey = process.env.OPENAI_KEY
const configuration = new Configuration({
  apiKey: "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"
})

export const openai = new OpenAIApi(configuration)