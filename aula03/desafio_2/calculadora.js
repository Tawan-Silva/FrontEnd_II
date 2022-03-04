import funcaoMultiplicar from './multiplicar.js';
import funcaoSomar from './somar.js';
import funcaoSubtrair from './subtrair.js';
import funcaoDividir from './dividir.js';


let selecioneOperacao = prompt('Digite a operação de que deseja fazer: "+", "-", "*", "/" ')
let n1 = parseInt(prompt('Digite o primeiro valor'));
let n2 = parseInt(prompt('Digite o segundo valor'));

if (selecioneOperacao === '*') {
    alert(`O resultado da operação é: ${funcaoMultiplicar(n1, n2)}`)
} else if (selecioneOperacao === '+') {
    alert(`O resultado da operação é: ${funcaoSomar(n1, n2)}`)
} else if (selecioneOperacao === '-') {
    alert(`O resultado da operação é: ${funcaoSubtrair(n1, n2)}`)
} else if (selecioneOperacao === '/') {
    alert(`O resultado da operação é: ${funcaoDividir(n1, n2)}`)
}




