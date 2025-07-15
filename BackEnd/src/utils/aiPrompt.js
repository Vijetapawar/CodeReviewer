function cleanReviewPrompt(code) {
  return `Review the following code:\n\n${code}`;
}

module.exports = { cleanReviewPrompt };
