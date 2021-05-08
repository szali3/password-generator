// Assignment Code

var generateBtn = document.querySelector("#generate");

// Write password to the #password input

function writePassword() {
  
  var password = generatePassword();
  var passwordText =document.querySelector("#password");
  passwordText.value = password;;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);


function generatePassword(){

  // Ask for length - looping till correct info
  do {
    input = window.prompt("Lenght of password (  Min 8 and Max 128 characters )");
    passLength =  Number(input)
    if (!input || isNaN(passLength)) {
      alert("Please Input valid number");
      loopVar=false;
    } else if (passLength < 8 ||  passLength > 128 ){
      alert("Please type number from 8 to 128 range")
      loopVar=false;
    } else {
      loopVar= true;
    }
  } while (loopVar==false);
 
 // Ask for criteria - looping till atleast one selected   
  do {
  passLower = window.confirm("Do you want lower case character?");
  passUpper = window.confirm("Do you want upper case character?");
  passNum = window.confirm("Do you want numbers?");
  passSpecial = window.confirm("Do you want Special characters?");
   if (passLower   === false && 
       passUpper   === false &&
       passNum     === false &&
       passSpecial === false) {
     alert("Have to select atleast one");
     atLeastOne= false;
   }else {
     atLeastOne = true;
   }
 } while (atLeastOne === false );

 //intailizing different characterset
 var charUpper = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
 var charLower = "abcdefghijklmnopqrstuvwxyz";
 var charNum = "0123456789";
 var charSpecial = "!\"#$%&'()*+,-./:;<=>?@[\\]^_`{|}~";
 var passwordString = ""

 if (passUpper) passwordString = passwordString + charUpper
 if (passLower) passwordString= passwordString +charLower
 if (passNum) passwordString= passwordString +charNum
 if (passSpecial) passwordString+= passwordString +charSpecial

console.log(passUpper,passLower,passNum,passSpecial)
console.log(passwordString)
  //Generate Random password based on criteria
    var ans= [];
    var passwordStringLength = passwordString.length;
    for ( var i = 0; i < passLength; i++ ) {
      ans.push(passwordString.charAt(Math.floor(Math.random() * passwordStringLength)));
   }
   return ans.join('');

  }
    

/*GIVEN I need a new, secure password
WHEN I click the button to generate a password
THEN I am presented with a series of prompts for password criteria
WHEN prompted for password criteria
THEN I select which criteria to include in the password
WHEN prompted for the length of the password
THEN I choose a length of at least 8 characters and no more than 128 characters
WHEN prompted for character types to include in the password
THEN I choose lowercase, uppercase, numeric, and/or special characters
WHEN I answer each prompt
THEN my input should be validated and at least one character type should be selected
WHEN all prompts are answered
THEN a password is generated that matches the selected criteria
WHEN the password is generated
THEN the password is either displayed in an alert or written to the page
*/