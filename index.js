// import express from "express";
// import cors from "cors";
// import { lc_gemini } from "./lc_gemini.js";

const express = require("express");
const cors = require("cors");
const { lc_gemini } = require("./lc_gemini.js");

const app = express();
app.use(express.json());
const port = 8000;

app.use(cors());

app.get("/", (req, res) => {
  res.json({ message: "Server Running" });
});

app.post("/", async (req, res) => {
  const { key } = req.headers;
  const qna_dict = req.body;
  const qna_str = JSON.stringify(qna_dict).replace(/"/g, " ");

  try {
    const result = await lc_gemini(qna_str, key);
    res.json(result);
  } catch (error) {
    const result = [-1, -1, -1, -1, -1];
    res.json(result);
  }
});

app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});
