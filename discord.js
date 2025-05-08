document.addEventListener("DOMContentLoaded", function () {
  const hamburger = document.querySelector(".hamburger");
  const navContainer = document.querySelector(".nav-container");
  const mobileHeader = document.querySelector(".mobile-header");

  hamburger.addEventListener("click", function () {
    navContainer.classList.toggle("active");

    const icon = this.querySelector("i");
    if (navContainer.classList.contains("active")) {
      icon.classList.remove("fa-bars");
      icon.classList.add("fa-times");
      mobileHeader.style.display = "flex";
    } else {
      icon.classList.remove("fa-times");
      icon.classList.add("fa-bars");
    }
  });
  const dropdowns = document.querySelectorAll(".dropdown");

  dropdowns.forEach((dropdown) => {
    dropdown.addEventListener("click", function (e) {
      if (window.innerWidth <= 1024) {
        e.preventDefault();
        e.stopPropagation();

        const isOpen = this.classList.contains("open");
        dropdowns.forEach((item) => {
          if (item !== this) item.classList.remove("open");
        });

        // Toggle this dropdown
        if (!isOpen) {
          this.classList.add("open");
        }
      }
    });
  });

  // Optional: close all dropdowns when clicking outside
  document.addEventListener("click", () => {
    if (window.innerWidth <= 1024) {
      dropdowns.forEach((dropdown) => dropdown.classList.remove("open"));
    }
  });
});
