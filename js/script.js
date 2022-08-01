// const burger = document.querySelector(".menu__burger");
// const xMark = document.querySelector(".menu__xmark");
// const menu = document.querySelector(".navbar");

// burger.addEventListener("click", function () {
//   burger.classList.toggle("header__burger--none");
//   xMark.classList.toggle("header__xmark--display");
//   menu.classList.toggle("navbar--none");
// });

// xMark.addEventListener("click", function () {
//   burger.classList.toggle("header__burger--none");
//   xMark.classList.toggle("header__xmark--display");
//   menu.classList.toggle("navbar--none");
// });

let questions = document.querySelectorAll(".faq__question");

for (let i = 0; i < questions.length; i++) {
  questions[i].addEventListener("click", popUp, false);
}

function popUp() {
  let answer = this.querySelector(".faq__question-answer");
  let plus = this.querySelector(".faq__question-icon");
  let xmark = this.querySelector(".faq__question-xmark");
  answer.classList.toggle("faq__question-answer--displayBlock");
  plus.classList.toggle("faq__question-icon--displayNone");
  xmark.classList.toggle("faq__question-xmark--displayBlock");
}

$(".wrapper__scroller-up").on("click", function () {
  $("body, html").animate(
    {
      scrollTop: $(".wrapper").offset().top,
    },
    500
  );
});
