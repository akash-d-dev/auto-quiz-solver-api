const { ChatGoogleGenerativeAI } = require('@langchain/google-genai')
const { PromptTemplate } = require('@langchain/core/prompts')
const {
  CommaSeparatedListOutputParser
} = require('@langchain/core/output_parsers')
const { RunnableSequence } = require('@langchain/core/runnables')
const { instructions } = require('./constants')

async function lc_gemini(qna, key, model = 'gemini-2.5-flash') {
  console.log('******************')
  console.log('Using Gemini API')
  console.log('******************')

  const parser = new CommaSeparatedListOutputParser()

  const chain = RunnableSequence.from([
    PromptTemplate.fromTemplate(
      'Solve this quiz and return a list of correct options - \n {quiz}.\n{format_instructions}'
    ),
    new ChatGoogleGenerativeAI({
      modelName: model,
      temperature: 0,
      apiKey: key
    }),
    parser
  ])

  const response = await chain.invoke({
    quiz: qna,
    format_instructions: instructions
  })

  const responseArr = response.map(Number)

  return responseArr
}

module.exports = { lc_gemini }
