function menuShow() {
  let menuMobile = document.querySelector(".menu-mobile-links");
  if (menuMobile.classList.contains("open")) {
    menuMobile.classList.remove("open");
    (document.querySelector(".mobile-menu").scr = '<div class="line1"></div>'),
      '<div class="line2"></div>',
      '<div class="line3"></div>';
  } else {
    menuMobile.classList.add("open");
  }
  menuMobile.addEventListener("click", () => {
    menuMobile.classList.remove("open");
  });
}
