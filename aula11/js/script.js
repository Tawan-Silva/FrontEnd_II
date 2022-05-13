const btn = document.getElementById('#send')

btn.addEventListener('click', (e) => {

    e.preventDefault();

    let name = document.getElementById('#name')

    let texto = name.value;

    console.log(texto);

    let arrayDeFilmes = name.split(";")
    console.log(arrayDeFilmes);
});