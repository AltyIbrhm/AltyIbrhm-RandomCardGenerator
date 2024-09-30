/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  //write your code here

  let cardNumber = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, "K", "J", "Q", "A"];
  let cardType = ["♥", "♦", "♣", "♠"];

  let newCard = `${getRandomArrayIndex(cardNumber)}`;
  let newCardType = `${getRandomArrayIndex(cardType)}`;

  console.log(newCardType);
  document.querySelector(".cardNumber").innerHTML = newCard;
  document.querySelector(".cardTypeUpper").innerHTML = newCardType;
  document.querySelector(".cardTypeBottom").innerHTML = newCardType;
};

function getRandomArrayIndex(arr) {
  let randomIndex = Math.floor(Math.random() * arr.length);
  return arr[randomIndex];
}
