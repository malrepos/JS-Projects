const hex = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"];

const btn = document.getElementById("btn");
const color = document.querySelector(".color");

btn.addEventListener("click", function () {
  addValue();
});

function addValue() {
  let hexValue = "#";
  for (let i = 0; i < 6; i++) {
    let randomNumber = Math.floor(Math.random() * hex.length);

    hexValue += hex[randomNumber];
  }

  document.body.style.backgroundColor = hexValue;
  color.textContent = hexValue;
}
