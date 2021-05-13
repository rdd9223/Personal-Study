const clockContainer = document.querySelector(".js-clock");
const clockTitle = clockContainer.querySelector("h1");

function fillZero(number) {
  return number < 10 ? `0${number}` : number;
}

function getTime() {
  const date = new Date();
  const minutes = date.getMinutes();
  const hours = date.getHours();
  const seconds = date.getSeconds();
  clockTitle.innerText = `${hours}:${fillZero(minutes)}:${fillZero(seconds)}`;
}

function init() {
  getTime();
  setInterval(getTime, 1000);
}

init();
