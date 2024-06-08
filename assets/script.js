// Getting the DOM Elements
const resultDOM = document.getElementById("result");
const copybtnDOM = document.getElementById("copy");
// const InputTxtDOM = document.getElementById("InputTxt");
// const lengthDOM = document.getElementById("length");
// const uppercaseDOM = document.getElementById("uppercase");
// const numbersDOM = document.getElementById("numbers");
// const symbolsDOM = document.getElementById("symbols");
// const generatebtn = document.getElementById("generate");
// const form = document.getElementById("passwordGeneratorForm");
//---------------------------------------------------//
// Generating Character Codes For The Application
// const UPPERCASE_CODES = arrayFromLowToHigh(65, 90);
// const LOWERCASE_CODES = arrayFromLowToHigh(97, 122);
// const NUMBER_CODES = arrayFromLowToHigh(48, 57);
// const SYMBOL_CODES = arrayFromLowToHigh(33, 47)
// .concat(arrayFromLowToHigh(58, 64))
// .concat(arrayFromLowToHigh(91, 96))
// .concat(arrayFromLowToHigh(123, 126));
//---------------------------------------------------//
// Character Code Generating Function
// function arrayFromLowToHigh(low, high) {
// const array = [];
// for (let i = low; i <= high; i++) {
//     array.push(i);
// }
// return array;
// }
//---------------------------------------------------//
// The Password Generating Function
function reverseString() {
  var s = document.getElementById('InputTxt').value;
  // reverse should initialized as a empty String
  // to prevent adding char to "undefined" string
  var reversed = '';

  for (var i = s.length - 1; i >= 0; i--) {
      reversed += s[i];
  }

  // document.getElementById('InputTxt').disabled = true;
  document.getElementById('OutputTxt').disabled = true;
  document.getElementById('OutputTxt').value = reversed;
  // resultDOM.innerText = reverse;
}

function submit(ev) {
  // preventDefault prevent the form to do his automatic
  // behavior which submit the form with a new HTTP request
  ev.preventDefault();
  reverseString();
}

// Attach the event to the form
document.getElementById('reverse').addEventListener('submit', submit);

// Copy password button
copybtnDOM.addEventListener("click", () => {
  const textarea = document.createElement("textarea");
  const StrToCopy = document.getElementById("OutputTxt");
  // A Case when Password is Empty
  if (!StrToCopy) return;
  // Copy Functionality
  textarea.value = StrToCopy;
  document.body.appendChild(textarea);
  textarea.select();
  document.execCommand("copy");
  textarea.remove();
  alert("Copied the text: " +textarea.value);
  })

//---------------------------------------------------//
function Hs_about(){
  var hs = document.getElementById('about')
  if (hs.style.display === 'none') {
  hs.style.display = 'block';
} else {
  hs.style.display = 'none';
}
}