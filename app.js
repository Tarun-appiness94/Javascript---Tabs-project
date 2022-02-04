
// Selecting required elements
const about = document.querySelector(".about");
const btns = document.querySelectorAll(".tab-btn");
const articles = document.querySelectorAll(".content");

// check for event on buttons
about.addEventListener("click", function (e) {
  const id = e.target.dataset.id;
  if (id) {
    // remove active class from other buttons
    btns.forEach(function (btn) {
      btn.classList.remove("active");
    });
    e.target.classList.add("active");
    // hide other articles
    articles.forEach(function (article) {
      article.classList.remove("active");
    });
    // how artical witch matches the data-id
    const element = document.getElementById(id);
    element.classList.add("active");
  }
});
