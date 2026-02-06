window.addEventListener('load', () => {
        const apiUrl = 'https://api.quotable.io/random';
        const quote = document.querySelector('#quote');
        const author = document.querySelector('#author');
        const quoteBtn = document.querySelector('.quote-btn');
        const tweetBtn = document.querySelector('.tweet-btn');

        async function getApi(url){
            const response = await fetch(url);
            let data = await response.json();

            quote.innerHTML = data.content;
            author.innerHTML = data.author;
        }

        function tweetQuote(){
            const twitterUrl = `https://twitter.com/intent/tweet?text=${quote.innerText} - ${author.innerText}`;
            window.open(twitterUrl, '_blank');
        }

        // setInterval(() => {
        //     getApi(apiUrl);
        // }, 3000);


        quoteBtn.addEventListener('click', () => {
            getApi(apiUrl);
        });

        tweetBtn.addEventListener('click', () => {
            tweetQuote();
        });

})