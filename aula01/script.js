let total;

let somar = (item) => {
     total += item;
     console.log(item);
}
let arrayDeNumeros =  [1, 2, 4, 8]; 
arrayDeNumeros.forEach(somar);

