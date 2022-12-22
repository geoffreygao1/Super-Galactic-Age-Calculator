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