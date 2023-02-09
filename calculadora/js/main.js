const input1 = document.querySelector('[name="number1"]');
input1.addEventListener("change", handleInput1);


async function handleInput1(event) {
 let  n1 = parseFloat(event.target.value);
  console.log(n1);
  if (isNumber(n1)) {
    event.target.classList.remove("input-error");
  } else {
    event.target.classList.add("input-error");
  }
}
//----------------------------------------------------------------//
const input2 = document.querySelector('[name="number2"]');
input2.addEventListener("change", handleInput2);

let n2 = 0;
async function handleInput2(event) {
  let n2 = parseFloat(event.target.value);
  console.log(n2);
  if (isNumber(n2)) {
    event.target.classList.remove("input-error");
  } else {
    event.target.classList.add("input-error");
  }
}
//----------------------------------------------------------------//

const btnSum = document.querySelector('[id="btn-plus"]');
btnSum.addEventListener("click", handlebtnSum);


async function handlebtnSum(event) {
  let char = '+';
  console.log(char);
}

//-----------------------------------------------------------------
async function valorTotal(){
    const valtotal = await calculador(n1,n2);
    console.log(valtotal);
}


async function calculador(n1,n2) {
   if (char == "+"){
    total =  n1 + n2;
}
 else{
     console.log("error")
}
}

//----------------------------------------------------------------//
function isNumber(n) {
    return !isNaN(parseFloat(n)) && isFinite(n);
  }
  
