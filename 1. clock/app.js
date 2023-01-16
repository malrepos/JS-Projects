const hourElement = document.querySelector(".hour");
const minuteElement = document.querySelector(".minute");
const secondsElement = document.querySelector(".seconds");

function updateClock() {
  const currentDate = new Date();
  setTimeout(updateClock, 1000);
  const hours = currentDate.getHours();
  const minutes = currentDate.getMinutes();
  const seconds = currentDate.getSeconds();

  const hourDegree = (hours / 12) * 360;
  hourElement.style.transform = `rotate(${hourDegree}deg)`;

  const minuteDegree = (minutes / 60) * 360;
  minuteElement.style.transform = `rotate(${minuteDegree}deg)`;

  const secondDegree = (seconds / 60) * 360;
  secondsElement.style.getPropertyValue('transform') = `rotate (${secondDegree}deg)`;
}
updateClock();
