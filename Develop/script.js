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
  //pwArray test
  console.log(pwArray);
}

//generatePassword test
generatePassword();
var pwString = [];
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
  // variable to assign the pwArray to a single string
  // var pwString = pwArray[0] + pwArray[1] + pwArray[2] + pwArray[3] + pwArray[4] + pwArray[5] + pwArray[6] + pwArray[7] + pwArray[8] + pwArray[9];
  

  // pwString test
  console.log("Password: " + pwString);

  //writes pwString to the #password input
  passwordText.value = pwString;
  

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
