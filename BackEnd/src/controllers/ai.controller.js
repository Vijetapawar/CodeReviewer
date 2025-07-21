const generateContent = require("../services/ai.services");
const { cleanReviewPrompt } = require("../utils/aiPrompt");

// exports.getReview = async (req, res) => {
//   try {
//     const { code } = req.body;

//     if (!code || code.trim() === "") {
//       return res.status(400).json({ error: "Code input is required." });
      
//     }

//     const prompt = cleanReviewPrompt(code);

//     const review = await generateContent(prompt);
//     res.json({ review });
//   } catch (error) {
//     console.error("Error while getting review:", error.message);
//     res.status(500).json({ error: "Internal Server Error" });
//   }
// };

exports.getReview = async (req, res) => {
  try {
    console.log("Request Body:", req.body);

    const { code } = req.body;

    if (!code || code.trim() === "") {
      console.log("❌ Code input is missing.");
      return res.status(400).json({ error: "Code input is required." });
    }

    const prompt = cleanReviewPrompt(code);
    console.log("Prompt being sent to Gemini:", prompt);

    const review = await generateContent(prompt);
    console.log("Response from Gemini:", review);

    res.json({ review });
  } catch (error) {
    console.error("🔥 Error while getting review:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
};
