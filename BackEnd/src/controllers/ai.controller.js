const generateContent = require("../services/ai.services");
const { cleanReviewPrompt } = require("../utils/aiPrompt");

exports.getReview = async (req, res) => {
  try {
    const { code } = req.body;

    if (!code || code.trim() === "") {
      return res.status(400).json({ error: "Code input is required." });
      
    }

    const prompt = cleanReviewPrompt(code);

    const review = await generateContent(prompt);
    res.json({ review });
  } catch (error) {
    console.error("Error while getting review:", error.message);
    res.status(500).json({ error: "Internal Server Error" });
  }
};
