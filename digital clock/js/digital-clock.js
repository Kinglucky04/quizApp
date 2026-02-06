const hour = document.getElementById('hr');
const min = document.getElementById('min');
const sec = document.getElementById('sec');

setInterval(() => {
    let currentTime = new Date();

    hour.innerText = (currentTime.getHours() < 10 ? '0' : '') + currentTime.getHours();
    min.innerText = (currentTime.getMinutes() < 10 ? '0' : '') + currentTime.getMinutes();
    sec.innerText = (currentTime.getSeconds() < 10 ? '0' : '') + currentTime.getSeconds();
}, 1000)