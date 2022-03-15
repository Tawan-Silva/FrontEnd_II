let bg = document.querySelector('h1');
let bgBody = document.querySelector('.bg-body');
let dados = document.querySelectorAll('.dados')

bg.style.color = 'red';

bgBody.style.background = 'white';

dados.forEach(elemento =>  { elemento.classList.add('dadosAlterados')}) // adiciona um class eslitizada em todos as classes .dados



