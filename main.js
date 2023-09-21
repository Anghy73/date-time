const root = document.documentElement;
const date = document.getElementById("date");
const time = document.getElementById("time");

const WEEK = ["SUM", "MON", "TUE", "WED", "THU", "FRI", "SAT"];
const COLORS = ['red', 'blue', 'yellow', 'pink', 'orange', 'greenyellow', 'cyan', 'fuchsia', 'white', 'gray'];


const updateTime = () => {
  let now = new Date();

  date.innerHTML = `
    ${addZero(now.getDate(), 2)} - ${addZero(
    now.getMonth() + 1,
    2
  )} - ${addZero(now.getFullYear(), 2)} ${WEEK[now.getDay()]}
  `;

  let seconds = now.getSeconds()

  time.innerHTML = `
    ${addZero(now.getHours(), 2)} : ${addZero(now.getMinutes(), 2)} : ${addZero(
    seconds,
    2
  )}
  `;

  seconds >= 59 ? changeColor() : null;

};

updateTime();

setInterval(() => {
  updateTime();
}, 1000);

function addZero(num, cant) {
  return String(num).padStart(cant, "0");
}

function numberRandom() {
  return Math.floor(Math.random() * (COLORS.length - 0) + 0)
}

function changeColor() {
  root.style.setProperty('--shadow-color', COLORS[numberRandom()])
}