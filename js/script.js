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

$(".wrapper__scroller-up").on("click", function () {
  $("body, html").animate(
    {
      scrollTop: $(".wrapper").offset().top,
    },
    500
  );
});
