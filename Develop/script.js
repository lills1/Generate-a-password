// Assignment Code
var generateBtn = document.querySelector("#generate");


// Write password to the #password input
function writePassword() {
var letters_lower = "abcdefghijklmnopqrstuvwxyz";
var letters_upper = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var letters_symbols = "abcdefghijklmnopqrstuvwxyz";
var letters_numeric = "1234567890";
var letters_symbols = "!@#$%^&*()_-";
var has_lower = confirm("Do you want to have any lowercase?");
var has_numeric = confirm("Do you want any numerals?");
var has_symbols = confirm("Do you wany symbols?")
var has_upper = confirm("do you want uppercase?")
var letter_selection = ""; }
if ( has_lower)
{
	letter_selection += letters_lower;
}
if (has_upper)
{
	letter_selection += letters_upper;
}
if (has_symbols)
{
	letter_selection += letters_symbols;
}
if (has_numeric)
{
	letter_selection += letters_numeric;
}
console.log("letters to choose from:"+letter_selection);
password_length = 12;
for (i=0; i<password_length; i++)
// {

// }
//   var password = generatePassword();
//   var passwordText = document.querySelector("#password");

//   passwordText.value = password;

// }

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword)
