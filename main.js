const body = document.querySelector("body");
const button = document.getElementById("button-mood");
const h2 = document.getElementById("h2");
const h3 = document.getElementById("h3");
const darkk = document.querySelectorAll(".darkk");
const black = document.querySelectorAll(".black");
const box = document.querySelectorAll(".box");
const boxx = document.querySelectorAll(".boxx");
const numwhi = document.querySelectorAll(".numwhi");
const mood = document.getElementById("mood");
// Function to toggle classes
const toggleClasses = (elements, className) => {
  elements.forEach((element) => element.classList.toggle(className));
};

// Function to update the mood text
const updateMoodText = () => {
  if (button.classList.contains("active")) {
    mood.innerHTML = "Light Mode";
  } else {
    mood.innerHTML = "Dark Mode";
  }
  mood.style.transition = "all .3s ease-in-out";
};

// Function to handle theme switching
const switchTheme = () => {
  button.classList.toggle("active");
  body.classList.toggle("light");
  h2.classList.toggle("white");
  h3.classList.toggle("white");
  toggleClasses(darkk, "white");
  toggleClasses(black, "white");
  toggleClasses(box, "white");
  toggleClasses(boxx, "white");
  toggleClasses(numwhi, "white");
  updateMoodText();
  localStorage.setItem(
    "theme",
    body.classList.contains("light") ? "dark" : "light"
  );
};

// Debounce function to limit the rate of function execution
const debounce = (func, delay) => {
  let debounceTimer;
  return function () {
    clearTimeout(debounceTimer);
    debounceTimer = setTimeout(() => func.apply(this, arguments), delay);
  };
};

// Event listener for the button click
button.onclick = debounce(switchTheme, 300);

// Load the saved theme from local storage
const savedTheme = localStorage.getItem("theme");
if (savedTheme) {
  if (savedTheme === "light") {
    switchTheme();
  }
}
