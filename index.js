const express = require("express");
const cors = require("cors");
const { gemini } = require("./ai");

const app = express();
app.use(express.json());
const port = 8000;

// Add CORS middleware
app.use(cors());

app.get("/", (req, res) => {
  res.json({ message: "Server Running" });
});

app.post("/", async (req, res) => {
  const { key } = req.headers;
  const qna_dict = req.body;
  const qna_str = JSON.stringify(qna_dict).replace(/"/g, " ");
  const result = await gemini(qna_str, key);
  res.json(result);
});
app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});
