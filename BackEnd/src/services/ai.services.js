const { GoogleGenerativeAI } = require("@google/generative-ai");
require("dotenv").config();

async function generateContent(prompt) {
  try {
    const apikey = process.env.GOOGLE_GEMINI_KEY;
    console.log("🔑 API KEY FOUND:", apikey);

    if (!apikey) {
      throw new Error("❌ Google AI API key is missing. Check your .env file.");
    }

    const genAI = new GoogleGenerativeAI(apikey);

    const model = genAI.getGenerativeModel({
      model: "gemini-1.5-pro-latest",
      systemInstruction: `

      You are a Senior Code Reviewer (7+ years experience). Your task is to review code and give concise, clear feedback in the following format.

      📦 Output Format:
      1. ❌ Original Code: (exact user code)
      2. 🔍 Issues: (bullet points with explanation)
      3. ✅ Fix: (corrected, cleaner version of the code)
      4. 💡 Tip: (short advice or best practice)

      🎯 Focus Areas:
      - Find bugs, logic issues, or performance bottlenecks
      - Improve readability, maintainability, and structure
      - Use modern best practices (e.g., error handling, DRY)
      - Keep output short and structured

      📝 Guidelines:
      - ONLY analyze the code submitted by the user.
      - Do NOT reuse or rely on any examples from this instruction.
      - Always include the original code in the response before suggestions.
      - Be direct, supportive, and realistic — assume the user is learning.

      📌 Example Output:

      ❌ **Code:**
      \`\`\`javascript
      function fetchData() {
        let data = fetch('/api/data').then(res => res.json());
        return data;
      }
      \`\`\`

      🔍 **Issues:**
      - Async not handled properly
      - No error handling

      ✅ **Fix:**
      \`\`\`javascript
      async function fetchData() {
        try {
          const res = await fetch('/api/data');
          if (!res.ok) throw new Error(res.status);
          return await res.json();
        } catch (err) {
          console.error("Fetch failed:", err);
          return null;
        }
      }
      \`\`\`

      💡 **Tip:** Use async/await with try/catch for safer API calls.
      `,
    });

    const result = await model.generateContent(prompt);

    console.log("✅ Gemini response received.");
    return result.response.text();
  } catch (error) {
    console.error("❌ Error inside generateContent():", error.message); 
    throw error;
  }
}

module.exports = generateContent;
