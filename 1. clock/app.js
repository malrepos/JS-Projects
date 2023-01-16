const hourElement = document.querySelector(".arrows .hour");
const minuteElement = document.querySelector(".arrows .minutes");
const secondsElement = document.querySelector(".arrows .seconds");

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
  secondsElement.style.transform = `rotate(${secondDegree}deg)`;
}
updateClock();
