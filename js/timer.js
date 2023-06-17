let hrInput = document.getElementById('hrInput');
let minInput = document.getElementById('minInput');
let secInput = document.getElementById('secInput');

let hrdisplay = document.getElementById('hrdisplay');
let mindisplay = document.getElementById('mindisplay');
let secdisplay = document.getElementById('secdisplay');

startbtn = document.getElementById('startbtn');

let isRunning = false;
let int = 0;

startbtn.addEventListener('click', ()=>{

    hours = hrInput.value == '' ? 0 : Number(hrInput.value);
    minutes = minInput.value == '' ? 0 : Number(minInput.value);
    seconds = secInput.value == '' ? 0 : Number(secInput.value);

    if(!isRunning){
        isRunning = true;
        console.log("start");
        if(int!==0){
            clearInterval(int);
        }
        int = setInterval(Timer, 1000);


        startbtn.innerHTML = 'Pause';
        startbtn.classList.add('pause');
    }
    else{
        clearInterval(int);
        console.log('Paused')
        isRunning = false;
        startbtn.innerHTML = 'Resume';
        startbtn.classList.remove('pause');
    }
});

function updateDisplay(){
    hrdisplay.innerHTML = hours < 10 ? "0" + hours.toString() : hours.toString();
    mindisplay.innerHTML = minutes < 10 ? "0" + minutes.toString() : minutes.toString();
    secdisplay.innerHTML = seconds < 10 ? "0" + seconds.toString() : seconds.toString();
}

function Timer(){
    if(seconds == 0){
        if(minutes == 0){
            if(hours == 0){
                clearInterval(int);
                isRunning = false;
            }
            else{
                hours--;
                minutes = 59;
            }
        }
        else{
            minutes--;
            seconds = 59;
        }
    }
    else{
        seconds--;
    }
    updateDisplay();

    hrInput.value = hours;
    minInput.value = minutes;
    secInput.value = seconds;
    console.log(hours + ':' + minutes + ':' +seconds);
}