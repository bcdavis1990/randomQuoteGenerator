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
const quotes = [
  { quote: 'test', author: 'test', citation: 'test', year: 'test'},
  { quote: 'test2', author: 'test2',citation: 'test2', year: 'test2' },
  { quote: 'test3', author: 'test3', citation: 'test3', year: 'test3'},
  { quote: 'test4', author: 'test4', citation: 'test4', year: 'test4'},
  { quote: 'test5', author: 'test5', citation: 'test5', year: 'test5'}
];


/***
 * `getRandomQuote` function
***/
function getRandomQuote() {
  let randomNumber = Math.floor( Math.random() * (quotes.length));
    return quotes[randomNumber];
};


/***
 * `printQuote` function
***/
function printQuote () {
  let html = '';
  let randomQuote = getRandomQuote();
  html +=
  `<p class="quote">${randomQuote.quote}</p>
  <p class="source">${randomQuote.author}<span class="citation">${randomQuote.citation}</span>
  <span class="year">${randomQuote.year}</span></p>`

  document.querySelector('div').innerHTML = html;
};


/***
 * click event listener for the print quote button
 * DO NOT CHANGE THE CODE BELOW!!
***/

document.getElementById('load-quote').addEventListener("click", printQuote, false);