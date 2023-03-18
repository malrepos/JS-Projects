const months = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];
const weekdays = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];

// const days = document.querySelector(".days");
// const hours = document.querySelector(".hours");
// const mins = document.querySelector(".mins");
// const secs = document.querySelector(".secs");

const giveaway = document.querySelector(".giveaway");
const deadline = document.querySelector(".deadline");

const items = document.querySelectorAll(".deadline-format h4");

let tempDate = new Date();
let tempYear = tempDate.getFullYear();
let tempMonth = tempDate.getMonth();
let tempDay = tempDate.getDate();
const futureDate = new Date(tempYear, tempMonth, tempDay + 10, 11, 30, 0);

// let futureDate = new Date(2023, 2, 18, 16, 50, 00);
let years = futureDate.getFullYear();
const month = futureDate.getMonth();
const day = futureDate.getDay();
const date = futureDate.getDate();
const hour = futureDate.getHours();
const mins = futureDate.getMinutes();
const secs = futureDate.getSeconds();

giveaway.textContent = `The giveaway ends on ${weekdays[day]}, ${date} ${months[month]} ${years} at ${hour}:${mins}am`;

// let currentTime = new Date().getTime();
// const endMinute = currentDate.getMinutes();
// const endSecs = currentDate.getSeconds();

// items.forEach(function (item) {
//   if (item.classList.contains("mins")) {
//     item.textContent = `${endMinute - mins}`;
//   } else if (item.classList.contains("secs")) {
//     item.textContent = `${endSecs - secs}`;
//   }
// });

const futureTime = futureDate.getTime();

function getremainingTime() {
  let today = new Date().getTime();
  const t = futureTime - today;
  const oneDay = 1000 * 60 * 60 * 24;
  const oneHour = 1000 * 60 * 60;
  const oneMinute = 1000 * 60;
  let days = t / oneDay;
  days = Math.floor(days);
  let hours = Math.floor((t % oneDay) / oneHour);
  let minutes = Math.floor((t % oneHour) / oneMinute);
  let seconds = Math.floor((t % oneMinute) / 1000);

  // set CSSFontPaletteValuesRule
  const values = [days, hours, minutes, seconds];

  function format(item) {
    if (item < 10) {
      return (item = `0${item}`);
    } else {
      return item;
    }
  }

  items.forEach(function (item, index) {
    item.innerHTML = format(values[index]);
  });
  if (t < 0) {
    clearInterval(countdown);
    deadline.innerHTML = `<h4 class="expired">Sorry this giveaway has closed.</h4>`;
  }
}
// countdown
let countdown = setInterval(getremainingTime, 1000);

getremainingTime();
