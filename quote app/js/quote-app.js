const apiUrl = 'https://api.quotable.io/random';
const quoteElement = document.getElementById('quote');
const authorElement = document.getElementById('author');
const quoteBtn = document.querySelector('.quote-btn');
const tweetBtn = document.querySelector('.tweet-btn');

async function getUrl(url){
    const response = await fetch(url);
    const data = await response.json();

    quoteElement.innerText = data.content;
    authorElement.innerText = data.author;
}

function tweetQuote(){
    const twitterUrl = `https://twitter.com/intent/tweet?text=${quoteElement.innerText} - ${authorElement.innerText}`;
    window.open(twitterUrl, '_blank');
}

quoteBtn.addEventListener('click', () => {
    getUrl(apiUrl);
});

tweetBtn.addEventListener('click', () => {
    tweetQuote();
})