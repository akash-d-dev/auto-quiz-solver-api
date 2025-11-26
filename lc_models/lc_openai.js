const { ChatOpenAI } = require('@langchain/openai')
const { PromptTemplate } = require('@langchain/core/prompts')
const {
  CommaSeparatedListOutputParser
} = require('@langchain/core/output_parsers')
const { RunnableSequence } = require('@langchain/core/runnables')
const { instructions } = require('./constants')

async function lc_openai(qna, key, model = 'gpt-4o') {
  console.log('******************')
  console.log('Using OpenAI API')
  console.log('******************')

  const parser = new CommaSeparatedListOutputParser()

  let temperature = 0;
  model.includes('5') ? temperature = 1 : temperature = 0;

  const chain = RunnableSequence.from([
    PromptTemplate.fromTemplate(
      'Solve this quiz and return a list of correct options - \n {quiz}.\n{format_instructions}'
    ),
    new ChatOpenAI({
      modelName: model,
      temperature: temperature,
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

module.exports = { lc_openai }
