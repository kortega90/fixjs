const elem = document.getElementById("dados");
console.log(elem);

const vectString = elem.innerHTML;
console.log(vectString);

const result = vectString.split('\n').map(x => Number(x));

// const result = vectString.split('\n');
// console.log(result);

// const numeros = result.map(x => Number(x));
// console.log(numeros);


let max = 0;
for (let i=0; i< result.length;i++){
if(max < result[i]){
    max = result[i]; 
}

}
console.log(max)


//  let maxi= 0
// for (let i = 0; i< numeros.length;i++){
//     maxi = maxi < numeros[i]? maxi = numeros[i]: maxi =maxi;

// }
// console.log(maxi)