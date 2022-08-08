const burger = document.querySelector(".menu__burger");
const xMark = document.querySelector(".menu__xmark");
const menu = document.querySelector(".menu__mobile");

function menuToggle() {
  burger.classList.toggle("menu__burger--displayNone");
  xMark.classList.toggle("menu__xmark--displayBlock");
  menu.classList.toggle("menu__mobile--displayBlock");
}

burger.addEventListener("click", menuToggle);

xMark.addEventListener("click", menuToggle);

//jump to section from menu

$(".menu__nav-list-item div").on("click", function () {
  const goToSection = "#" + $(this).attr("class");
  $("body, html").animate(
    {
      scrollTop: $(goToSection).offset().top,
    },
    500
  );
});

//scroller
$(".wrapper__scroller-up-icon").on("click", function () {
  $("body, html").animate(
    {
      scrollTop: $(".wrapper").offset().top,
    },
    500
  );
});

//expand answer for question
let questions = document.querySelectorAll(".faq__question");

for (let i = 0; i < questions.length; i++) {
  console.log(questions[i]);

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

