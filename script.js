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

  //Cohecking to make the currentActive not go past the number of circles
  if (currentActive > circles.length) {
    currentActive = circles.length;
  }
});
