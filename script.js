const btn = document.getElementById("quoteBtn");
const quote = document.getElementById("quote");
const author = document.getElementById("author");
const api_url = "https://api.quotable.io/random";
let loadingStatus = false;

async function getQuote() {
    loadingStatus = true;
    quote.innerHTML = "Loading...";
    author.innerHTML = "Loading...";
    try {
        let response = await fetch(api_url);
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        let data = await response.json();
        let quoteContent = data.content;
        let quoteAuthor = data.author;
        quote.innerHTML = quoteContent;
        author.innerHTML = quoteAuthor;
    } catch (error) {
        console.error('There was a problem fetching the quote:', error);
        quote.innerHTML = "Failed to fetch quote";
        author.innerHTML = "";
    } finally {
        loadingStatus = false;
    }
}

btn.addEventListener("click", getQuote);

getQuote();
