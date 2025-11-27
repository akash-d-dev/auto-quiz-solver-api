const { lc_gemini } = require('./lc_models/lc_gemini.js');
const { lc_openai } = require('./lc_models/lc_openai.js');
const { lc_grok } = require('./lc_models/lc_grok.js');

const port = 8000;
const express = require('express');
const cors = require('cors');
const app = express();
const morgan = require('morgan');

app.use(express.json());
app.use(morgan('dev'));
app.use(cors('*'));

app.get('/', (req, res) => {
  res.json({ message: 'Server Running' });
});

app.post('/', async (req, res) => {
  const { key, model, model_type, quiz_url } = req.headers;

  console.log(key, model, model_type, quiz_url);

  const qna_dict = req.body;
  const qna_str = JSON.stringify(qna_dict).replace(/"/g, ' ');
  try {
    let result;
    switch (model_type) {
      case 'gpt':
      result = await lc_openai(qna_str, key, model);
      break;
      case 'grok':
      result = await lc_grok(qna_str, key, model);
      break;
      case 'gemini':
      default:
      result = await lc_gemini(qna_str, key, model);
      break;
    }
    console.log(result);
    const response = {
      result: result,
      error: "null"
    };
    res.json(response);
  } catch (error) {
    console.log(error);
    const response = {
      result: [-1, -1, -1, -1, -1],
      error: error.message,
    };
    res.json(response);
  }
});

app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});
