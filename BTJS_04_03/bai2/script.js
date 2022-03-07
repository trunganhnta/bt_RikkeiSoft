let numberBtn = document.querySelectorAll('#number')
let hoursNumber = document.querySelector('#hours')
let minutesNumber = document.querySelector('#minutes')
let secondsNumber = document.querySelector('#seconds')
let milisecondsNumber = document.querySelector('#milliseconds')

let clearBtn = document.querySelector('#clear')
let toggleBtn = document.querySelector('.toggle')
let resetBtn = document.querySelector('.reset')
let int = null;

let milliseconds,seconds,minutes,hours

let arrSeconds = []
let arrminutes = []
let arrhours = []

// an nut 
document.querySelector('.btns').style.display = 'none'

let count = 0

// xu li nhap du lieu
for(var i=0; i<numberBtn.length; i++){
    numberBtn[i].onclick = function(e){
        count++;
        if(count == 1 )
        {
          secondsNumber.innerText = 00 + e.target.value
        }else if(count == 2){
          if(+secondsNumber.innerText*1 >=6){
            secondsNumber.innerText = secondsNumber.innerText
          }else{
            secondsNumber.innerText = secondsNumber.innerText * 1 + e.target.value
          }
        }else if(count == 3){
          minutesNumber.innerText = secondsNumber.innerText 
          secondsNumber.innerText = 00 + e.target.value
        }else if(count == 4){
          if(+secondsNumber.innerText*1 >=6){
            secondsNumber.innerText = secondsNumber.innerText
          }else{
            secondsNumber.innerText = secondsNumber.innerText * 1 + e.target.value
          }
        }else if(count == 5){
          hoursNumber.innerText = minutesNumber.innerText 
          minutesNumber.innerText = secondsNumber.innerText 
          secondsNumber.innerText = 00 + e.target.value
        }else if(count == 6){
          if(+secondsNumber.innerText*1 >=6){
            secondsNumber.innerText = secondsNumber.innerText
          }
          secondsNumber.innerText = secondsNumber.innerText * 1 + e.target.value
        }
    }
}

// button clear time
clearBtn.addEventListener('click', () => {
    hoursNumber.innerText = '00'
    minutesNumber.innerText = '00'
    secondsNumber.innerText = '00'
    count = 0
})

// button reset time
resetBtn.addEventListener('click', () => {
  clearInterval(int)
  seconds = arrSeconds[0]*1 > 10 ? arrSeconds[0]*1 : arrSeconds[0]
  minutes = arrminutes[0]*1 > 10 ? arrminutes[0]*1 : arrminutes[0]
  hours = arrhours[0]*1 > 10 ? arrhours[0]*1 : arrhours[0]

  hoursNumber.innerText = hours < 10 ? "0" + hours : hours;
  minutesNumber.innerText = minutes < 10 ? "0" + minutes : minutes;
  secondsNumber.innerText = seconds < 10 ? "0" + arrSeconds[0] : arrSeconds[0];
  milisecondsNumber.innerText = '000'

  toggleBtn.style.display = 'inline';
  toggleBtn.addEventListener('click',Start)
  toggleBtn.innerText = 'Start';
  toggleBtn.style.backgroundColor = 'aqua'


})
// hien nut va set gia tri
function setValue(){
     document.querySelector('.numberBtns').style.display = 'none'
     document.querySelector('.btns').style.display = 'block'

     milliseconds = +1000
     seconds = +secondsNumber.innerHTML
     minutes = +minutesNumber.innerHTML
     hours = +hoursNumber.innerHTML

     if(hours == 0 && minutes == 0 && seconds == 0 ){
      seconds = 10
      secondsNumber.innerText = seconds
     }
     toggleBtn.style.display = 'inline';
     arrSeconds.push(seconds)
     arrminutes.push(seconds)
     arrhours.push(seconds)
     console.log('arrSeconds',arrSeconds)


    console.log("h",hours)
    console.log("m",minutes)
    console.log("s",seconds)
    console.log("ms",milliseconds)
}

//back
function back(){
     document.querySelector('.numberBtns').style.display = 'block'
     document.querySelector('.btns').style.display = 'none'
     hoursNumber.innerText = `00`
     minutesNumber.innerText = `00`
     secondsNumber.innerText = `00`
     milisecondsNumber.innerText = `000`;
     clearInterval(int);
     toggleBtn.removeEventListener('click', Stop);
     toggleBtn.addEventListener('click',Start)
     toggleBtn.innerText = 'Start';

     arrSeconds = []
     arrminutes = []
     arrhours = []
     count = 0

}

//set start
toggleBtn.addEventListener('click', Start);
function Start(){
    if(int!==null){
        clearInterval(int);
    }
    int = setInterval(displayTimer,10);

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
        console.log('arrSeconds',arrSeconds)

    }

function displayTimer(){

  console.log("h",hours)
  console.log("m",minutes)
  console.log("s",seconds)
  console.log("ms",milliseconds)

      // milliseconds-=11;
      // if(milliseconds <= 0 && seconds > 0){
      //     milliseconds = 999;
      //     seconds--;
      //     if(seconds === 0){
      //       if(hours == 0 && minutes == 0){
      //         clearInterval(int)
      //         toggleBtn.removeEventListener('click', Stop);
      //         toggleBtn.style.display = 'none';
      //         milisecondsNumber.innerHTML = '000'
      //       }else{
      //         seconds = 59;
      //         minutes--;
      //         if(minutes == 0){
      //             minutes = 59;
      //             hours--;
      //         }
      //       }  
      //     }
      // }
      milliseconds -= 10;
      if(milliseconds <= 0){
        milliseconds = 1000
        seconds--;
        if(seconds == 0 && minutes ==0 && hours ==0){
          clearInterval(int)
          milliseconds = 0
          toggleBtn.removeEventListener('click', Stop);
          toggleBtn.style.display = 'none';
        }else if(seconds == 0 && hours > 0){
          seconds = 60;
          minutes--;
          if(minutes == 0){
            minutes = 60;
            hours--;
          }
        }else if(hours == 0){
          if(seconds == 0){
            seconds = 60;
            minutes--;
          }
          
        }
        
      }
      
     

     let h = hours < 10 ? "0" + hours : hours;
     let m = minutes < 10 ? "0" + minutes : minutes;
     let s = seconds < 10 ? "0" + seconds : seconds;
     let ms = milliseconds < 10 ? "00" + milliseconds : milliseconds < 100 ? "0" + milliseconds : milliseconds;
 
     console.log('giay',s)
     console.log('minigiay',ms)
   
     hoursNumber.innerText = ` ${h}`
     minutesNumber.innerText = ` ${m}`
     secondsNumber.innerText = `${s} `
     milisecondsNumber.innerText = `${ms}`;
 }