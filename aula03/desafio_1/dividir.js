function divisao(n1, n2) {
    if(n1 == 0 || n2 == 0) {
        return 'Não se pode dividir por zero'
    }

    return n1 / n2;
}

module.exports = divisao;