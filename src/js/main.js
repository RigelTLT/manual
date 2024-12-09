// Import our custom CSS
import "../scss/styles.scss";

// Import all of Bootstrap's JS
import * as bootstrap from "bootstrap";

import * as char1 from "../components/chapter-1/charpter-1";
import * as char2 from "../components/chapter-2/charpter-2";

function changeTextAndNumber(textCharpter, textContent) {
  const chapterNumber = document.querySelector(".chapter-number");
  const chapterText = document.querySelector(".chapter-text");
  chapterNumber.textContent = textCharpter;
  chapterText.innerHTML = textContent;
  console.log("Text and number changed");
}

const navHome = document.querySelector(".nav-home");
const navCharpter1 = document.querySelector(".nav-charpter-1");
const navCharpter2 = document.querySelector(".nav-charpter-2");
const navCharpter3 = document.querySelector(".nav-charpter-3");

changeTextAndNumber(char1.numberC, char1.textC);

navHome.addEventListener(
  "click",
  changeTextAndNumber(char1.numberC, char1.textC)
);
navCharpter1.addEventListener(
  "click",
  changeTextAndNumber(char1.numberC, char1.textC)
);
navCharpter2.addEventListener(
  "click",
  changeTextAndNumber(char2.numberC, char2.textC)
);
