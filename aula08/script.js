const body = document.querySelector('body');

const estruturaForm =
    `
<form>
    <legend>Formulário</legend>
    <input id="nome" type="text" placeholder="Nome Completo" required/>
    <input id="email" type="text" placeholder="Email" required/>
    <button id="submit" type="submit">Enviar</button>
    <button id="reset" type="reset">Limpar</button>
</form>`

const div =
    `<div>
        <h3 id="h3">Dados Digitados:</h3>
        <p id="pNome">Nome: </p><br>
        <p id="pEmail">Email: </p>
        <span id="span">Qtd de teclas pressionadas:</span>
    </div>`

let contTeclasPress = 0;

body.innerHTML += estruturaForm;
body.innerHTML += div;

const form = document.querySelector('form');
const inputNome = document.getElementById('nome');
const inputEmail = document.getElementById('email');
const btnSubmit = document.getElementById('submit');
const btnReset = document.getElementById('reset');

const h3 = document.querySelector('#h3');
const pNome = document.querySelector('#pNome');
const pEmail = document.querySelector('#pEmail');
const span = document.querySelector('#span');

// EVENTOS

form.addEventListener("submit", (event) => {
    event.preventDefault();
});

btnSubmit.addEventListener("mouseover", () => {
    btnSubmit.style.color = "#fff";
    btnSubmit.style.backgroundColor = "#8c2a2a"
});

btnSubmit.addEventListener("mouseleave", () => {
    btnSubmit.style.color = "";
    btnSubmit.style.backgroundColor = ""
});

btnReset.addEventListener("mouseover", () => {
    btnReset.style.color = "#fff";
    btnReset.style.backgroundColor = "#8c2a2a"
});

btnReset.addEventListener("mouseleave", () => {
    btnReset.style.color = "";
    btnReset.style.backgroundColor = "";
});


inputNome.onkeypress = (insert) => {
    pNome.innerText += insert.key;
    contTeclasPress++;
    span.innerText = `Qtd de teclas pressionadas: ${contTeclasPress} vezes`;
}

inputEmail.onkeypress = (insert) => {
    pEmail.innerText += insert.key;
    contTeclasPress++;
    span.innerText = `Qtd teclas pressionadas: ${contTeclasPress} vezes`;
}

// setTimeout( () => {
//     alert('Pagina carregada');
// }, 0); 

window.onload = () => {
    alert("Página carregada");
}






