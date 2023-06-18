let [milliseconds,seconds,minutes,hours] = [0,0,0,0];
let [lapmilliseconds,lapseconds,lapminutes,laphours] = [0,0,0,0];
let lapcount = 0;
let int = 0;
let bestlap = 0;
let worstlap = 0;

const display = document.getElementById('time');
const lapdisplay = document.getElementById('laptime');

startbtn = document.getElementById('start');
lapbtn = document.getElementById('lap');
stopbtn = document.getElementsByClassName('start');

Table = document.getElementById('table');
table = document.querySelector('table');

lapbtn.disabled = true;
if(lapbtn.disabled){
    lapbtn.style.opacity = 0.2;
}

let isRunning = false;

startbtn.addEventListener('click', ()=>{
    // Start button
    if(!isRunning){
        isRunning = true;
        console.log("start");
        if(int!==0){
            clearInterval(int);
        }
        int = setInterval(Timer, 10);

        startbtn.innerHTML = 'Stop';
        startbtn.classList.add('stop');
        lapbtn.disabled = false;
        lapbtn.style.opacity = 1;
        lapbtn.innerHTML = 'Lap';
        lapbtn.classList.remove('reset');
        display.classList.add('redglow');
    }
    // Pause play button
    else{
        isRunning = false;
        console.log("stop");
        clearInterval(int);

        startbtn.innerHTML = 'Resume';
        startbtn.classList.remove('stop');
        lapbtn.innerHTML = 'Reset';
        lapbtn.classList.add('reset');
        display.classList.remove('redglow');
    }
    
});

lapbtn.addEventListener('click', ()=>{
    // lap button
    if(isRunning){
        console.log("lap");
        Table.classList.remove('invisible');
        lapcount++;
        table.innerHTML += `<tr><td>${lapcount}</td><td>${lh}:${lm}:${ls}:${lms}</td><td>${h}:${m}:${s}:${ms}</td></tr>`;
        [lapmilliseconds,lapseconds,lapminutes,laphours] = [0,0,0,0];
    }
    // Reset button
    else{
        location.reload();
    }
});

function updateDisplay(){
    h = hours < 10 ? "0" + hours : hours;
    m = minutes < 10 ? "0" + minutes : minutes;
    s = seconds < 10 ? "0" + seconds : seconds;
    ms = milliseconds < 10 ? "00" + milliseconds : milliseconds < 100 ? "0" + milliseconds : milliseconds;

    lh = laphours < 10 ? "0" + laphours : laphours;
    lm = lapminutes < 10 ? "0" + lapminutes : lapminutes;
    ls = lapseconds < 10 ? "0" + lapseconds : lapseconds;
    lms = lapmilliseconds < 10 ? "00" + lapmilliseconds : lapmilliseconds < 100 ? "0" + lapmilliseconds : lapmilliseconds;

    display.innerHTML = `${h}:${m}:${s}:${ms}`;
    lapdisplay.innerHTML = `${lh}:${lm}:${ls}:${lms}`;
}

function Timer(){
    milliseconds+=10;
    lapmilliseconds+=10;

    if(milliseconds == 1000){
        milliseconds = 0;
        seconds++;
        if(seconds == 60){
            seconds = 0;
            minutes++;
            if(minutes == 60){
                minutes = 0;
                hours++;
            }
        }
    }
    if(lapmilliseconds == 1000){
        lapmilliseconds = 0;
        lapseconds++;
        if(lapseconds == 60){
            lapseconds = 0;
            lapminutes++;
            if(lapminutes == 60){
                lapminutes = 0;
                laphours++;
            }
        }
    }
    updateDisplay();
}
