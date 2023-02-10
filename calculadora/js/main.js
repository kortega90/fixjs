const input1 = document.querySelector('[name="number1"]');
input1.addEventListener("change", handleInput);


//----------------------------------------------------------------//
const input2 = document.querySelector('[name="number2"]');
input2.addEventListener("change", handleInput);


//----------------------------------------------------------------//

const btnSum = document.querySelector('[id="btn-plus"]');
btnSum.addEventListener("click", handlebtnSum);

function handlebtnSum(event) {
  let char = '+';

if (char == "+"){
    total =  parseFloat(input1.value) + parseFloat(input2.value);
}
const resultBox = document.querySelector('[id="result-box"]');
resultBox.innerHTML = total;

}

//-----------------------------------------------------------------
const btnMult = document.querySelector('[id="btn-times"]');
btnMult.addEventListener("click", handleBtnMult);

function handleBtnMult(event) {
  let char = '*';

if (char == "*"){
    total =  parseFloat(input1.value) * parseFloat(input2.value);
}
const resultBox = document.querySelector('[id="result-box"]');
resultBox.innerHTML = parseFloat(total);

}
//-----------------------------------------------------------------
const btnClear = document.querySelector('[id="btn-clear"]');
btnClear.addEventListener("click", handleBtnClear);

function handleBtnClear(event) {
  let char = 'C';

if (char == "C"){
  input1.value = null;
  input2.value = null;
  const resultBox = document.querySelector('[id="result-box"]');
  resultBox.innerHTML = parseFloat(0);
  input1.classList.remove("input-error");
  input2.classList.remove("input-error");
}
}


//----------------------------------------------------------------//
function isNumber(n) {
    return !isNaN(parseFloat(n)) && isFinite(n);
  }

  function handleInput(event) {
    let  n1 = parseFloat(event.target.value);
     if (isNumber(n1)) {
       event.target.classList.remove("input-error");
     } else {
       event.target.classList.add("input-error");
     }
   }
  
