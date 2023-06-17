let [milliseconds,seconds,minutes,hours] = [0,0,0,0];
let int = 0;

const display = document.querySelector('.time');
startbtn = document.getElementById('start');
lapbtn = document.getElementById('lap');
stopbtn = document.getElementsByClassName('start');

lapbtn.disabled = true;
if(lapbtn.disabled){
    lapbtn.style.opacity = 0.2;
}

let isRunning = false;

startbtn.addEventListener('click', ()=>{
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
    if(isRunning){
        console.log("lap");
    }
    else{
        isRunning = false;
        console.log("reset");
        clearInterval(int);
        [milliseconds,seconds,minutes,hours] = [0,0,0,0];
        updateDisplay();
        startbtn.innerHTML = 'Start';
        // startbtn.classList.remove('stop');
        lapbtn.disabled = true;
        lapbtn.innerHTML = 'Lap';
        lapbtn.style.opacity = 0.2;
        lapbtn.classList.remove('reset');
    }
});

function updateDisplay(){
    let h = hours < 10 ? "0" + hours : hours;
    let m = minutes < 10 ? "0" + minutes : minutes;
    let s = seconds < 10 ? "0" + seconds : seconds;
    let ms = milliseconds < 10 ? "00" + milliseconds : milliseconds < 100 ? "0" + milliseconds : milliseconds;
    display.innerHTML = `${h}:${m}:${s}:${ms}`;
}

function Timer(){
    milliseconds+=10;
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
    updateDisplay();
}