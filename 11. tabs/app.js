const btns = document.querySelectorAll(".tab-btn");
const about = document.querySelector(".about");
const articles = document.querySelectorAll(".content");

// btns.forEach(function (item) {
//   item.addEventListener("click", function (event) {
//     if (!event.currentTarget.classList.contains("active")) {
//       event.currentTarget.classList.add("active");
//     }
//     console.log(event.currentTarget.getAttribute("data-id"));
//   });
// });

about.addEventListener("click", function (event) {
  const id = event.target.dataset.id;
  if (id) {
    btns.forEach(function (btn) {
      btn.classList.remove("active");
      event.target.classList.add("active");
    });
    // hide all the articles, display matching id
    articles.forEach(function (article) {
      article.classList.remove("active");
    });
    const element = document.getElementById(id);
    element.classList.add("active");
  }
  console.log(event.target.dataset.id);
});
