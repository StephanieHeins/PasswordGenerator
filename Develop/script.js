/*

// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

*/

// Variables 

var lowercaseChar = "abcdefghijklmnopqrstuvwxyz";
var uppercaseChar = "ABCDEFGHIJKLMNOPQRSTUZWXYZ";
var numericalChar = "0123456789";
var specialChar = "!#$%&'()*+-./:;<=>?@[_`{|}~";

// Password Length 

function generatePassword() {

  var passwordLengthInput = prompt("Choose a password length between 8 - 128 characters:")
  passwordLengthInput = parseInt(passwordLengthInput);
  if (passwordLengthInput < 8) 
      { alert ("Password must have more than 7 characters!");
      return prompt("Choose a password length between 8-128 characters:");
      }
  if (passwordLengthInput > 128) 
      { alert ("Password must have less than 128 characters!");
      return prompt("Choose a password length between 8-128 characters:");
      }

}

// Password Characters 

function passwordCharacter() {

  var passwordCharInput = confirm ("")

}

