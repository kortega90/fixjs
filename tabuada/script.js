const n = document.getElementById("dados").innerHTML.split('\n').map(x => Number(x))[0];
console.log(n);

for (let i=1; i<=10; i++){
    console.log(n +" x "+i+" = "+  (n*i));
}