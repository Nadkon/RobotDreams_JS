const deadline = new Date(2023, 11, 31).getTime();
const day = document.querySelector(".days");
const hour = document.querySelector(".hours");
const minute = document.querySelector(".minutes");
const second = document.querySelector(".seconds");
let now = new Date().getTime();
let t = deadline - now;

function showTimer() {
  if (t >= 0) {
    now = new Date().getTime();
    t = deadline - now;
    let days = Math.floor(t / (1000 * 60 * 60 * 24));
    let hours = Math.floor((t % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    let minutes = Math.floor((t % (1000 * 60 * 60)) / (1000 * 60));
    let seconds = Math.floor((t % (1000 * 60)) / 1000);
    day.innerHTML = days + "<span> day(s)</span>";
    hour.innerHTML = ("0" + hours).slice(-2) + "<span> hour(s)</span>";
    minute.innerHTML = ("0" + minutes).slice(-2) + "<span> minute(s)</span>";
    second.innerHTML = ("0" + seconds).slice(-2) + "<span> second(s)</span>";
  } else {
    const timer = document.querySelector(".timer");
    timer.textContent = "Happy New Year!!!!";
  }
}
function timer() {
  setInterval(() => showTimer(), 1000);
}
timer();
