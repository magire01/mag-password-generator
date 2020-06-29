// Assignment Code
var generateBtn = document.querySelector("#generate");

// pwCharacter is an array with the selected password character options
var pwCharacter = [];

//generate groups of arrays for lowercase uppercase numbers and special characters
var characterLower = "abcdefghijklmnopqrstuvwxyz".split("");
var characterUpper = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("");
var characterNumber = "1234567890".split("");
var characterSpecial ="!@#$%^&*()-+=}{~?><".split("");

//create prompts for each group of character
var lowerPrompt = confirm("Include Lower Case Letters?");
var upperPrompt = confirm("Include Upper Case Letters?");
var numberPrompt = confirm("Include Numbers?");
var specialPrompt = confirm("Include Special Characters?");

// Create if statement to push character types to the pwCharacter variable
if (lowerPrompt == true) {
  pwCharacter.push(characterLower);
}

// Character test
console.log("Character test: " + pwCharacter);

// pwArray is an empty arry that will be filled with the for loop
var pwArray = []
//pw Character test
console.log(pwCharacter);

//Password Criteria
  //Prompt to determine the length of the password
var pwLength = prompt("How many characters do you want your password to be?");

  //pwLength test
console.log("Length of Password: " + pwLength);


function generatePassword() {
  // for loop to push <pwLength> random characters to pwArray
  for (var i = 0; i<pwLength; i++) {
    //push 10 random characters to pwString array
    pwArray.push(pwCharacter[Math.floor(Math.random() * (Math.floor(72) - Math.ceil(0) + 1))]);
    
  }
  var pwString = [];
}

//generatePassword test
generatePassword();
//Empty array that will hold the pwArray characters
var pwString = [];
//Loop that pushes pushes characters to pwString until the pwLength is reached
for (var j = 0; j<pwLength; j++) {
  pwString.push(pwArray[j]);
}
//pwString test
console.log("pwString Test: " + pwString)

//Turn pwString array into single string
var pwFull = pwString.join("");
//pwFull test
console.log("pwFull Test: " + pwFull);
// Write password to the #password input
function writePassword() {

  var passwordText = document.querySelector("#password");

  //writes pwString to the #password input
  passwordText.value = pwFull;
  
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
