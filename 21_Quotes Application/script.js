
const quotes = [
  "The only limit to our realization of tomorrow is our doubts of today. – Franklin D. Roosevelt",
  "In the end, we will remember not the words of our enemies, but the silence of our friends. – Martin Luther King Jr.",
  "The future belongs to those who believe in the beauty of their dreams. – Eleanor Roosevelt",
  "It does not matter how slowly you go as long as you do not stop. – Confucius",
  "You only live once, but if you do it right, once is enough. – Mae West",
  "Success is not the key to happiness. Happiness is the key to success. – Albert Schweitzer",
  "Believe you can and you're halfway there. – Theodore Roosevelt",
  "The journey of a thousand miles begins with one step. – Lao Tzu",
];

// Function to get a random quote from the array
const getRandomQuote = () => {
  const randomIndex = Math.floor(Math.random() * quotes.length);
  return quotes[randomIndex];
};

// Function to update the quote displayed in the UI
const updateQuote = () => {
  const quoteTextElement = document.getElementById("quote-text");
  const newQuote = getRandomQuote();
  quoteTextElement.textContent = `"${newQuote}"`;
};

// Event listener for the "Get a Quote" button
const initializeApp = () => {
  const newQuoteButton = document.getElementById("new-quote-btn");

  // Add click event to change the quote when the button is clicked
  newQuoteButton.addEventListener("click", updateQuote);
};

  initializeApp();


