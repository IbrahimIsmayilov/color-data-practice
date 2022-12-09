// My contacts Basic

// HTML Elements
let goBtnEl = document.getElementById('go-btn');
let menuEl = document.getElementById('menu');
let outputEl = document.getElementById('output');

// Go Btn - Menu Listener
goBtnEl.addEventListener('click', goBtnHandler);

// Array 
let contactsAll = loadcontactsAll();
displayAll();

function goBtnHandler() {
  // Get Menu Selection
  let selection = menuEl.value;

  if (selection === 'display-all') {
    displaycontactsAll();
  } else if (selection === 'add') {
    addContact();
  } else if (selection === 'remove') {
    removeContact();
  } else if (selection === 'display-name') {
    displayByName();
  } else if (selection === 'display-country') {
    displayByCountry();
  } else if (selection === 'findByEmail') {
    findByEmail();
  }
}

// MENU FUNCTIONS
function displaycontactsAll() {
  displayAll();
}

function addContact() {

  let contactName = prompt("Enter New Contact Name: ");
  let contactEmail = prompt("Enter New Contact Email: ");

  let contactNumber = prompt("Enter New Contact Number: ");
  let contactCountry = prompt("Enter New Contact Country");
  contactsAll.push(newContact(contactName, contactEmail, contactNumber, contactCountry));

  outputEl.innerHTML = `Task Added: ${contactName}`;
  alert("New Contact has been added");
  displayAll();
  saveContact();

}

function removeContact() {
  let index = +prompt("Enter contact # to remove: ");
  if (index >=0 && index < contactsAll.length){ 
    contactsAll.splice(index, 1);
    alert(`Contact # ${index} has been removed`);
    displayAll();
    saveContact();
  } else {
    alert("Invalid Contact #");
  }
}

function displayByName() {
  let nameSearch = prompt("Enter a Name to find Contact: ");
  let divStr = "";
  for (let i =0; i < contactsAll.length; i++){
      if(contactsAll[i].contactName.includes(nameSearch)) {
        divStr += `
        <div style= 'border: 1px solid grey'>
        <h1> ${contactsAll[i].contactName} </h1>
        <p> ${contactsAll[i].contactEmail} </p>
        <p> ${contactsAll[i].contactNumber} (${contactsAll[i].contactCountry})</p>
        </div>
        `
      }
  }   
  outputEl.innerHTML = divStr;
  
  
}

function displayByCountry() {
  let countrySearch = prompt("Enter a Country to find Contact: ");
  let divStr = "";
  for (let i =0; i < contactsAll.length; i++){
      if(contactsAll[i].contactCountry.includes(countrySearch)) {
        divStr += `
        <div style='border: 1px solid grey'>
        <h1> ${contactsAll[i].contactName} </h1>
        <p> ${contactsAll[i].contactEmail} </p>
        <p> ${contactsAll[i].contactNumber} (${contactsAll[i].contactCountry})</p>
        </div>
        `
      }
  }   
  outputEl.innerHTML = divStr;  
}

function findByEmail(searchEmail){
 let searchEmail2 = prompt("Enter an Email");
 searchEmail = searchEmail2
 let divStr="";
  for (let i=0; i < contactsAll.length; i++){
    if (searchEmail === contactsAll[i].contactEmail){
    divStr += `
    <div style='border: 1px solid grey'>
    <h1> ${contactsAll[i].contactName} </h1>
    <p> ${contactsAll[i].contactEmail} </p>
    <p> ${contactsAll[i].contactNumber} (${contactsAll[i].contactCountry})</p>
    </div>
    `
  } else {
    alert("No email found");
  }
    outputEl.innerHTML = divStr;
  }
}

//Helper Functions
function newContact(contactDescription, contactEmails, contactNumbers, contactCountries){
  return {
    contactName: contactDescription,
    contactEmail: contactEmails, 
    contactNumber: contactNumbers, 
    contactCountry: contactCountries, 
    completed: ''
    
  };
}

function getContactHTMLStr(info,i){
  return `
  <div>
   <h2>${i}: ${info.contactName} </h2>
   <p>${info.contactEmail}</p>
   <p>${info.contactNumber} (${info.contactCountry})
  </div>
  `;
}

function displayAll(){
  let outputStr = '';
  for (let i=0; i< contactsAll.length;i++){
     outputStr += getContactHTMLStr(contactsAll[i],i);
  }
  outputEl.innerHTML = outputStr;
} 

function saveContact(){
  localStorage.setItem('contactsAll', JSON.stringify(contactsAll));
}

function loadcontactsAll(){
  let contactsAllStr = localStorage.getItem('contactsAll');
  return JSON.parse(contactsAllStr) ?? [];
}

