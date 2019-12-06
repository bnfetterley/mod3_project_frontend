let timerContainer = document.querySelector("#timer-container")
var timer = document.createElement("span");
timerContainer.append(timer)

let totalSeconds = 30;
let interval;

function setTime() {
    --totalSeconds;
    timer.innerHTML = `${totalSeconds} Seconds Left`
}

function startTimer(){
    interval = setInterval(setTime, 1000);
}

function stopTimer(){
    clearInterval(interval);
}

function resetTimer(){
    clearInterval(interval);
    totalSeconds = 30;
    timer.innerHTML = `${totalSeconds} Seconds Left`
}
    


















// function countdown(minutes) {
//     var seconds = 60;
//     var mins = minutes
//     function tick() {
//         let timerContainer = document.querySelector("#timer-container")
//         var timer = document.createElement("timer")
//         timerContainer.append(timer)

//         if(document.querySelector("timer")) {
//             document.querySelector("timer").remove()
//         }

//         var current_minutes = mins-1
//         seconds--;
//         timer.innerHTML = (seconds < 10 ? "0" : "") + String(seconds) + "seconds";
//         if( seconds > 0 ) {
//             setTimeout(tick, 1000);
//         } else {
//             if(mins > 1){
//                 countdown(mins-1);           
//             }
//         }
//     }
//     tick();
// }

