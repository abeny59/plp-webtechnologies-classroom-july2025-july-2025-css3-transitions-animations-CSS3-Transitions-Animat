/* --- Functions, Parameters, Scope --- */

// Global variable
let animationCount = 0;

// Function with parameters & return
function calculateAnimationSpeed(baseSpeed, multiplier) {
  return baseSpeed * multiplier;
}

// Function to add animation class
function triggerAnimation(element, className) {
  element.classList.add(className);
  
  // Remove class after animation so it can replay
  setTimeout(() => {
    element.classList.remove(className);
  }, 1000);
}

// Local scope demo
function incrementCounter() {
  let localCount = 1; // local variable
  animationCount += localCount;
  console.log("Total animations triggered:", animationCount);
}

// ---  Combine CSS + JS ---
const box = document.querySelector(".animated-box");
const animateBtn = document.getElementById("animateBtn");
const resetBtn = document.getElementById("resetBtn");

// Animate button click
animateBtn.addEventListener("click", () => {
  let speed = calculateAnimationSpeed(500, 2); // returns 1000ms
  console.log("Animation speed is:", speed);
  
  triggerAnimation(box, "bounce");
  incrementCounter();
});

// Reset box style
resetBtn.addEventListener("click", () => {
  box.style.transform = "scale(1)";
  box.style.background = "coral";
  console.log("Box reset!");
});
