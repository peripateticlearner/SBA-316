// Dark Mode Toggle
const darkModeToggle = document.getElementById("darkModeToggle");
if (darkModeToggle) {
  if (localStorage.getItem("darkMode") === "enabled") {
    document.body.classList.add("dark-mode");
  }
  darkModeToggle.addEventListener("click", () => {
    document.body.classList.toggle("dark-mode");
    localStorage.setItem("darkMode", document.body.classList.contains("dark-mode") ? "enabled" : "disabled");
  });
}

// Show/Hide Section Toggle
document.querySelectorAll(".toggle-btn").forEach(button => {
  button.addEventListener("click", () => {
    const targetId = button.getAttribute("data-target");
    const target = document.getElementById(targetId);

    if (target) {
      if (target.style.display === "none" || target.style.display === "") {
        target.style.display = "block";
      } else {
        target.style.display = "none";
      }
    }
  });
});

// Contact Form Validation
document.getElementById("contactForm").addEventListener("submit", function (event) {
  event.preventDefault();
  let name = document.getElementById("nameInput").value.trim();
  let email = document.getElementById("emailInput").value.trim();

  if (name === "" || email === "" || !email.includes("@")) {
    alert("Please enter a valid name and email!");
  } else {
    alert("Form submitted successfully!");
  }
});
