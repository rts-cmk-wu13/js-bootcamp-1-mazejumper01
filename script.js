let quotes = [
    "A rose by any other name would smell as sweet. - William Shakespeare",
    "If you want something done right, do it yourself. - Charles-Guillaume Étienne	",
    "Do what you can, with what you have, where you are. - Theodore Roosevelt",
    "You miss 100% of the shots you don't take. - Wayne Gretzky",
    "It's not the years in your life that count. It's the life in your years. - Abraham Lincoln",
    "Let's go golfing' - Dj Khaled",
    "You don't have to be great to start, but you have to start to be great. - Zig Ziglar",
    "The journey of a thousand miles begins with one step. - Lao Tzu",
    "What we think, we become. - Buddha",
    "A person who never made a mistake never tried anything new. - Albert Einstein",
];

let quotesListElm = document.querySelector(".siteFooter__quote")
let i = 0;



quotes.forEach(function(quote, i) {


    let rQuote = quotes[Math.floor(Math.random() * quotes.length)];
    quotesListElm.innerHTML = `<blockquote>${rQuote}</blockquote>`;
    
   
})


