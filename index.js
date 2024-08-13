const express = require("express");
const cors = require("cors");
const { lc_gemini } = require("./lc_gemini.js");

const app = express();
// Add morgan middleware to log HTTP requests
const morgan = require("morgan");
const port = 8000;
app.use(express.json());
app.use(morgan("dev"));
app.use(cors());

app.get("/", (req, res) => {
  res.json({ message: "Server Running" });
});

app.post("/", async (req, res) => {
  const { key, model } = req.headers;
  const qna_dict = req.body;
  const qna_str = JSON.stringify(qna_dict).replace(/"/g, " ");

  try {
    const result = await lc_gemini(qna_str, key, model);
    console.log(result);
    res.json(result);
  } catch (error) {
    console.log(error);
    const result = [-1, -1, -1, -1, -1];
    res.json(result);
  }
});

app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});
