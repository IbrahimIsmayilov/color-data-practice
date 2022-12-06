// WEB COLORS START

// HTML Variable for Output
let outputEl = document.getElementById("output");

// Load Color Data
let colorData;

fetch("color-data.json")
  .then((rawData) => rawData.json())
  .then((data) => (colorData = data));

// Event Listener on Go Button
document.getElementById("go-btn").addEventListener("click", goBtnClicked);

// Process Go Button Click
function goBtnClicked() {
  // Get Menu Selection
  let selection = document.getElementById("menu-select").value;

  // Process Menu Selection
  if (selection === "all-colors") {
    allColors();
  } else if (selection === "bright-colors") {
    brightColors();
  } else if (selection === "red-pink-families") {
    redPinkFamilies();
  } else if (selection === "family-search") {
    familySearch();
  } else if (selection === "start-letter-search") {
    startLetterSearch();
  }
}

// MENU FUNCTIONS
function allColors() {
  // How to resolve this
  // Display Name and Family of All Colors
  outputEl.innerHTML = '';
  for (let i = 0; i < colorData.length; i++) {
    outputEl.innerHTML += `<h3> ${colorData[i].name}, ${colorData[i].family} </h3>`;
  }
}

function brightColors() {
  // Display Name and brightness of All Colors with brightness of 200 or higher
  outputEl.innerHTML = '';
  for (let i = 0; i < colorData.length; i++) {
    if (colorData[i].brightness >= 200) {
      outputEl.innerHTML += `<h3> ${colorData[i].name}, ${colorData[i].brightness} </h3>`;
    }
  }
}

function redPinkFamilies() {
  // Count Colors in Red/Pink Families
  outputEl.innerHTML = '';
  let countColors = 0;
  for (let i = 0; i < colorData.length; i++) {
    if (colorData[i].family === "Pink" || colorData[i].family === "Red") {
      countColors++;
    }
    outputEl.innerHTML = `<h3> ${countColors} </h3>`;
  }
}

function familySearch() {
  // Display Name and Family of all Colors that Match a User Provided Family Name. Also Output a Count of Colors Found.
  outputEl.innerHTML = '';
  let userFamily = prompt("Ay yo chooese a family");
  let count = 0;
  for (let i = 0; i < colorData.length; i++) {
    if (colorData[i].family === userFamily) {
      outputEl.innerHTML += `<h3> ${colorData[i].name}, ${colorData[i].family} </h3>`;
      count++;
    }
  }
  outputEl.innerHTML += `<h3> ${count} </h3>`;
}

function startLetterSearch() {
  // Display Name of all Colors that Match a User Provided Starting Letter. Also Output a Count of Colors Found.
  outputEl.innerHTML = '';
  let userLetter = prompt("Ay yo chooese a letta");
  let count = 0;
  for (let i = 0; i < colorData.length; i++) {
    if (colorData[i].charAt(0) === userLetter) {
      outputEl.innerHTML += `<h3> ${colorData[i].name}</h3>`;
      count++;
    }
  }
  outputEl.innerHTML += `<h3> ${count} </h3>`;
}
