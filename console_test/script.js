// let numero = parseInt(prompt('Digite sua idade:'));

// console.log(typeof numero);

// let numero2 = 10.21;
// isNaN(numero2);


let carro = {
    nome: "Tiggo 2",
    ano: "2020"
}

for(let prop in carro) {
    // console.log(prop); // imprime a propiedade
    // console.log(carro[prop]); // imprime o valor da propriedade

    console.log(prop, carro[prop]);
}

let manhwas = ['Martial Peak', 'The Beginning After the End', 'Tales of Demons and Gods'];

for(let valor of manhwas) {
    console.log(valor); // percorre e retorna o array representando cada index do array na variável valor.
}


