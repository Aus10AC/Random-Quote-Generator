/******************************************
Treehouse Techdegree:
FSJS project 1 - A Random Quote Generator
******************************************/

var quotes = [
    {
       quote: 'A gamertag is an aggregation of all the actions you have done in competition...',
       source: 'Twitter @ TLstuchiu',
       citation: 'Twitter',
       year: 1993
    },
    {
       quote: 'After making all the mistakes, every player has a chance to turn the outcome of the game around by making the right moves next.',
       source: 'Zoltan Andrejkovics',
       citation: 'Twitter',
       year: 1993
    },
    {
       quote: "I'm probably the best SnD player in the world",
       source: 'Adam Killa Sloss',
       citation: 'Twitter',
       year: 1993
    },
    {
       quote: 'There are millions of sci-fi enthusiasts in the world, not jsut gamers',
       source: 'Brendan Iribe',
       citation: 'Twitter',
       year: 1993
    },
    {
       quote: 'Who needs sports stardom when you can shoot fireballs from your fingertips?',
       source: 'Ethan Gilsdorf',
       citation: 'Twitter',
       year: 1993
    },
];

// generates a random quote
function getRandomQuote(  ) {
  var quoteList = Math.floor(( Math.random() * ( quotes.length ) ) );
  return quotes[quoteList];
}

// Prints a random quote to the HTML document when called
function printQuote( ) {
  var recieveQuote = getRandomQuote();
  var message = '';
    message = "<p class='quote'>" + recieveQuote.quote + "</p>";
    message += "<p class='source'>" + recieveQuote.source;
    message += "<span class='citation'>" + recieveQuote.citation + "</span>";
    message += "<span class='year'>" + recieveQuote.year + "</span>"
    message += "</p>";
    document.getElementById('quote-box').innerHTML = message;
}

// Changes background color on click
var rgb;

function changeColor( ) {
  var colorGenerator = Math.floor(Math.random() * 256 );
  for ( var i = 0; i < 10; i += 1 ) {
    rgb = 'rgb(' + colorGenerator + ',' + colorGenerator + ',' + colorGenerator + ')';
  }
  html = document.getElementById('color').onclick = changeColor;
  html += '<div id="color" style="background-color:' + rgb + '"></div>';
}

changeColor();

// Provides a quote upon first view
printQuote();

// Listens for functions
document.getElementById('loadQuote').addEventListener("click", printQuote, false);
