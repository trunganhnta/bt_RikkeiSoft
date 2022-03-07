let [milliseconds,seconds,minutes,hours] = [0,0,0,0];
let hoursNumber = document.getElementById('hours');
let minutesNumber = document.getElementById('minutes');
let secondsNumber = document.getElementById('seconds');
let milisecondsNumber = document.getElementById('milliseconds');
let toggleBtn = document.querySelector('.toggle')
let int = null;


toggleBtn.addEventListener('click', Start);
function Start(){
    if(int!==null){
        clearInterval(int);
    }
    int = setInterval(displayTimer,11);
    console.log('started') 
    toggleBtn.removeEventListener('click', Start);
    toggleBtn.addEventListener('click',Stop)
    toggleBtn.innerText = 'Pause';
    toggleBtn.style.backgroundColor = 'yellow'
}

    function Stop(){
        clearInterval(int);
        console.log('stopped') 
        toggleBtn.removeEventListener('click', Stop);
        toggleBtn.addEventListener('click',Start)
        toggleBtn.innerText = 'Continute';
        toggleBtn.style.backgroundColor = '#00E3FF'

    }
document.querySelector('.reset')?.addEventListener('click', ()=>{
    clearInterval(int);
    [milliseconds,seconds,minutes,hours] = [0,0,0,0];
    hoursNumber.innerText = ` 00 :`
    minutesNumber.innerText = ` 00 :`
    secondsNumber.innerText = `00 `
    milisecondsNumber.innerText = `00`;
    toggleBtn.innerText = 'Start';
    toggleBtn.style.backgroundColor = '#00E3FF'
});

function displayTimer(){
    milliseconds+=11;
    if(milliseconds >= 1000){
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

    let h = hours < 10 ? "0" + hours : hours;
    let m = minutes < 10 ? "0" + minutes : minutes;
    let s = seconds < 10 ? "0" + seconds : seconds;
    let ms = milliseconds < 10 ? "00" + milliseconds : milliseconds < 100 ? "0" + milliseconds : milliseconds;

    hoursNumber.innerText = ` ${h} :`
    minutesNumber.innerText = ` ${m} :`
    secondsNumber.innerText = `${s} `
    milisecondsNumber.innerText = `${ms}`;
}