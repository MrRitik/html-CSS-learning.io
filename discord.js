document.addEventListener("DOMContentLoaded", function () {
  const hamburger = document.querySelector(".hamburger");
  const navContainer = document.querySelector(".nav-container");

  hamburger.addEventListener("click", () => {
    navContainer.classList.toggle("active");
  });

  // Optional: Close menu when clicking outside
  document.addEventListener("click", function (event) {
    if (
      !navContainer.contains(event.target) &&
      !hamburger.contains(event.target)
    ) {
      navContainer.classList.remove("active");
    }
  });
});
