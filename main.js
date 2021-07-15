// Stupid alert box test to test linking .js to .html
function test(string) {
    if (string.length == 2) {
    return alert ("Hi, I'm this stupid test");
  } else {
    return alert ("This is not what I expected");
  }
}


// Image Mover
var id = null;
function myMove() {
  var elem = document.getElementById("myAnimationImage");   
  var pos = 0;
  clearInterval(id);
  id = setInterval(frame, 5);
  function frame() {
    if (pos == 250) {
      clearInterval(id);
    } else {
      pos++; 
      elem.style.top = pos + 'px'; 
      elem.style.left = pos + 'px'; 
    }
  }
}


// Contact Page Functions
let fields = {};

document.addEventListener("DOMContentLoaded", function() {
  fields.firstName = document.getElementById('firstName');
  fields.lastName = document.getElementById('lastName');
  fields.email = document.getElementById('email');
  // fields.address = document.getElementById('address');
  // fields.houseNumber = document.getElementById('houseNumber');
  // fields.country = document.getElementById('country');
  fields.zipCode = document.getElementById('zipCode')
  fields.password = document.getElementById('password');
  fields.passwordCheck = document.getElementById('passwordCheck');
  // fields.newsletter = document.getElementById('newsletter');
  // fields.question = document.getElementById('question');
 })

function isNotEmpty(value) {
  if (value == null || typeof value == 'undefined' ) return false;
  return (value.length > 0);
}

function isNumber(num) {
  return (num.length > 0) && !isNaN(num);
}

function isEmail(email) {
  let regex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/;
  return regex.test(String(email).toLowerCase());
}

function CheckPassword(password) { 
    let decimal=  /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[^a-zA-Z0-9])(?!.*\s).{8,15}$/; 
    if(password.value.match(decimal)) { 
    return true;
  } else { 
    alert('Password must include one Uppercase Letter, Lowercase Letter, Nummeric Digit, & Special Character');
    return false;
  }
} 

// What's a "field relative to contact.html?"
function fieldValidation(field, validationFunction) {
  if (field == null) return false;

  let isFieldValid = validationFunction(field.value)
  if (!isFieldValid) {
  field.className = 'placeholderRed';
  } else {
    field.className = '';
  }
  return isFieldValid;
}

// what is bitwise & assignment (&=)?
function isValid() {
  let valid = true;
  
  valid &= fieldValidation(fields.firstName, isNotEmpty);
  valid &= fieldValidation(fields.lastName, isNotEmpty);
  // valid &= fieldValidation(fields.gender, isNotEmpty);
  // valid &= fieldValidation(fields.address, isNotEmpty);
  // valid &= fieldValidation(fields.country, isNotEmpty);
  valid &= fieldValidation(fields.email, isEmail);
  // valid &= fieldValidation(fields.houseNumber, isNumber);
  valie &= fieldsValidation(fields.zipCode, isNotEmpty);
  valid &= fieldValidation(fields.password, isPasswordValid);
  valid &= fieldValidation(fields.passwordCheck, isPasswordValid);
  // valid &= fieldValidation(fields.question, isNotEmpty);
  valid &= arePasswordsEqual();
 
  return valid;
}

// what is className here?
function arePasswordsEqual() {
  if (fields.password.value == fields.passwordCheck.value) {
    field.password.className = 'placeholderRed';
    field.passwordCheck.className = 'placeholderRed';
    return true;
  }
  return false
}

class User {
  constructor(firstName, lastName, gender, address, country, email, newsletter, question) {
  this.firstName = firstName;
  this.lastName = lastName;
  // this.gender = gender;
  // this.address = address;
  // this.country = country;
  this.email = email;
  this.zipCode = zipCode;
  // this.newsletter = newsletter;
  // this.question = question;
  }
}

function sendContact() {
  if (isValid()) {
    let usr = new User(firstName.value, lastName.value, email.value, zipCode.value);
    alert (`${usr.firstName} Thanks for registering!`)
  } else {
    alert ("There was an error with your submission")
  }
}