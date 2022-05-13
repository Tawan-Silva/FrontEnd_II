const formulario = document.querySelector('form')
const fullname = document.getElementById('nome');
const btnSubmit = document.querySelector('button')
const hobbies = document.getElementsByName('hobbies');
const nacionalidades = document.getElementsByName('nacionalidade')

formulario.addEventListener('submit', function (e) {

    e.preventDefault();

    validaNome()
    validaNacionalidade()

});


function toggleButton(state) {
    if (state) {
        btnSubmit.removeAttribute('disabled')
    } else {
        btnSubmit.setAttribute('disabled', '')
    }
}

fullname.addEventListener('focusout', function (ev) {
    validaNome()
})



function validaNome() {
    const er = /\d/       /* /[0-9]/ */

    if (fullname.value == "") {
        alert('Nome não pode ser nulo')
    }

    else if (er.test(fullname.value)) {
        alert('Não pode existir números')
    }

    else if (fullname.value.split(" ").length < 2) {
        alert('Nome Deve conter pelo menos duas palavras.')
    }

    else if ((fullname.value.split(" ")[0].length < 2) || (fullname.value.split(" ")[1].length < 2)) {
        alert('Cada nome ou sobrenome deve ter mais de 1 letra.')
    }

    else if (fullname.value.length > 150) {
        alert(`Nome não pode ser maior que 150 caracteres. Atualmente são ${fullname.length}`)
    }

    else toggleButton(true)

}