// Assignment code here

var uppercaseLetters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var uppercaseLettersArray = uppercaseLetters.split("");
var lowercaseLetters = "abcdefghijklmnopqrstuvwxyz";
var lowercaseLettersArray = lowercaseLetters.split("");
var symbols = "!@#$%^&*()+=?><{}";
var symbolsArray = symbols.split("");
var num = "1234567890";
var numArray = num.split("");

// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// alert("Please click the Generate Password button to start.");

// Confirm the length of the password
// function generatePassword() {
//   var confirmLength = (prompt("How many characters would you like your password to be?"));

//   // If the answer is not supported
//   while(confirmLength <= 7 || confirmLength >=20) {
//
//     var confirmLength = (prompt("How many characters would you like your password to be?"));
//   }

// }

// Write password to the #password input
function writePassword() {
  var allCharacters = [];
  var endPass = "";

  
  var confirmLength = prompt(
    'How many characters would you like your password to be?\n8-20');
  if (confirmLength > 7 || confirmLength < 21) {
    alert(`Your password will be ${confirmLength} characters long.`);
  }

  if (confirmLength < 8 || confirmLength > 20) {
    alert("Password length must be 8 to 20 characters.\nTry again!");
  }
  else {
    if (confirm("Do you want to have uppercase letters?")) {
      alert("You will have uppercase letters in your password.");
      Array.prototype.push.apply(allCharacters, uppercaseLettersArray);
    }
    if (confirm("Do you want to have lowercase letters?")) {
      alert("You will have lowercase letters in your password.");
      Array.prototype.push.apply(allCharacters, lowercaseLettersArray);
    }
    if (confirm("Do you want to have numbers?")) {
      alert("You will have numbers in your password.");
      Array.prototype.push.apply(allCharacters, numArray);
    }
    if (confirm("Do you want to have symbols?")) {
      alert("You will have symbols in your password.")
      Array.prototype.push.apply(allCharacters, symbolsArray);
    }
  }
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
