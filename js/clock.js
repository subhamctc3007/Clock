let daysList = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
let monthsList = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];

setInterval(function(){
    let today = new Date();

    let hours = today.getHours();
    let minutes = today.getMinutes();
    let seconds = today.getSeconds();
    isPM = false;
    if(hours > 12){
        hours -= 12;
        isPM = true;
    }
    h = hours < 10 ? "0" + hours : hours;
    m = minutes < 10 ? "0" + minutes : minutes;
    s = seconds < 10 ? "0" + seconds : seconds;
    
    if(isPM){
        document.getElementById('time').innerHTML = `${h}:${m}:${s} PM`;
    }
    else{
        document.getElementById('time').innerHTML = `${h}:${m}:${s} AM`;
    }
    
    let day = daysList[today.getDay()];
    let date = today.getDate();
    let month = monthsList[today.getMonth()];
    let year = today.getFullYear();
    document.querySelector('#date').innerHTML = date + ' ' + month + ' ' + year;
    document.querySelector('#day').innerHTML = day;
}, 100);