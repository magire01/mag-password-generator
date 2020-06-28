// Assignment Code
var generateBtn = document.querySelector("#generate");
// pwCharacter is an array with all possible password character options
var pwCharacter = "abcdeftghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ1234567890!@#$%^&*()".split("");
// pwString is an empty arry that will be filled with the for loop
var pwString = []
//pw Character test
console.log(pwCharacter);

// for loop to push 10 random characters to pwString array
for (var i = 0; i<10; i++) {
  pwString.push(pwCharacter[Math.floor(Math.random() * (Math.floor(72) - Math.ceil(0) + 1))]);
  

  // console.log("PW Character: " + pwCharacter[Math.floor(Math.random() * (Math.floor(72) - Math.ceil(0) + 1))]);
}
console.log(pwString);

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
// for loop to determine pw size
  for (var i = 0; i<10; i++) {
    console.log("PW Character: " + pwCharacter[i]);
  }
  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
