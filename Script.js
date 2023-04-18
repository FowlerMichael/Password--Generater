// Assignment code here
const lowerCase = "abcdefghijklmnopqrstuvwxyz";
const upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const numbers = "0123456789";
const specialCharacters = "!@#$%^&*()_+~`|}{[]:;?><,./-=";
let passwordLength = 8;
let password = "";

var generatePassword = function() {
  passwordLength = prompt("How many characters would you like your password to be? (8-128)");

  if (passwordLength < 8 || passwordLength > 128) {
    prompt("Please enter a number between 8 and 128");
    return generatePassword();
  }


  const useLower = confirm("Would you like to use lowercase letters?");
  const useUpper = confirm("Would you like to use uppercase letters?");
  const useNumbers = confirm("Would you like to use numbers?");
  const useSpecial = confirm("Would you like to use special characters?");

 
  if (useLower) {
    password += lowerCase;
  }
  
  if (useUpper) {
    password += upperCase;
  }

  if (useNumbers) {
    password += numbers;
  }

  if (useSpecial) {
    password += specialCharacters;
  }

  
  let generatedPassword = "";
  for (let i = 0; i < passwordLength; i++) {
    const randomIndex = Math.floor(Math.random() * password.length);
    generatedPassword += password[randomIndex];
  }

  return generatedPassword;
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
