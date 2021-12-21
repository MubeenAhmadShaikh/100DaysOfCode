const dayElement = document.querySelector(".day");
const hourElement = document.querySelector(".hour");
const minuteElement = document.querySelector(".minute");
const secondElement = document.querySelector(".second");
const counter = document.querySelector(".countdown");
const congrats = document.querySelector(".congrats");
const mainImg = document.querySelector("#main");
const heading = document.querySelector(".heading");

const countdown = () => {
  const lastDay = new Date("March 21, 2022 00:00:00").getTime();
  const firstDay = new Date().getTime();
  const daysLeft = lastDay - firstDay;

  //Calculation of time
  const second = 1000;
  const minute = second * 60;
  const hour = minute * 60;
  const day = hour * 24;

  const textDay = Math.trunc(daysLeft / day);
  const textHour = Math.trunc((daysLeft % day) / hour);
  const textMinute = Math.trunc((daysLeft % hour) / minute);
  const textSecond = Math.trunc((daysLeft % minute) / second);

  dayElement.textContent = textDay;
  hourElement.textContent = textHour;
  minuteElement.textContent = textMinute;
  secondElement.textContent = textSecond;

  if (daysLeft <= 1000) {
    stopTimer();
    heading.classList.add("hidden");
    counter.classList.add("hidden");
    congrats.classList.remove("hidden");
    mainImg.classList.add("hidden");
  }
};

let timer = setInterval(countdown, 1000);

const stopTimer = () => {
  clearInterval(timer);
};
