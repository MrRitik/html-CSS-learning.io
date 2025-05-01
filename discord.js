document.addEventListener("DOMContentLoaded", function () {
  const hamburger = document.querySelector(".hamburger");
  const navContainer = document.querySelector(".nav-container");
  const mobileHeader = document.querySelector(".mobile-header");

  hamburger.addEventListener("click", function () {
    navContainer.classList.toggle("active");
    // Toggle between bars and times icon
    const icon = this.querySelector("i");
    if (navContainer.classList.contains("active")) {
      icon.classList.remove("fa-bars");
      icon.classList.add("fa-times");
      mobileHeader.style.display = "flex"; // Ensure mobile header stays visible
    } else {
      icon.classList.remove("fa-times");
      icon.classList.add("fa-bars");
    }
  });
});
