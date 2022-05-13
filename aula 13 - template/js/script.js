const formulario = document.querySelector('form')

formulario.addEventListener('submit',function(e){

    e.preventDefault();

    let fullname = document.querySelector('#nome');
    const pass = document.querySelector('#pass');
    const tel = document.querySelector('#tel');
    const hobbies = document.getElementsByName('hobbies');
    const nacionalidades = document.getElementsByName('nacionalidade')

    validaNome(fullname.value)  
        
});

function validaNome(nome){
    const er = /^[0-9]+$/

    if(nome == ""){
        alert('Nome não pode ser nulo')    
    } 

    else if (er.test(nome)){
        alert('Não pode existir números')
    }

    else if(nome.split(" ").length < 2) {
        alert('Nome Deve conter pelo menos duas palavras.')
    }

    else if((nome.split(" ")[0].length < 2) || (nome.split(" ")[1].length < 2)){
        alert('Cada nome ou sobrenome deve ter mais de 1 letra.')
    } 

    else if (nome.length > 150){
        alert(`Nome não pode ser maior que 150 caracteres. Atualmente são ${nome.length}`)
    }


}

// function validaHobbies(hobbie){
  // let count = 0;
// hobbies.forEach(hobbie,i)=>{ if(hobbie[i]==checked){count++}}

// if count >4 {alert('Selecione no máximo 4 hobbies.')} 
  
// }


// function validaNacionalidade(nacionalidade){

// if (nacionalidade.value = 'Brasil'){
// alert("Desculpe, ainda não estamos recrutando bruxos no Brasil, seu otário!!")
// }


// }
