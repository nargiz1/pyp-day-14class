let passwordInp = document.querySelector("#password");
let copy = document.querySelector("#copy");
let generate = document.querySelector("#generate");
let shuffleBtn = document.querySelector("#shuffle")

let length = document.querySelector("#length");
let uppercase = document.querySelector("#uppercase");
let lowercase = document.querySelector("#lowercase");
let numbers = document.querySelector("#numbers");
let symbols = document.querySelector("#symbols");

let passwordLength = length.value;

length.addEventListener("input", function () {
  passwordLength = this.value;
});

generate.addEventListener("click", function () {
  let password = [];
  customPassword(
    uppercase.checked,
    lowercase.checked,
    numbers.checked,
    symbols.checked,
    password,
    passwordLength
  );
  passwordInp.value = password.join("");
  console.log(password.join(""));
});

copy.addEventListener("click", function () {
  navigator.clipboard.writeText(passwordInp.value).then(() => {
    alert("Text copied to clipboard");
  });
});

shuffleBtn.addEventListener("click", function(){
  let result = shuffleArray(passwordInp.value.split(''));
  passwordInp.value = result.join("");
})

function shuffleArray(array) {
  for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
  }
  return array
}

function customPassword(
  isUpperCase,
  isLowerCase,
  isNumber,
  isSymbol,
  password,
  length
) {
  if (isUpperCase && length > password.length) {
    let upperCaseCharacter = Math.floor(Math.random() * (90 - 65 + 1) + 65);
    let letter = String.fromCharCode(upperCaseCharacter);
    password.push(letter);
  }
  if (isLowerCase && length > password.length) {
    let lowerCaseCharacter = Math.floor(Math.random() * (122 - 97 + 1) + 97);
    let letter = String.fromCharCode(lowerCaseCharacter);
    password.push(letter);
  }
  if (isNumber && length > password.length) {
    let numberCharacter = Math.floor(Math.random() * (57 - 48 + 1) + 48);
    let letter = String.fromCharCode(numberCharacter);
    password.push(letter);
  }
  if (isSymbol && length > password.length) {
    let symbolCharacter = Math.floor(Math.random() * (47 - 33 + 1) + 33);
    let letter = String.fromCharCode(symbolCharacter);
    password.push(letter);
  }
  if (password.length === length) {
    return password;
  } else if (length > password.length) {
    customPassword(
      isUpperCase,
      isLowerCase,
      isNumber,
      isSymbol,
      password,
      length
    );
  }
}
