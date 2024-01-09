document.addEventListener("DOMContentLoaded", function () {
  const menuButton = document.querySelector(".menu-button");
  const menu = document.querySelector(".menu-container");
  const btnClose = document.querySelector(".btn-close");

  menuButton.addEventListener("click", function () {
    menu.classList.toggle("menu-hidden");
    btnClose.classList.toggle("hidden");
  });
});

// document.addEventListener("DOMContentLoaded", function () {
//   const menuAnimate = document.querySelector(".menu-container");
//   const menu = document.querySelector(".menu-button"); // Make sure the class name matches the one in your HTML

//   menu.addEventListener("click", function () {
//     menuAnimate.classList.add("animate-in");
//   });
// });

/// SECOND CODE DOESN'T MAKE SENSE ///
