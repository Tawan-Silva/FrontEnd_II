function logar() {
    
    var email = document.querySelector('#email');
    var senha = document.querySelector('#senha');


    if(email.value == "admin@admin.com" && senha.value == "admin") {

        localStorage.setItem("acesso", true);

        alert("Usuario Autenticado!");

        window.location.href = "index.html";
    } else {
        alert("Usuario ou senha inválida!")
    }
}