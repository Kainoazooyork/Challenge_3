var characterLenth = 8;
var choiceArr = [];

var upperCaseArr = ['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z',];
var lowerCaseArr = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z',];
var specialCharacterArr = ['*', '?','@','!','$','%','#','+','&','^','=',];
var numberArr = ['0','1','2','3','4','5','6','7','8','9',];

// Assignment code here


// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var correctPrompt = getPrompts();

  if (correctPrompt) {
    var password = generatePassword();
    var passwordText = document.querySelector("#password");

   } passwordText.value = password;
  
}
function generatePassword() {
  var password = " ";
  for(var i = 0; i < characterLength; i++) {
    var randomIndex = Math.floor(Math.random() * choiceArr.length);
    password = password + choiceArr[randomIndex];
  }
  return password;
}

function getPrompts() {
  choiceArr = []; 
  characterLength = parseInt(prompt("How many characters will your passoword be? (8 - 128 characters"));

  if(isNaN(characterLength) || characterLength < 8 || characterLength > 128) {
    alert("Password must be between 8 - 128 characters. Please try again.");
    return false;
  }

  if (confirm("Do you want uppercase letters in your password?")) {
    choiceArr = choiceArr.concat(upperCaseArr);
  }
  if (confirm("Do you want lower case letters in your password?")) {
    choiceArr = choiceArr.concat(lowerCaseArr);
  }
  if (confirm("Do you want special characters in your password?")) {
    choiceArr = choiceArr.concat(specialCharacterArr);
  }
  if (confirm("Do you want numbers in your password?")) {
    choiceArr = choiceArr.concat(numberArr);
  }
  if (choiceArr.length < 1) {
    return getPrompts();
  }
  return true;
}




// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
