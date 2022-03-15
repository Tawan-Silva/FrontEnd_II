const urlImagens = [];

const imagens = document.querySelectorAll('img');

imagens.forEach((_, index) => {
    const url = prompt(`Adicione a url para a imagem ${index + 1}`);

    urlImagens.push(url);
});

urlImagens.forEach((url, index) => {
    const imagem = document.querySelector(`#image-${index + 1}`);
    imagem.setAttribute("src", url);
});

