// Assignment code here
// Alert to click button to start generator 
alert("Please click the Generate Password button to start.");

// Confirm the length of the password 
function generatePassword() {
  var confirmLength = (prompt("How many characters would you like your password to be?"));

  // If the answer is not supported
  while(confirmLength <= 7 || confirmLength >=20) {
    alert("Password length must be 8 to 20 characters.");
    var confirmLength = (prompt("How many characters would you like your password to be?"));
  }
  
}

// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);