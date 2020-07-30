const dataArray = {
    1: {
        'author': 'Oscar Wilde',
        'quote' : 'Be yourself; everyone else is already taken.'
    },
    2: {
        'author': 'Albert Einstein',
        'quote' : "Two things are infinite: the universe and human stupidity; and I'm not sure about the universe."
    },
    3: {
        'author': 'Frank Zappa',
        'quote' : 'So many books, so little time.'
    },
    4: {
        'author': 'Marcus Tullius Cicero',
        'quote' : 'A room without books is like a body without a soul.'
    },
    5: {
        'author': 'Mahatma Gandhi',
        'quote' : 'Be the change that you wish to see in the world.'
    },
    6: {
        'author': 'Robert Frost',
        'quote' : "In three words I can sum up everything I've learned about life: it goes on."
    },
    7: {
        'author': "Mark Twain",
        'quote' : "If you tell the truth, you don't have to remember anything."
    },
    8: {
        'author': "Ralph Waldo Emerson",
        'quote' : "To be yourself in a world that is constantly trying to make you something else is the greatest accomplishment."
    },
    9: {
        'author': "Thomas A. Edison",
        'quote' : "I have not failed. I've just found 10,000 ways that won't work."
    },
    10: {
        'author': "Mark Twain",
        'quote' : "The man who does not read has no advantage over the man who cannot read."
    },
    11: {
        'author': "George Eliot",
        'quote' : "It is never too late to be what you might have been."
    },
    12: {
        'author': "Ralph Waldo Emerson",
        'quote' : "For every minute you are angry you lose sixty seconds of happiness."
    },
    13: {
        'author': "Albert Einstein",
        'quote' : "If you can't explain it to a six year old, you don't understand it yourself."
    },
    14: {
        'author': "Pablo Picasso",
        'quote' : "Everything you can imagine is real."
    },
    15: {
        'author': "Haruki Murakami",
        'quote' : "If you only read the books that everyone else is reading, you can only think what everyone else is thinking."
    },
    16: {
        'author': "Anaïs Nin",
        'quote' : "We don't see things as they are, we see them as we are."
    },
    17: {
        'author': "Dr. Seuss",
        'quote' : "Sometimes the questions are complicated and the answers are simple."
    },
    18: {
        'author': "George Bernard Shaw",
        'quote' : "Life isn't about finding yourself. Life is about creating yourself."
    },
    19: {
        'author': "Albert Einstein",
        'quote' : "Logic will get you from A to Z; imagination will get you everywhere."
    },
    20: {
        'author': "Theodore Roosevelt",
        'quote' : "Do what you can, with what you have, where you are."
    }
}

const arrayLength = Object.keys(dataArray).length;

const body               = document.querySelector("body");
const btnChangeThemeSame = document.getElementById("btn-change-theme-same");
const btnChangeThemeCarnival = document.getElementById("btn-change-theme-carnival");
const btnGenQuote    = document.getElementById("btn-gen-quote");
const pTheme         = document.getElementById("p-theme");
const quote          = document.getElementById("quote");
const author         = document.getElementById("author");

btnGenQuote.addEventListener('click', genQuote);

btnChangeThemeSame.addEventListener('click', changeThemeSame);
btnChangeThemeCarnival.addEventListener('click', changeThemeCarnival);

function genQuote() {
    
    const index = Math.floor(Math.random()*arrayLength);
    
    quote.innerHTML  = dataArray[index]['quote'];
    author.innerHTML = dataArray[index]['author'];
}

function randomHex() {
    const hexArray = [
        '0', '1', '2', '3', 
        '4', '5', '6', '7', 
        '8', '9', 'A', 'B', 
        'C', 'D', 'E', 'F', 
    ];
    let hex = '#';

    for (let i=0; i < 6; i++) {
        const index = Math.floor(Math.random()*hexArray.length);

        hex += hexArray[index];
    }

    return hex;
}

function changeThemeSame() {

    const hex = randomHex();

    body.style.backgroundColor = hex;

    pTheme.style.color = hex;

    btnChangeThemeSame.style.color = hex;
    btnChangeThemeSame.style.borderColor = hex;

    // btnChangeThemeCarnival.style.color = hex;
    // btnChangeThemeCarnival.style.borderColor = hex;

    btnGenQuote.style.color  = hex; 
    btnGenQuote.style.borderColor = hex;

    quote.style.color = hex;
    author.style.color = hex;
}

function changeThemeCarnival() {

    body.style.backgroundColor = randomHex();

    pTheme.style.color = randomHex();

    btnChangeThemeSame.style.color = randomHex();
    btnChangeThemeSame.style.borderColor = randomHex();

    // btnChangeThemeCarnival.style.color = randomHex();
    // btnChangeThemeCarnival.style.borderColor = randomHex();

    btnGenQuote.style.color  = randomHex(); 
    btnGenQuote.style.borderColor = randomHex();

    quote.style.color = randomHex();
    author.style.color = randomHex();
}