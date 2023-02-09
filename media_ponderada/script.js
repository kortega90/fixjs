const elem = document.getElementById("dados");
console.log(elem);

const vectString = elem.innerHTML;
console.log(vectString);

const result = vectString.split('\n').map(x => Number(x).toFixed(1));

const d1 = result[0];
const d2 = result[1];
const d3 = result[2];

console.log(d1 );
console.log(d2 );
console.log(d3);
const final = d1 * 0.2 + d2*0.3 + d3 *0.5;
console.log(final.toFixed(1));

