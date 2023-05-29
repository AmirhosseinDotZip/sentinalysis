const { SentimentAnalyzer } = require("node-nlp");
const sentiment = new SentimentAnalyzer({ language: "en" });
sentiment.getSentiment("I like Cubes").then((result) => console.log(result));
sentiment.getSentiment("I Loathe Cubes").then((result) => console.log(result));

// node .\index.js
// {
//   score: 0.344,
//   numWords: 3,
//   numHits: 1,
//   average: 0.11466666666666665,
//   type: 'senticon',
//   locale: 'en',
//   vote: 'positive'
// }
// {
//   score: -0.5,
//   numWords: 3,
//   numHits: 1,
//   average: -0.16666666666666666,
//   type: 'senticon',
//   locale: 'en',
//   vote: 'negative'
// }
