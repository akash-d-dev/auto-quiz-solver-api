const { ChatGroq } = require('@langchain/groq')
const { PromptTemplate } = require('@langchain/core/prompts')
const {
  CommaSeparatedListOutputParser
} = require('@langchain/core/output_parsers')
const { RunnableSequence } = require('@langchain/core/runnables')
const { instructions } = require('./constants')

async function lc_grok(qna, key, model = 'grok-3-latest') {
  console.log('******************')
  console.log('Using Grok API')
  console.log('******************')

  const parser = new CommaSeparatedListOutputParser()

  const chain = RunnableSequence.from([
    PromptTemplate.fromTemplate(
      'Solve this quiz and return a list of correct options - \n {quiz}.\n{format_instructions}'
    ),
    new ChatGroq({
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

module.exports = { lc_grok }
