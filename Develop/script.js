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

var passwordLengthInput = "";

// Password Length 

function generatePassword() {

  passwordLengthInput = prompt("Choose a password length between 8 - 128 characters:")
  passwordLengthInput = parseInt(passwordLengthInput);

  //Prompt if entry is smaller than 8
  if (passwordLengthInput < 8) 
      { alert ("Password must have more than 7 characters!");
      prompt("Choose a password length between 8-128 characters:");
      }
  
  // Prompt if entry is larger than 128
  if (passwordLengthInput > 128) 
      { alert ("Password must have less than 128 characters!");
      prompt("Choose a password length between 8-128 characters:");
      }

  // Prompt if entry is not a number
  if (isNaN(passwordLengthInput))
      { alert ("Please enter a numeric value.");
      prompt("Choose a password length between 8-128 characters:");
      }

  // Pass to next function if input meets requirements 
  else if (passwordLengthInput > 8 && passwordLengthInput < 128)
      { passwordCharacter();
      }
}

// Password Characters 

function passwordCharacter() {

  var passwordChar = "";

  var passwordLower = confirm ("Would you like to include lowercase letters?");
    if (passwordLower) 
    { passwordChar += lowercaseChar;
    }

  var passwordUpper = confirm ("Would you like to include UPPERCASE letters?");
    if (passwordUpper) 
    { passwordChar += uppercaseChar;
    }

  var passwordNumeric = confirm ("Would you like to include numbers?");
    if (passwordNumeric)
    { passwordChar += numericalChar;
    }

  var passwordSpecial = confirm ("Would you like to include special characters?")
    if (passwordSpecial)
    { passwordChar += specialChar;
    }

// Password Generate 

var password = "";

for (var i = 0; i < passwordLengthInput; i++ )
{
password += passwordChar[Math.floor(Math.random() * passwordChar.length)]

var pwTextArea = document.getElementById("password");
pwTextArea.value = password;

}

}
