let msg = document.querySelector(".text");
let inputMin = document.getElementById("min");
let inputSec = document.getElementById("sec");
let time = document.querySelector(".main");
let hr = document.querySelector(".hours");
let min = document.querySelector(".minutes");
let sec = document.querySelector(".seconds");
let stopBtn = document.querySelector(".stopAlarm button");
let setBtn = document.querySelector(".setAlarm button");
// let audio= new Audio("clock-alarm-8761.mp3");
let audio = document.querySelector(".myAudio");
console.log(audio);
let date = new Date();
hr.innerHTML = date.getHours();
min.innerHTML = date.getMinutes();
sec.innerHTML = date.getSeconds();

setInterval(() => {
    sec.innerHTML = parseInt(sec.innerHTML) + 1;
    if (sec.innerHTML == 60) {
        sec.innerHTML = 0;
        min.innerHTML = parseInt(min.innerHTML) + 1;
    }
    if (min.innerHTML == 60) {
        min.innerHTML = 0;
        hr.innerHTML = parseInt(hr.innerHTML) + 1;
    }
    playAudio();
}, 1000);

function playAudio() {
    console.log(inputMin.value);
    console.log(inputSec.value);
    if (sec.innerHTML == inputSec.value && min.innerHTML == inputMin.value) {
        audio.play();
    }
}
console.log(stopBtn);

stopBtn.addEventListener("click", () => {
    audio.pause();
    return;
});

setBtn.addEventListener("click", () => {
    if (inputMin.value == "" || inputSec.value == "") {
        alert("Please Enter time to set an alarm!");
    } else {
        msg.innerHTML = "Your alarm has been set!";
        confirm("The alarm will only ring if your PC is awake!");
    }
});
