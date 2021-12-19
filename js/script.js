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
  { quote: 'Be Yourself; Everyone Else is Already Taken', 
    source: 'Oscar Wilde', 
    citation: 'De Profundis', 
    year: '1905'
  },
  { quote: 'Be The Change You Want To See In The World', 
    source: 'Mahatma Gandhi',
  },
  { quote: 'We Accept The Love We Think We Deserve', 
    source: 'Stephen Chbosky', 
    citation: 'The Perks of Being A Wallflower',
    year: '1999'},
  { quote: "I Have Not Failed. I've just found 10,000 Ways That Won't Work", 
    source: 'Thomas A. Edison', 
  },
  { quote: "It's Never Too Late To Be What You Might Have Been", 
    source: 'George Eliot', 
    citation: 'Illinios School Journal', 
    year: '1884'}
];


/***
 * `getRandomQuote` function
***/

//code that pulls the Random Quote
function getRandomQuote() {
  let randomNumber = Math.floor( Math.random() * (quotes.length));
    return quotes[randomNumber];
};


/***
 * `printQuote` function
***/

//function that prints the Random Quote to the page
function printQuote () {
  let html = '';
  let randomQuote = getRandomQuote();
  html +=
  `<p class="quote">${randomQuote.quote}</p>
  <p class="source">${randomQuote.source}`
  
  //runs if the quote includes a citation
  if ('citation' in randomQuote) {
     html += `<span class="citation"> ${randomQuote.citation} </span>`;
  }

  //runs if the quote includes a year
  if ('year' in randomQuote) {
    html += `<span class="year"> ${randomQuote.year} </span>`;
}
  //targets the 'div class="container"' element where the original quote existed
 document.querySelector('div').innerHTML = html;
};


/***
 * click event listener for the print quote button
 * DO NOT CHANGE THE CODE BELOW!!
***/

document.getElementById('load-quote').addEventListener("click", printQuote, false);