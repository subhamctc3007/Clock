let displaybox = document.getElementById('displaybox');

let hrInput = document.getElementById('hrInput');
let minInput = document.getElementById('minInput');
let secInput = document.getElementById('secInput');

let hrdisplay = document.getElementById('hrdisplay');
let mindisplay = document.getElementById('mindisplay');
let secdisplay = document.getElementById('secdisplay');

startbtn = document.getElementById('startbtn');
deletebtn = document.getElementById('deletebtn');
stopbtn = document.getElementById('stopbtn');

let audio = document.getElementById('audio');

let isRunning = false;
let isfilled = false;
let int = 0;

startbtn.addEventListener('click', ()=>{
    hours = hrInput.value == '' ? 0 : Number(hrInput.value);
    minutes = minInput.value == '' ? 0 : Number(minInput.value);
    seconds = secInput.value == '' ? 0 : Number(secInput.value);

    // checks if all fields are empty
    if(hrInput.value == '' && minInput.value == '' && secInput.value == ''){
        isfilled = false;
    }
    else{
        isfilled = true;
    }

    if(hours > 99){
        hours = Number(hours.toString().charAt(0) + hours.toString().charAt(1));
    }
    if(minutes > 59){
        minutes = Number(minutes.toString().charAt(0));
    }
    if(seconds > 59){
        seconds = Number(seconds.toString().charAt(0));
    }
    if(isfilled){
        if(!isRunning){
            isRunning = true;
            console.log("start");
            if(int!==0){
                clearInterval(int);
            }
            int = setInterval(Timer, 1000);
            updateDisplay();
    
            hrInput.classList.add('invisible');
            minInput.classList.add('invisible');
            secInput.classList.add('invisible');
            hrdisplay.classList.remove('invisible');
            mindisplay.classList.remove('invisible');
            secdisplay.classList.remove('invisible');
            
            displaybox.classList.add('blueglow');
    
            startbtn.innerHTML = 'Pause';
            startbtn.classList.add('pause');
            deletebtn.classList.add('invisible');
        }
        else{
            clearInterval(int);
            console.log('Paused');
            isRunning = false;
    
            displaybox.classList.remove('blueglow');
    
            startbtn.innerHTML = 'Resume';
            startbtn.classList.remove('pause');
            deletebtn.classList.remove('invisible');
        }
    }
    else{
        alert('Please enter the time')
    }
});

deletebtn.addEventListener('click', ()=>{
    location.reload();
});

stopbtn.addEventListener('click', ()=>{
    audio.pause();
    location.reload();
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
                startbtn.classList.add('invisible');
                stopbtn.classList.remove('invisible');
                displaybox.classList.add('redglow');
                audio.play();
            }
            else{
                hours--;
                minutes = 59;
                seconds = 59;
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