const quotes = [
  { quote: "Be yourself; everyone else is already taken.", author: "Oscar Wilde" },
  { quote: "Life is what happens when you're busy making other plans.", author: "John Lennon" },
  { quote: "Success is not the key to happiness. Happiness is the key to success.", author: "Albert Schweitzer" },
  { quote: "Believe you can and you're halfway there.", author: "Theodore Roosevelt" },
  { quote: "So many books, so little time.", author: "Frank Zappa" },
  { quote: "Two things are infinite: the universe and human stupidity; and I'm not sure about the universe.", author: "Albert Einstein" },
  { quote: "A room without books is like a body without a soul.", author: "Marcus Tullius Cicero" },
];

var lastIndex = -1;

function displayRandomQuote() {
  do {
    var randomNumber = Math.floor(Math.random() * quotes.length);
  } while (randomNumber === lastIndex);
 
  lastIndex = randomNumber;

  document.getElementById("quote").textContent = `“${quotes[randomNumber].quote}”`;
  document.getElementById("author").textContent = `${quotes[randomNumber].author}`;
}
