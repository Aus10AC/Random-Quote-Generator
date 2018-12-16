/******************************************
Treehouse Techdegree:
FSJS project 1 - A Random Quote Generator
******************************************/

const quotes = [
    {
       quote: 'A gamertag is an aggregation of all the actions you have done in competition...',
       source: 'TLstuchiu',
       citation: '<a href="#">Twitter</a>',
       year: 1993
    },
    {
       quote: 'After making all the mistakes, every player has a chance to turn the outcome of the game around by making the right moves next.',
       source: 'Zoltan Andrejkovics',
       citation: '<a href="#">Twitter</a>',
       year: 1993
    },
    {
       quote: "I'm probably the best SnD player in the world",
       source: 'Adam Killa Sloss',
       citation: '<a href="#">Twitter</a>',
       year: 1993
    },
    {
       quote: 'There are millions of sci-fi enthusiasts in the world, not jsut gamers',
       source: 'Brendan Iribe',
       citation: '<a href="#">Twitter</a>',
       year: 1993
    },
    {
       quote: 'Success is not final, failure is not fatal: it is the courage to continue that counts',
       source: 'Winston Churchill',
       citation: '<a href="#">Twitter</a>',
       year: 1993
    },
];

// generates a random quote

const getRandomQuote = ( ) => {
  let quoteList = Math.floor(( Math.random( ) * ( quotes.length ) ) );
  return quotes[ quoteList ];
}

// Prepares a random quote to be printed to the document once called

const printQuote = ( ) => {
  let recieveQuote = getRandomQuote( );
  let message = '';
    message =
    `
      <p class='quote'> ${recieveQuote.quote} </p>
      <p class='source'> ${recieveQuote.source}
        <span class='citation'> ${recieveQuote.citation} </span>
        <span class='year'> ${recieveQuote.year} </span>
      </p>
    `
    document.getElementById( 'quote-box' ).innerHTML = message;
}   // Starts the page off with a quote instead of a blank screen
printQuote();

// Generates random RGB color

let rgb;
const rgbColor = ( ) => {
  const red = Math.floor( Math.random( ) * 256 );
  const green = Math.floor( Math.random ( ) * 256 );
  const blue = Math.floor( Math.random ( ) * 256 );
  rgb = 'rgb(' + red + ',' + green + ',' + blue + ')';
  return rgb;
}

// Auto-refreshes Quotes

setInterval( () => {
  document.getElementById( 'color' ).style.background = rgbColor( );
  printQuote( );
}, 5000);

// changes background color on click

document.getElementById( 'loadQuote' ).addEventListener( "click", ( ) =>  {
  document.getElementById( 'color' ).style.background = rgbColor( );
});

// Listens for functions

document.getElementById('loadQuote').addEventListener("click", printQuote, false);
