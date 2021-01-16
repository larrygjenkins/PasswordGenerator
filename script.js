// Assignment Code
var generateBtn = document.querySelector('#generate');

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector('#password');

  passwordText.value = password;
}

var pwdcriteria = "";

function generatePassword() {
  var pwdcriteria = "";
  var password = "";

  var pwlength = parseInt(prompt('How many chars?'));

  if (pwlength < 8 || pwlength > 128) {
    alert("Please enter a number greater than 7 and less than 129.");
    var pwlength = parseInt(prompt('How many chars?'));
  }

  else {
  console.log(typeof pwlength);
  console.log("Length = " + pwlength);
  }
  
  var lowerCase = confirm("Include lowercase letters? \nSelect OK for Yes or Cancel for No.");
  console.log("Lowercase = " + lowerCase);

  if (lowerCase === true) {
    pwdcriteria = pwdcriteria + "abcdefghijklmnopqrstuvwxyz";
    console.log(pwdcriteria);
  }

  var upperCase = confirm("Include uppercase letters? \nSelect OK for Yes or Cancel for No.");
  console.log("Uppercase = " + upperCase);

  if (upperCase === true) {
    pwdcriteria = pwdcriteria + "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    console.log(pwdcriteria);
  } 

  var numChar = confirm("Include numerical characters? \nSelect OK for Yes or Cancel for No.");
  console.log("Numerical characters = " + numChar);

  if (numChar === true) {
    pwdcriteria = pwdcriteria + "0123456789";
    console.log(pwdcriteria);
  }

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
  // } 
  

    }
  console.log("Password = ");


// Add event listener to generate button
generateBtn.addEventListener('click', writePassword);
