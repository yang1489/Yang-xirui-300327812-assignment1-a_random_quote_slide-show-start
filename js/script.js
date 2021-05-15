/******************************************
Treehouse FSJS Techdegree:
project 1 - A Random Quote Generator
******************************************/

// For assistance: 
  // Check the "Project Resources" section of the project instructions
  // Reach out in your Slack community - https://treehouse-fsjs-102.slack.com/app_redirect?channel=chit-chat

/*** 
 * `quotes` array 
***/
var quotes = [
  { quote: " Only they who fulfill their duties in everyday matters will fulfill them on great occasions.", source: "Charles ", citation: "Commissioner, U.S. Office of Patents", year: "1899" },
  { quote: "The longest way have its close, the gloomiest night will wear on to a morning.", source: " Watson", citation: "Chairman of the Board", year: " 1986" },
  { quote: "A man is not old as long as he is seeking something. A man is not old until regrets take the place of dreams. ", source: "John Von Neumann", year: " 1944" },
  { quote: "You know some birds are not meant to be caged. their feathers are just too bright. ", source: "Bill", citation: "commenting on the microchip", year: "1965" },
  { quote: "A room without books is like a body without a soul.", source: "Marcus Tullius Cicero", citation: "President Equipment Corporation", year: "1972" },
  { quote: "Great minds have purpose, others have wishes.", source: "Bill Gates", year: "1981" },
  { quote: "The longest way have its close, the gloomiest night will wear on to a morning.", source: "Tracy Roy", citation: "National association", year: "1999" },
  { quote: "The best preparation for tomorrow is doing your best today.", source: "Friedrich Nietzsche", year: "1988" },
  { quote: "Be yourself; everyone else is already taken", source: "Oscar Wilde",year:"1925" }
];
/***
 * `getRandomQuote` function
***/
function getRandomQuote(quotes) {
  var randQuote = Math.floor(Math.random() * quotes.length);
  console.log(randQuote);
  return quotes[randQuote];
}

/***
 * `printQuote` function
***/

function printQuote() {
  var randomQuote = getRandomQuote(quotes);
  var htmlString = '<p class = "quote">' + randomQuote.quote + '</p><p class = "source">' + randomQuote.source;
  if (randomQuote.citation) {
    htmlString += '<span class="citation">' + randomQuote.citation + '</span>';
  };
  if (randomQuote.year) {
    htmlString += '<span class="year">' + randomQuote.year + '</span>';
  }
  htmlString += '</p>'
  document.getElementById("quote-box").innerHTML = htmlString;
}

/***
 * click event listener for the print quote button
 * DO NOT CHANGE THE CODE BELOW!!
***/

document.getElementById('load-quote').addEventListener("click", printQuote, false);