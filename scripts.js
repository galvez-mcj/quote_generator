const newQuote = document.querySelector('#new-quote')
const quote =  document.querySelector('.quote')
const person = document.querySelector('.person')

const quotes = [
    {
        quote: "There is a thin line that separates laughter and pain, comedy and tragedy, humor and hurt.",
        person: "Erma Bombeck"
    }, {
        quote: "I'm selfish, impatient and a little insecure. I make mistakes, I am out of control and at times hard to handle. But if you can't handle me at my worst, then you sure as hell don't deserve me at my best.",
        person: "Marilyn Monroe"
    }, {
        quote: "You've gotta dance like there's nobody watching, Love like you'll never be hurt, Sing like there's nobody listening, And live like it's heaven on earth.",
        person: "William W. Purkey"
    }, {
        quote: "You only live once, but if you do it right, once is enough.",
        person: "Mae West"
    }, {
        quote: "Insanity is doing the same thing, over and over again, but expecting different results.",
        person: "Narcotics Anonymous"
    }, {
        quote: "It is better to be hated for what you are than to be loved for what you are not.",
        person: " Andre Gide, Autumn Leaves "
    }, {
        quote: "There are only two ways to live your life. One is as though nothing is a miracle. The other is as though everything is a miracle.",
        person: "Albert Einstein"
    }, {
        quote: "It does not do to dwell on dreams and forget to live.",
        person: "J.K. Rowling, Harry Potter and the Sorcerer's Stone "
    }, {
        quote: "I may not have gone where I intended to go, but I think I have ended up where I needed to be.",
        person: "Douglas Adams"
    }, {
        quote: "Life isn't about finding yourself. Life is about creating yourself.",
        person: "George Bernard Shaw"
    }
]


newQuote.addEventListener("click", () => {
    let quoteNum = Math.floor(Math.random() * 10)
    quote.textContent = '"' + quotes[quoteNum].quote + '"'
    person.textContent = quotes[quoteNum].person
})