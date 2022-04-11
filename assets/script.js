// Assignment code here

var uppercaseLetters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var uppercaseLettersArray = uppercaseLetters.split("");
var lowercaseLetters = "abcdefghijklmnopqrstuvwxyz";
var lowercaseLettersArray = lowercaseLetters.split("");
var symbols = "!@#$%^&*()+=?><{}";
var symbolsArray = symbols.split("");
var num = "1234567890";
var numArray = num.split("");
var generateBtn = document.querySelector("#generate");

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

// Write password to the #password input
function writePassword() {
  var allCharacters = [];
  var writePassword = "";

  // Password criteria confirmations 
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
    if (allCharacters.length === 0) {
      alert("You must select at least one criteria.\nTry again please!");
    }
    // For loop confirmation and password generator
    else {
      for (var i = 0; i < confirmLength; i++) {
        var random = Math.floor(Math.random() * allCharacters.length);
        writePassword += allCharacters[random];
      }
  }
}
// Password diplay
document.getElementById("password").innerHTML = writePassword;
}



