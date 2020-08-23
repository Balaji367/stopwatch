const durationInput = document.querySelector("#duration");
const startButton = document.querySelector("#start");
const pauseButton = document.querySelector("#pause");
const circle = document.querySelector("circle");
const perimeter = circle.getAttribute('r') * Math.PI * 2;
circle.setAttribute('stroke-dasharray',perimeter);
let currentOffset = 0;
let duration;
const timer = new Timer(durationInput,startButton,pauseButton, {
    onStart(totalDuration){
        duration = totalDuration;
    },
    onTick(timeRemaining){
        circle.setAttribute('stroke-dashoffset',perimeter * timeRemaining/duration - perimeter);
    },
    onPause(){
        console.log("timer completed");
    }
});
let display;
setInterval(time,1000);
function time(){
    const date = new Date();
    display = `${date.getHours()}:${date.getMinutes()}:${date.getSeconds()}`
    document.querySelector('.time p').innerText = display;
}
const stopWatch = document.querySelector(".stopwatch");
const clock = document.querySelector(".clock");
const hour = document.querySelector(".time");
const value = document.querySelector(".value")
stopWatch.addEventListener("click",function (){
    hour.style.display = "none";
    value.style.display = "block";
    stopWatch.style.display = "none";
    clock.style.display = "inline-block";
});
clock.addEventListener("click",function (){
    hour.style.display = "block";
    value.style.display = "none";
    clock.style.display = "none";
    stopWatch.style.display = "inline-block";
});
