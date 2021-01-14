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

  var upperCase = confirm("Include uppercase letters? \nSelect OK for Yes and Cancel for No.");
  console.log("Uppercase = " + upperCase);

  var numChar = confirm("Include numerical characters? \nSelect OK for Yes and Cancel for No.");
  console.log("Numerical characters = " + numChar);

  var specChar = confirm("Include special characters? \nSelect OK for Yes and Cancel for No.");
  console.log("Special characters = " + specChar);

      
    }
  console.log();


// Add event listener to generate button
generateBtn.addEventListener('click', writePassword);
