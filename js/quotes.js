const quotes = [
  {
    quote:
      "Failure will never overtake me if my determination to succeed is strong enough.",
  },
  {
    quote: "Go for it now. The future is promised to no one.",
  },
  {
    quote: "Always do your best. What you plant now, you will harvest later.",
  },
  {
    quote:
      "Our greatest weakness lies in giving up. The most certain way to succeed is always to try just one more time.",
  },
  {
    quote:
      "The will to succeed is important, but what's more important is the will to prepare.",
  },
  {
    quote: "In order to succeed, we must first believe that we can.",
  },
  {
    quote: "The merit of an action lies in finishing it to the end.",
  },
  {
    quote: "Everything comes to him who hustles while he waits.",
  },
  {
    quote: "There are no shortcuts to any place worth going.",
  },
  {
    quote: "Study the past if you want to intuit the future.",
  },
];

const quote = document.querySelector("#quote span:first-child");
const author = document.querySelector("#quote span:last-child");

const length = quotes.length;
const n = Math.round(Math.random() * length);
const todaysQuote = quotes[n];

quote.innerText = todaysQuote.quote;
// author.innerText = `- ${todaysQuote.author}`;
