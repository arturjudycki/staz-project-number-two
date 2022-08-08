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

//select in pricing section

const control = document.querySelector(".pricing__interactive-type--control");
const dimensions = document.querySelector(
  ".pricing__interactive-type--dimensions"
);
const inbound = document.querySelector(".pricing__interactive-type--inbound");

const titleControl = document.querySelector(
  ".pricing__interactive-title--control"
);
const titleDimensions = document.querySelector(
  ".pricing__interactive-title--dimensions"
);
const titleInbound = document.querySelector(
  ".pricing__interactive-title--inbound"
);

const textControl = document.querySelector(
  ".pricing__interactive-text--control"
);
const textDimensions = document.querySelector(
  ".pricing__interactive-text--dimensions"
);
const textInbound = document.querySelector(
  ".pricing__interactive-text--inbound"
);

const imageControl = document.querySelector(
  ".pricing__interactive-image--control"
);
const imageDimensions = document.querySelector(
  ".pricing__interactive-image--dimensions"
);
const imageInbound = document.querySelector(
  ".pricing__interactive-image--inbound"
);

control.addEventListener("click", function () {
  if (control.classList.contains("pricing__interactive-type--bgcWhite")) {
    if (inbound.classList.contains("pricing__interactive-type--active")) {
      inbound.classList.remove("pricing__interactive-type--active");
      titleInbound.classList.toggle("pricing__interactive-title--displayBlock");
      textInbound.classList.toggle("pricing__interactive-text--displayBlock");
      imageInbound.classList.toggle("pricing__interactive-image--displayBlock");
    } else {
      dimensions.classList.remove("pricing__interactive-type--active");
      titleDimensions.classList.toggle(
        "pricing__interactive-title--displayBlock"
      );
      textDimensions.classList.toggle(
        "pricing__interactive-text--displayBlock"
      );
      imageDimensions.classList.toggle(
        "pricing__interactive-image--displayBlock"
      );
    }
    control.classList.remove("pricing__interactive-type--bgcWhite");
    titleControl.classList.toggle("pricing__interactive-title--displayNone");
    textControl.classList.toggle("pricing__interactive-text--displayNone");
    imageControl.classList.toggle("pricing__interactive-image--displayNone");
  }
});

dimensions.addEventListener("click", function () {
  if (!dimensions.classList.contains("pricing__interactive-type--active")) {
    if (inbound.classList.contains("pricing__interactive-type--active")) {
      inbound.classList.remove("pricing__interactive-type--active");
      titleInbound.classList.toggle("pricing__interactive-title--displayBlock");
      textInbound.classList.toggle("pricing__interactive-text--displayBlock");
      imageInbound.classList.toggle("pricing__interactive-image--displayBlock");
    } else {
      control.classList.add("pricing__interactive-type--bgcWhite");
      titleControl.classList.toggle("pricing__interactive-title--displayNone");
      textControl.classList.toggle("pricing__interactive-text--displayNone");
      imageControl.classList.toggle("pricing__interactive-image--displayNone");
    }
    dimensions.classList.add("pricing__interactive-type--active");
    titleDimensions.classList.toggle(
      "pricing__interactive-title--displayBlock"
    );
    textDimensions.classList.toggle("pricing__interactive-text--displayBlock");
    imageDimensions.classList.toggle(
      "pricing__interactive-image--displayBlock"
    );
  }
});

inbound.addEventListener("click", function () {
  if (!inbound.classList.contains("pricing__interactive-type--active")) {
    if (dimensions.classList.contains("pricing__interactive-type--active")) {
      dimensions.classList.remove("pricing__interactive-type--active");
      titleDimensions.classList.toggle("pricing__interactive-title--displayBlock");
      textDimensions.classList.toggle("pricing__interactive-text--displayBlock");
      imageDimensions.classList.toggle("pricing__interactive-image--displayBlock");
    } else {
      control.classList.add("pricing__interactive-type--bgcWhite");
      titleControl.classList.toggle("pricing__interactive-title--displayNone");
      textControl.classList.toggle("pricing__interactive-text--displayNone");
      imageControl.classList.toggle("pricing__interactive-image--displayNone");
    }
    inbound.classList.add("pricing__interactive-type--active");
    titleInbound.classList.toggle(
      "pricing__interactive-title--displayBlock"
    );
    textInbound.classList.toggle("pricing__interactive-text--displayBlock");
    imageInbound.classList.toggle(
      "pricing__interactive-image--displayBlock"
    );
  }
});


