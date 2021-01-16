// Assignment Code
var generateBtn = document.querySelector('#generate');

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector('#password');

  passwordText.value = ("Your password is " + password);
}

function generatePassword() {
  var pwdcriteria = "";
  var password = "";

  var pwlength = parseInt(prompt('How many chars?'));

  // This validates the length of the password is between 8 and 128 characters and directs user to try again if it is not.
  if (pwlength < 8 || pwlength > 128) {
    alert("Please enter a number greater than 7 and less than 129.");
    var pwlength = parseInt(prompt('How many chars?'));
  }

  else {
  console.log(typeof pwlength);
  console.log("Length = " + pwlength);
  }
  
  // This prompts user to indicate if password should include lowercase letters. If so, all lowercase letters are added to the pwdcriteria variable.
  var lowerCase = confirm("Include lowercase letters? \nSelect OK for Yes or Cancel for No.");
  console.log("Lowercase = " + lowerCase);

  if (lowerCase === true) {
    pwdcriteria = pwdcriteria + "abcdefghijklmnopqrstuvwxyz";
    console.log(pwdcriteria);
  }

    // This prompts user to indicate if password should include uppercase letters. If so, all uppercase letters are added to the pwdcriteria variable.
  var upperCase = confirm("Include uppercase letters? \nSelect OK for Yes or Cancel for No.");
  console.log("Uppercase = " + upperCase);

  if (upperCase === true) {
    pwdcriteria = pwdcriteria + "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    console.log(pwdcriteria);
  } 

    // This prompts user to indicate if password should include numbers (0-9). If so, all numbers are added to the pwdcriteria variable.
  var numChar = confirm("Include numerical characters? \nSelect OK for Yes or Cancel for No.");
  console.log("Numerical characters = " + numChar);

  if (numChar === true) {
    pwdcriteria = pwdcriteria + "0123456789";
    console.log(pwdcriteria);
  }

    // This prompts user to indicate if password should include special characters. If so, all special characters are added to the pwdcriteria variable.
  var specChar = confirm("Include special characters? \nSelect OK for Yes or Cancel for No.");
  console.log("Special characters = " + specChar);

  if (specChar === true) {
    pwdcriteria = pwdcriteria + "~`!#$%^&*+=-[]\\\';,/{}|\":<>? ";
    console.log(pwdcriteria);
  }
  
  // This loop generates a set of random numbers equal to the password length. Each number is used as a index to choose a password character from the pwdcriteria String.
  for (var i = 0; i < pwlength; i++) {
    var max = (pwdcriteria.length);
    var min = 0;
    var char = (Math.floor(Math.random() * (max - min)) + min);
    password = password + pwdcriteria[char];
  }
   
  console.log(password);
  return password;  

    }

// Add event listener to generate button
generateBtn.addEventListener('click', writePassword);
