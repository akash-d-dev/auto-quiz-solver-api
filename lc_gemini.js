// import { ChatGoogleGenerativeAI } from "@langchain/google-genai";
// import { PromptTemplate } from "@langchain/core/prompts";
// import { CommaSeparatedListOutputParser } from "@langchain/core/output_parsers";
// import { RunnableSequence } from "@langchain/core/runnables";

const { ChatGoogleGenerativeAI } = require("@langchain/google-genai");
const { PromptTemplate } = require("@langchain/core/prompts");
const {
  CommaSeparatedListOutputParser,
} = require("@langchain/core/output_parsers");
const { RunnableSequence } = require("@langchain/core/runnables");

async function lc_gemini(qna, key, model = "gemini-1.0-pro") {
  const parser = new CommaSeparatedListOutputParser();

  const instructions = `You are an expert quiz solver. You are provided with a quiz. The quiz is in a format similar to of list objects, where in each object has three properties - "question", "question_number" and "options". The "question" property contains the question, "question_number" contains the serial number of the question and "options" contains an array of objects where each object has two properties - "content" and "option_number". The "content" property contains the option and "option_number" contains the serial number of the option. You have to pick the correct answers using the "option_number" in the same order as the questions were given.

  Your response should be a list of comma separated values, eg: "0,3,2,1,1". Your response should contain only options numbers and should be in the same order as the questions were given. NOTHING OTHER THAN THE OPTION NUMBER SHOULD BE PRESENT IN YOUR RESPONSE.
  
  NOTE: Your correct option number of corect answer cannot be greater than 3. So your list of comma separated values should be in the range of 0-3. Also there will be 5 questions in the quiz, so your response should contain EXACTLY 5 comma separated values.
  `;

  const chain = RunnableSequence.from([
    PromptTemplate.fromTemplate(
      "Solve this quiz - \n {quiz}.\n{format_instructions}"
    ),
    new ChatGoogleGenerativeAI({
      modelName: model,
      temperature: 0,
      apiKey: key,
    }),
    parser,
  ]);

  const response = await chain.invoke({
    quiz: qna,
    format_instructions: instructions,
  });

  const responseArr = response.map(Number);

  return responseArr;
}

module.exports = { lc_gemini };
