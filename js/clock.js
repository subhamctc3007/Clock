let daysList = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
let monthsList = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];

setInterval(function(){
    document.querySelector('#time').innerHTML = new Date().toLocaleTimeString();
    let today = new Date();
    let day = daysList[today.getDay()];
    let date = today.getDate();
    let month = monthsList[today.getMonth()];
    let year = today.getFullYear();
    document.querySelector('#date').innerHTML = date + ' ' + month + ' ' + year;
    document.querySelector('#day').innerHTML = day;
}, 100);