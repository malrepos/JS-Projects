const increase = document.querySelector(".increase");
const decrease = document.querySelector(".decrease");
const reset = document.querySelector(".reset");
const value = document.getElementById("value");

const btns = document.querySelectorAll(".btn");

let counter = 0;

btns.forEach(function (item) {
  item.addEventListener("click", function (event) {
    const styles = event.currentTarget.classList;
    if (styles.contains("increase")) {
      counter++;
    } else if (styles.contains("decrease")) {
      counter--;
    } else {
      counter = 0;
    }
    value.textContent = counter;
    if (value.textContent > 0) {
      value.style.color = "green";
    } else if (value.textContent < 0) {
      value.style.color = "red";
    } else {
      value.style.color = "black";
    }
  });
});

// increase.addEventListener("click", function () {
//   counter++;
//   value.textContent = counter;
// });

// decrease.addEventListener("click", function () {
//   counter--;
//   value.textContent = counter;
// });

// reset.addEventListener("click", function () {
//   counter = 0;
//   value.textContent = counter;
// });
