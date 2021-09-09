// Assignment Code

//this is the button on screen, uses a query selector to target the id

var generateBtn = document.querySelector("#generate");

//this is the function that generates the randomiser

function pickRandomElementFromArray(randomArray) {
	var randomIndex = Math.floor(Math.random() * randomArray.length);
	return randomArray[randomIndex];
}

//checks if the string is a valid number 
function isNumeric(str) {
	if (typeof str != "string") return false
	return !isNaN(str) &&
		!isNaN(parseFloat(str)) //parseFloat function parses a string and returns an integer
}

function checkarray(gen_password, letters_array)
//the strings its comparing
{
	for (var i = 0; i < gen_password.length; i++);
	if (letters_array.indexOf(gen_password.charAt(i)) >= 0) {
		return true;
	}
	return false;
}

function generatePassword() {
	//the 4 variables which have the possible outcomes
	var letters_lower = "abcdefghijklmnopqrstuvwxyz";
	var letters_upper = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
	var letters_numeric = "1234567890";
	var letters_symbols = "!@#$%^&*()_-";
	//makes sure theres no defaults (originally lowercase was default)
	var has_lower = false;
	var has_numeric = false;
	var has_symbols = false;
	var has_upper = false;
	do {
		//the pop up messages
		has_lower = confirm("Do you want to have any lowercase characters?");
		has_numeric = confirm("Do you want any numerals?");
		has_symbols = confirm("Do you want symbols?");
		has_upper = confirm("do you want uppercase characters?");
		var password_length = 8;


		// prompts the user to select between the criteria of 8-128

		do {
			let password_length_str = prompt("Please select at least 8 with no more than 128 characters");
			let text;

			//4 criteria is set: if it returns as null, an empty string, less than 8 or more than 128 will alert a nessage

			if (password_length_str == null || password_length_str == "" || !isNumeric(password_length_str) || parseInt(password_length_str) < 8 || parseInt(password_length_str) > 128) {
				alert("invalid number, please retry");
				password_length = -1;
			} else { //otherwise it will work
				password_length = parseInt(password_length_str);
			}
		} while (password_length < 8);
		var letter_selection = "";
		console.log("has_lower:" + has_lower);
		console.log("has_numeric:" + has_numeric);
		console.log("has_symbols:" + has_symbols);
		console.log("has_upper:" + has_upper);



		//calls upon the variables responsible for the confirm boxes, the possible characters, and empty
		//string to produce an if loop which
		//the += assigns the right value to the left. in this case assigns the possible outcomes to the 
		//empty string
		if (has_lower) {
			letter_selection += letters_lower;
		}
		if (has_upper) {
			letter_selection += letters_upper;
		}
		if (has_symbols) {
			letter_selection += letters_symbols;
		}
		if (has_numeric) {
			letter_selection += letters_numeric;
		}
		console.log("letters to choose from:" + letter_selection);
		if (letter_selection == "") { //ensures that if no criteria is selected the user has to go back and select one
			alert("Please restart and include at least one criteria");
		}
	}
	while (letter_selection == "")

	do {
		var gen_password = "" // creates a variable of empty string
		for (i = 0; i < password_length; i++) // starts at zero, increments by 1

		{
			gen_password += pickRandomElementFromArray(letter_selection);
			//calls upon randomiser function 

		}

		// each of these calls upon the function checkarray and 


		var has_numeric_check = !has_numeric || checkarray(gen_password, letters_numeric);

		var has_lower_check = !has_lower || checkarray(gen_password, letters_lower);

        var has_upper_check = !has_upper || checkarray(gen_password, letters_upper);

        var has_symbols_check = !has_upper || checkarray(gen_password, letters_symbols);
	}
    
	while (!(has_lower_check && has_numeric_check && has_symbols_check && has_upper_check));
	return gen_password;
}


// Write password to the #password input
function writePassword() {

	var password = generatePassword();
	var passwordText = document.querySelector("#password");

	passwordText.value = password;
}
//Add event listener to generate button
generateBtn.addEventListener("click", writePassword)