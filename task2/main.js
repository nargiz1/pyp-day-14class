let password = document.querySelector("#password");
let copy = document.querySelector("#copy");
let generate = document.querySelector("#generate");

let length = document.querySelector("#length");
let uppercase = document.querySelector("#uppercase");
let lowercase = document.querySelector("#lowercase");
let numbers = document.querySelector("#numbers");
let symbols = document.querySelector("#symbols");

let passwordLength = length.value;
// let isUpperCase;
// let isLowerCase;
// let isNum;
// let isSymbol;

// length.addEventListener("input", function () {
//   passwordLength = this.value;
// });
// uppercase.addEventListener("change", function () {
//   isUpperCase = this.checked;
// });
// lowercase.addEventListener("change", function () {
//   isLowerCase = this.checked;
// });
// numbers.addEventListener("change", function () {
//   isNum = this.checked;
// });
// symbols.addEventListener("change", function () {
//   isSymbol = this.checked;
// });



function customPassword(isUpperCase, isLowerCase, isNumber, isSymbol, password, arrayLength) {
  let length = arrayLength;
  if (isUpperCase && length !== 0) {
    length-=1;
    let upperCaseCharacter = Math.floor(Math.random() * (90 - 65 + 1) + 65);
    password.push(upperCaseCharacter);
    console.log(password);
  }
  if (isLowerCase  && length !== 0) {
    length-=1;
    let lowerCaseCharacter = Math.floor(Math.random() * (122 - 97 + 1) + 97);
    password.push(lowerCaseCharacter);
  }
  if (isNumber  && length !== 0) {
    length-=1;
    let numberCharacter = Math.floor(Math.random() * (57 - 48 + 1) + 48);
    password.push(numberCharacter);
  }
  if (isSymbol  && length !== 0) {
    length-=1;
    let symbolCharacter = Math.floor(Math.random() * (47 - 33 + 1) + 33);
    password.push(symbolCharacter);
  }
  if(password.length == arrayLength){
    console.log("here");
    return password;
  }else if(arrayLength > password.length){
    customPassword(isUpperCase, isLowerCase, isNumber, isSymbol, password, (arrayLength - password.length));
  }
}


generate.addEventListener("click", function () {
    let password = [];
  
    let customPassword1 = customPassword(
      uppercase.checked,
      lowercase.checked,
      numbers.checked,
      symbols.checked,
      password,
      passwordLength
    );
  
    console.log(customPassword1);
  });