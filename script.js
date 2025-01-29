let quotes = [
    "Leo",
    "Simba",
    "Findus",
    "Emil",
    "Felix",
    "Garfield"
];
let quotesListElm = document.querySelector(".siteFooter__quote")
let i = 0;


// While løkke

// while( i < cats.length ) {
//     catsListElm.innerHTML += "<li>" + cats[i] + "</li>"
//     // i = i + 1;
//     i++;
// }


// for løkke
// for(i = 0; i < cats.length; i++ ) {
//     console.log(cats[i]);

//     catsListElm.innerHTML += "<li>" + cats[i] + "</li>"
// }


//foreach løkke
quotes.forEach(function(quote, i) {


    let rQuote = quotes[Math.floor(Math.random() * quotes.length)];
    quotesListElm.innerHTML += `<blockquote>${rQuote}</blockquote>`;

    console.log(rQuote);
})


