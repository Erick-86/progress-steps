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
});

//PREV BTN
prev.addEventListener("click", () => {
    //Check to not let the current active go below 1
    currentActive--
    
    if (currentActive < 1) {
        currentActive = 1
    }
});
