/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  let suite = ["\u2666", "\u2665", "\u2660", "\u2663"];
  let numbers = [
    "1",
    "2",
    "3",
    "4",
    "5",
    "6",
    "7",
    "8",
    "9",
    "10",
    "J",
    "Q",
    "K",
    "A"
  ];
  function generateRandomSuite() {
    return suite[Math.floor(Math.random() * suite.length)];
  }
  function generateRandomNumbers() {
    return numbers[Math.floor(Math.random() * numbers.length)];
  }
  let randomSuite = generateRandomSuite();
  let randomNumbers = generateRandomNumbers();

  document.querySelector(".cardTop ").innerHTML = randomSuite;
  document.querySelector(".cardMiddle ").innerHTML = randomNumbers;
  document.querySelector(".cardLast ").innerHTML = randomSuite;

  if (
    randomSuite === "\u2666" ||
    randomSuite === "\u2665" ||
    randomSuite === "\u2660" ||
    randomSuite === "\u2663"
  )
    document.querySelector(".cardTop ").style.color = "red";
  // document.querySelector(".cardTop ").style.color = "default";
};
