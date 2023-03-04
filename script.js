"use strict";

//CREATING VARIABLES
const progressBG = document.getElementById("progress-bg");
const circles = document.querySelectorAll(".circles");
const next = document.getElementById("next");
const prev = document.getElementById("prev");

let currentActive = 1;

//Adding an EventListener and a function for the circles
//NEXT BTN
next.addEventListener("click", () => {
  currentActive++;

  //Checking to make the currentActive not go past the number of circles
  if (currentActive > circles.length) {
    currentActive = circles.length;
  }

  update();
});

//PREV BTN
prev.addEventListener("click", () => {
  //Check to not let the current active go below 1
  currentActive--;

  if (currentActive < 1) {
    currentActive = 1;
  }

  update();
});

//UPDATE FUNCTIONALITY
function update() {
  circles.forEach((circle, index) => {
    if (index < currentActive) {
      circle.classList.add("active");
    } else {
      circle.classList.remove("active");
    }
  });

  //When ever the next btn is clicked, active class is added to the circles
  const actives = document.querySelectorAll(".active");
  console.log(actives);

  // Setting the width styling
  progressBG.style.width =
    ((actives.length - 1) / (circles.length - 1)) * 100 + `%`;

  //Disabling the next btn when the current active is equal to the circles.length
  //Enabling the prev btn when the next btn is clicked
  if (currentActive === 1) {
    prev.disabled = true;
  } else if (currentActive === circles.length) {
    next.disabled = true;
  } else {
    prev.disabled = false;
    next.disabled = false;
  }
}
