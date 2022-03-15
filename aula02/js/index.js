let maoUsuario = parseInt(prompt("Pedra(1), Papel (2) e Tesoura(3)"));
let random = parseInt(Math.random() * 3 +1);

let maoMaquina = random;

let resultadoUsuario = {
	maoUsuario: 0, 
	maoMaquina: 0
}

function verifica (maquina){
	if (maoMaquina == maoUsuario){
		resultado = 'que merda'
	}
	else if (maoMaquina == 1 && maoUsuario == 2){
		resultado = 'perdeuuu'
	}
	else{
		resultado = 'ganhouuu'
	}


console.log(maoUsuario);
console.log(maoMaquina);

let resultado = "Sem calculo";

switch (maoUsuario) {
	case 1:
		if (maoMaquina == 1){
			resultado = 'que merda'
		}
		else if (maoMaquina == 2){
			resultado = 'perdeuuu'
		}
		else {
			resultado = 'ganhouuu'
		}
			break;
	
	case 2:
		if (maoMaquina == 1){
			resultado = 'ganhouuu'
		}
		else if (maoMaquina == 2){
			resultado = 'que merda'
		}
		else {
			resultado = 'perdeuuu'
		}
			break;
	
	case 3:
		if (maoMaquina == 1){
			resultado = 'perdeuuu'
		}
		else if (maoMaquina == 2){
			resultado = 'ganhouuu'
		}
		else {
			resultado = 'que merda'
		}
		break;
	default: 
		resultado = 'valor inválido'
		break;
}

}

alert(resultado)
