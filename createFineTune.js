import { openai } from './api.js'

async function createFineTune() {
  try {
    const response = await openai.createFineTune({
      training_file: 'file-Fnp0OhXZAUuGRIJlE2nX4JxF',
      model: 'what is pavan'
    })
    console.log('response: ', response)
  } catch (err) {
    console.log('error: ', err.response.data.error)
    console.log("this is error",err)
  }
}

createFineTune()