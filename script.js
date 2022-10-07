//create global variables

const time_er = document.querySelector('.watch .time');
const start_bt = document.getElementById('start');
const stop_bt = document.getElementById("stop");
const reset_bt = document.getElementById("reset");

let secs = 0; //seconds
let interval = null; //intervals

start_bt.addEventListener('click' , start);
stop_bt.addEventListener("click" , stop);
reset_bt.addEventListener("click" , reset);



//Timer
function timerDisplay () {
    secs++;

    //Time format
    let hr = Math.floor(secs / 3600); 
    let min = Math.floor((secs - (hr * 3600)) / 60);
    let sec = secs % 60;

    if(sec < 10 ) sec = '0' + sec;
    if(min < 10 ) min = '0' + min;
    if(hr < 10 ) hr = '0' + hr;

     time_er.innerText = `${hr} : ${min} : ${sec}`;

}

function start() {
    if(interval) {
        return;
    }

    interval = setInterval(timerDisplay, 1000);
}

function stop() {
    clearInterval(interval);
    interval = null ;

}

function reset() {
    stop();
    seconds = 0;
    time_er.innerText = '00:00:00';
}


