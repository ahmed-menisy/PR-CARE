"use strict";

// ========== Global ==========
const menuBtn = document.getElementById("menu");
const navList = document.getElementById("navMenu");
const links = navList.querySelectorAll("a");
const sections = document.querySelectorAll("section[id]");
// ========== Events ==========
// Show Nav
menuBtn.addEventListener("click", showNav);

// Change Scroll Active
document.addEventListener("scroll", function () {
   // ========== Change Link
   let curentSection = "";
   for (let i = 0; i < sections.length; i++) {
      if (scrollY >= sections[i].offsetTop - 100) {
         curentSection = sections[i].getAttribute("id");
      }
   }

   links.forEach((link) => {
      link.classList.remove("active");
      if (link.getAttribute("data-section").includes(curentSection)) {
         link.classList.add("active");
      }
   });
});

// Up Top
document.querySelector(".up").addEventListener("click", () => {
   scrollTo({
      top: 0,
      behavior: "smooth",
   });
});
// ========== scroll behavior
links.forEach((link) => {
   link.addEventListener("click", (e) => {
      scrollTopLink(e);
   });
});

// ========== Functions ==========

// Show Nav
function showNav() {
   navList.classList.toggle("show-nav");
}

// scroll behavior
function scrollTopLink(e) {
   const curentOfsetTop = document.getElementById(e.currentTarget.dataset.section).offsetTop - 20;
   scrollTo({
      behavior: "smooth",
      top: curentOfsetTop,
   });
}

// ========== Lib ==========
// Aos
AOS.init({
   duration: 700,
   offset: 70,
   delay: 100,
});
