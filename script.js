
let iniciar = document.querySelector('.iniciar')
let reiniciar = document.querySelector('.reiniciar')
let botoes = document.querySelectorAll('.botao')

iniciar.addEventListener('click', iniciarJogo, false)
reiniciar.addEventListener('click', limpar, false)

function addEvent(){
	botoes.forEach((botao,i) => {
		switch (i) {
			case 0 : botao.addEventListener('click', btn0, false); break
			case 1 : botao.addEventListener('click', btn1, false); break
			case 2 : botao.addEventListener('click', btn2, false); break
			case 3 : botao.addEventListener('click', btn3, false); break
			case 4 : botao.addEventListener('click', btn4, false); break
			case 5 : botao.addEventListener('click', btn5, false); break
			case 6 : botao.addEventListener('click', btn6, false); break
			case 7 : botao.addEventListener('click', btn7, false); break
			case 8 : botao.addEventListener('click', btn8, false); break
		}	
	});
}


function iniciarJogo() {
	console.log('passei aqui')
	jogar(0)
	addEvent()
}

function limpar(){
	limparTela(0)
}

function jogar(posicao) {
	iniciar.style.display = 'none'
	reiniciar.style.display = 'block'
	setTimeout(() => {
		let valor = Math.floor(Math.random() * 2)
		valor = valor === 0 ? 0 : 'X'
		botoes[posicao].innerHTML = valor
		posicao++
		if (posicao > 8)
			return

		jogar(posicao)
	}, 80)
}

function limparTela(posicao) {
	iniciar.style.display = 'block'
	reiniciar.style.display = 'none'
	setTimeout(() => {
		let valor = '-'
		botoes[posicao].innerHTML = valor
		posicao++
		if (posicao > 8)
			return

		limparTela(posicao)
	}, 80)
}

function logica(e){
	console.log(e)
}

