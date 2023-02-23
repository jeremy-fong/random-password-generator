// Variables
var numbers = '123456789';
var lowerAlpha = 'abcdefghijklmnopqrstuvwxyz';
var upperAlpha = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
var symbols = '~!@#$%^&*()_+=-`[]{}\\|;,./?<>';

var slider = document.getElementById('passwordLengthRange');
var output = document.getElementById('number');
output.innerHTML = slider.value;

slider.oninput = function() {
    output.innerHTML = this.value;
}

var generatePassword = function() {
    var length = slider.value;
    var confirmLower = document.getElementById('lowercase').checked;
    var confirmUpper = document.getElementById('uppercase').checked;
    var confirmNumber = document.getElementById('numbers').checked;
    var confirmSymbol = document.getElementById('special').checked;

    var charBuild = '';
    var generatedPassword = '';

    var countOptions = confirmLower + confirmUpper + confirmNumber + confirmSymbol;

    if (countOptions === 0) {
        generatedPassword = generatedPassword + 'Please select at least one option!';
        return generatedPassword;
    }

    if (confirmLower) {
        charBuild = charBuild.concat(lowerAlpha);
    }

    if (confirmUpper) {
        charBuild = charBuild.concat(upperAlpha);
    }

    if (confirmNumber) {
        charBuild = charBuild.concat(numbers);
    }

    if (confirmSymbol) {
        charBuild = charBuild.concat(symbols);
    }


    for (i=0; i < length; i++) {
        var randomi = Math.floor(Math.random() * charBuild.length);
        generatedPassword += charBuild[randomi];
    }

    return generatedPassword;
};



// function syncPasswordLength(e) {
//     var value = e.target.value
//     passwordLengthNumber.value = value
//     passwordLengthRange.value = value
// }

// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
