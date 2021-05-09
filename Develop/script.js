// Assignment Code

var generateBtn = document.querySelector("#generate");

// Write password to the #password input

function writePassword() {
  passQuestion = askQuestions();
  var password = generatePassword(passQuestion);
  var passwordText =document.querySelector("#password");
  passwordText.value = password;;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

function askQuestions(){
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
  var passLower = window.confirm("Do you want lower case character?");
  var passUpper = window.confirm("Do you want upper case character?");
  var passNum = window.confirm("Do you want numbers?");
  var passSpecial = window.confirm("Do you want Special characters?");
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
 return {passLower,passUpper,passNum,passSpecial}
}


function generatePassword(objAsk){

 //intailizing different characterset
 var charUpper = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
 var charLower = "abcdefghijklmnopqrstuvwxyz";
 var charNum = "0123456789";
 var charSpecial = "!\"#$%&'()*+,-./:;<=>?@[\\]^_`{|}~";
 var passwordString = ""

 if (objAsk.passUpper) passwordString = passwordString + charUpper
 if (objAsk.passLower) passwordString= passwordString +charLower
 if (objAsk.passNum) passwordString= passwordString +charNum
 if (objAsk.passSpecial) passwordString+= passwordString +charSpecial


  //Generate Random password based on criteria
    var ans= [];
    for ( var i = 0; i < passwordString.length; i++ ) {
      ans.push(passwordString.charAt(Math.floor(Math.random() * passwordString.length)));
   }
   return ans.join('');

  }
    
