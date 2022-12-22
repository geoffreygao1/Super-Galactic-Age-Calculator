import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/styles.css';

import Age from "./age.js";

document.querySelector("#birthdayInput").addEventListener("submit", convertAgeHandler);

function convertAgeHandler(event) {
  event.preventDefault();
  const date = new Date();
  let age = new Age();
  let day = date.getDate();
  let month = date.getMonth() + 1;
  let year = date.getFullYear();
  age.todaysDate = `${year}-${month}-${day}`;
  age.birthday = document.getElementById('birthday').value;
  age.findDaysOld();
  populateAges(age);
}

function populateAges(age) {
  let mercuryInput = document.getElementById("mercuryAge");
  let venusInput = document.getElementById("venusAge");
  let earthInput = document.getElementById("earthAge");
  let marsInput = document.getElementById("marsAge");
  let jupiterInput = document.getElementById("jupiterAge");

  mercuryInput.value = age.findEquivalentYears('Mercury');
  venusInput.value = age.findEquivalentYears('Venus');
  earthInput.value = age.findEquivalentYears('Earth');
  marsInput.value = age.findEquivalentYears('Mars');
  jupiterInput.value = age.findEquivalentYears('Jupiter');
}