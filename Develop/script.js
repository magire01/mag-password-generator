// Assignment Code
var generateBtn = document.querySelector("#generate");
// pwCharacter is an array with all possible password character options

var pwCharacter = [];

var characterLowerCase = "abcdeftghijklmnopqrstuvwxyz".split("");
var characterUpperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("");
var characterNumber = "1234567890".split("");
var characterSpecial = "!@#$%^&*()".split("");

console.log("LowerCase Character test: " + characterLowerCase.length);

var lowerPrompt = confirm("lower case?");
var upperPrompt = confirm("upper case?");
var numberPrompt = confirm("Number?");
var specialPrompt = confirm("Special character?");



if(lowerPrompt === true) {
  pwCharacter.push(characterLowerCase);
}

if(upperPrompt === true) {
  pwCharacter.push(characterUpperCase);
}

if(numberPrompt === true) {
  pwCharacter.push(characterNumber);
}

if(specialPrompt === true) {
  pwCharacter.push(characterSpecial);
}

// pwArray is an empty arry that will be filled with the for loop
var pwArray = []
//pw Character test
console.log("pwCharacter test: " + pwCharacter);
console.log("pwCharacter length test: " + pwCharacter.length);

  //Prompt to determine the length of the password
var pwLength = prompt("How many characters do you want your password to be?");

  //pwLength test
console.log("Length of Password: " + pwLength);

  //pwLength

function generatePassword() {
  // for loop to push 10 random characters to pwArray
  for (var i = 0; i<pwLength; i++) {
    //Select random character type
    var characterSelection = pwCharacter[Math.floor(Math.random() * pwCharacter.length)];
    //Character Selection test
    console.log("CharacterSelection test: " + characterSelection);
    //Push the random characters into pwArray
    pwArray.push(characterSelection[Math.floor(Math.random() * characterSelection.length - 1)]);
    
  }
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
console.log("pwString Test: " + pwString);

//Turn pwString array into single string
var pwFull = pwString.join("");

//pwFull test
console.log("pwFull test: " + pwFull);

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  //writes pwString to the #password input
  passwordText.value = pwFull;
  
}


// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
