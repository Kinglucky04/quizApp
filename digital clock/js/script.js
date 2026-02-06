const hours = document.getElementById('hour');
const min = document.getElementById('min');
const sec = document.getElementById('sec');

setInterval(() => {
    let currentTime = new Date();

    hours.innerHTML = (currentTime.getHours() < 10 ? "0" : "") + currentTime.getHours();
    min.innerHTML = (currentTime.getMinutes() < 10 ? "0" : "") + currentTime.getMinutes();
    sec.innerHTML = (currentTime.getSeconds() < 10 ? "0" : "") + currentTime.getSeconds();
}, 1000);



