//Start JS Section
const images = ["1st-bg.jpg", "2nd-bg.jpg", "3rd-bg.jpg", "4th-bg.jpg"];
$(
  '<img class="main-img" alt="1st-bg" src="img/' +
    images[Math.floor(Math.random() * images.length)] +
    '">'
).appendTo(".main-img-container");
//End JS Section

//Start JS  Main - Slider
$(".about-section").click(function () {
  $(".about-slide-container").addClass("slide-container");
  $(".main-heading").addClass("fade-in");
  $(".about-info").addClass("fade-in");
  $(".about-slide-container").css("transform", "translateX(0%)");
});

$(".skills-section").click(function () {
  $(".skills-slide-container").addClass("slide-container");
  $(".main-heading").addClass("fade-in");
  $(".skill-wrapper").addClass("fade-in-left");
  $(".skills-slide-container").css("transform", "translateX(0%)");
});

$(".services-section").click(function () {
  $(".services-slide-container").addClass("slide-container");
  $(".main-heading").addClass("fade-in");
  $(".services-wrapper").addClass("fade-in-right");
  $(".services-slide-container").css("transform", "translateX(0%)");
});

$(".contact-section").click(function () {
  $(".contact-slide-container").addClass("slide-container");
  $(".data-container").addClass("fade-in");
  $(".contact-slide-container").css("transform", "translateX(0%)");
});

$(".close-button").click(function () {
  $(".about-slide-container").css("transform", "translateX(100%)");
  $(".skills-slide-container").css("transform", "translateX(100%)");
  $(".services-slide-container").css("transform", "translateX(100%)");
  $(".contact-slide-container").css("transform", "translateX(100%)");
  $(".main-heading").removeClass("fade-in");
  $(".about-info").removeClass("fade-in");
  $(".skill-wrapper").removeClass("fade-in-left");
  $(".services-wrapper").removeClass("fade-in-right");
  $(".data-container").removeClass("fade-in");
});
//End JS  Main - Slider
