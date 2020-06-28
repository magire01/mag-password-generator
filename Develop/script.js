// Assignment Code
var generateBtn = document.querySelector("#generate");
// pwCharacter is an array with all possible password character options
var pwCharacter = "abcdeftghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ1234567890!@#$%^&*()".split("");
// pwArray is an empty arry that will be filled with the for loop
var pwArray = []
//pw Character test
console.log(pwCharacter);

//Password Criteria
  //Prompt to determine the length of the password
var pwLength = prompt("How many characters do you want your password to be?");

  //pwLength test
console.log("Length of Password: " + pwLength);

  //pwLength

function generatePassword() {
  // for loop to push 10 random characters to pwArray
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
console.log(pwFull);
// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  //writes pwString to the #password input
  passwordText.value = pwFull;
  
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
