const express = require('express');
const aiRoutes = require('./routes/ai.routes');
const cors = require('cors');

const app = express();

app.use(cors());

app.use(express.json()); 
app.use(express.urlencoded({ extended: true }));


app.get('/', (req,res) => {
    res.send('Hello, World! hii');
})
app.get("/ai/get-response", async (req, res) => {
  try {
    const prompt = req.query.prompt;
    const response = await gemini.send(prompt); // example
    res.send(response);
  } catch (err) {
    console.error("Error:", err.message);
    res.status(500).send("Something went wrong.");
  }
});

app.use('/ai', aiRoutes);

module.exports = app;