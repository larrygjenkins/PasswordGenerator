// Assignment Code
var generateBtn = document.querySelector('#generate');

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector('#password');

  passwordText.value = password;
}

var criteria = {
  lc: "abcdefghijklmnopqrstuvwxyz",
  uc: "ABCDEFGHIJKLMNOPQRSTUVWXYZ",
  num: "0123456789",
  sc: "~`!#$%^&*+=-[]\\\';,/{}|\":<>? "
};

var pwdcriteria = "";

console.log(criteria.sc);

function generatePassword() {
  var pwlength = parseInt(prompt('How many chars?'));

  if (pwlength < 8 || pwlength > 128) {
    alert("Please enter a number greater than 7 and less than 129.");
    var pwlength = parseInt(prompt('How many chars?'));
  }

  else {
  console.log(typeof pwlength);
  console.log("Length = " + pwlength);
  }
  
  var lowerCase = confirm("Include lowercase letters? \nSelect OK for Yes and Cancel for No.");
  console.log("Lowercase = " + lowerCase);

  if (lowerCase === true) {
    pwdcriteria = pwdcriteria + "abcdefghijklmnopqrstuvwxyz";
    console.log(pwdcriteria);
  }

  var upperCase = confirm("Include uppercase letters? \nSelect OK for Yes and Cancel for No.");
  console.log("Uppercase = " + upperCase);

  if (upperCase === true) {
    pwdcriteria = pwdcriteria + "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    console.log(pwdcriteria);
  } 

  var numChar = confirm("Include numerical characters? \nSelect OK for Yes and Cancel for No.");
  console.log("Numerical characters = " + numChar);

  if (numChar === true) {
    pwdcriteria = pwdcriteria + "0123456789";
    console.log(pwdcriteria);
  }

  var specChar = confirm("Include special characters? \nSelect OK for Yes and Cancel for No.");
  console.log("Special characters = " + specChar);

  if (specChar === true) {
    pwdcriteria = pwdcriteria + "~`!#$%^&*+=-[]\\\';,/{}|\":<>? ";
    console.log(pwdcriteria);
  }
      
    }
  console.log();


// Add event listener to generate button
generateBtn.addEventListener('click', writePassword);
