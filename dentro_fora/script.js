const dados = document.getElementById("dados").innerHTML.split('\n').map(x => Number(x));
console.log(dados);

const max = 20;
const min =10;
let dentro = 0;
let fora = 0;

for(let i=0;i<dados.length;i++){

    // if(dados[i] >max || dados[i] < min){
    //   fora += 1
    // }
    // else{
    //   dentro += 1
    // }
    (dados[i] >max || dados[i] < min)? fora += 1 :dentro += 1;
}
console.log(`${dentro} dentro`);
console.log(`${fora} fora`);
