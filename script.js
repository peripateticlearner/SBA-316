document.addEventListener("DOMContentLoaded", () => {
  const toggleButton = document.getElementById("dark-mode-toggle");
  const body = document.body;

  // Check localStorage for dark mode preference
  if (localStorage.getItem("darkMode") === "enabled") {
    body.classList.add("dark-mode");
  }

  toggleButton.addEventListener("click", () => {
    body.classList.toggle("dark-mode");

    // Save preference in localStorage
    if (body.classList.contains("dark-mode")) {
      localStorage.setItem("darkMode", "enabled");
    } else {
      localStorage.removeItem("darkMode");
    }
  });
});
