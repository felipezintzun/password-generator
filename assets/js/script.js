const randomFunc = {
  lower: getRandomLower,
  upper: getRandomUpper,
  number: getRandomNumber,
  symbol: getRandomSymbol,
};

//Generator functions

function getRandomLower() {
  return String.fromCharCode(Math.floor(Math.random() * 26) + 97);

}

function getRandomUpper() {
  return String.fromCharCode(Math.floor(Math.random() * 26) + 65);

}

function getRandomNumber() {
  return String.fromCharCode(Math.floor(Math.random() * 10) + 48);

}

function getRandomSymbol() {
  const symbols = '!@#$%^&*(){}[]+<>/,.';
  return symbols[Math.floor(Math.random() * symbols.length)];
}


console.log(getRandomSymbol());

// Get references to the #generate element

var generateBtn = document.querySelector("#generate");


// Write password to the #password input

function writePassword() {
    var password = generatePassword();
    var passwordText = document.querySelector("#password");

    passwordText.value = password;

  }

//}
function generatePassword (){
  var prompt = parseInt(window.prompt("How many characters would you like your password to contain?"))
  if (prompt < 8 || prompt > 128) {
    return "Please enter a valid number between 8 and 128";
    // if (password < 8) {
    //   window.alert("Please input a number between 8 and 128");
    }
    var acceptLowercase = false
    var acceptUppercase = false
    var acceptNumber = false
    var acceptSymbol = false
    
    acceptLowercase = confirm("Click OK to confirm including lowercase characters")
    acceptUppercase = confirm("Click OK to confirm including uppercase characters")
    acceptNumber = confirm("Click OK to confirm including numbers")
    acceptSymbol = confirm("Click OK to confirm including symbols")

    if (!acceptLowercase && !acceptUppercase && !acceptNumber && !acceptSymbol) {
      return "Please select at least one option"
    }
    
    var i = 0 
    var userPassword = ''
      while (i < prompt){

      
    if (acceptLowercase && i < prompt ){
      console.log("lower");

     userPassword += getRandomLower ()
     i++
    }

    if (acceptUppercase && i < prompt) {
      console.log("uppercase");

      userPassword += getRandomUpper ()
      i++
    }

    if (acceptNumber && i < prompt) {
      console.log("number");

      userPassword += getRandomNumber ()
      i++
    }

    if (acceptSymbol && i < prompt) {
    console.log("symbol");

    userPassword += getRandomSymbol ()
    i++
  }
}
  return userPassword
}
  // Add event listener to generate button

  generateBtn.addEventListener("click", writePassword);

