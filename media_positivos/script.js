// const n = document.getElementById("dados").innerHTML.split('\n').map(x => Number(x));
// console.log(n);

const dados = document.getElementById("dados").innerHTML.split('\n').map(x => Number(x));
console.log(dados);
let sum = 0;
let Numb = 0;

// for(let i=0;i<dados.length;i++){
// if(dados[i]>0){
// sum+=dados[i];
// Numb+= 1;
// }
//console.log(sum);
//console.log(Numb);
for(let i=0;i<dados.length;i++){
    if(dados[i]>0){
    sum+=dados[i];
    Numb+= 1;
    }
}
if(Numb>0){
const media =sum/Numb;
console.log(media.toFixed(1));
}
else{
    console.log("IMPOSSIVEL CALCULAR");  
}

