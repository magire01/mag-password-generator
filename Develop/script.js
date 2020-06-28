// Assignment Code
var generateBtn = document.querySelector("#generate");
// pwCharacter is an array with all possible password character options
var pwCharacter = "abcdeftghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ1234567890!@#$%^&*()".split("");
// pwArray is an empty arry that will be filled with the for loop
var pwArray = []
//pw Character test
console.log(pwCharacter);


function generatePassword() {
  // for loop to push 10 random characters to pwArray
  for (var i = 0; i<10; i++) {
    //push 10 random characters to pwString array
    pwArray.push(pwCharacter[Math.floor(Math.random() * (Math.floor(72) - Math.ceil(0) + 1))]);
    
  }
  //pwArray test
  console.log(pwArray);
}

//generatePassword test
generatePassword();
// variable to assign the pwArray to a single string
var pwString = pwArray[0] + pwArray[1] + pwArray[2] + pwArray[3] + pwArray[4] + pwArray[5] + pwArray[6] + pwArray[7] + pwArray[8] + pwArray[9];
  
// pwString test
console.log("Password: " + pwString);


// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  // variable to assign the pwArray to a single string
  var pwString = pwArray[0] + pwArray[1] + pwArray[2] + pwArray[3] + pwArray[4] + pwArray[5] + pwArray[6] + pwArray[7] + pwArray[8] + pwArray[9];
  
  console.log(pwString);
  

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
