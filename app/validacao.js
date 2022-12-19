function verificaSeOChutePossuiUmValorValido(chute){
    const numero = +chute

    if (chuteForInvalido(numero)){
        elementoChute.innerHTML += `<div>Valor inválido: É permitido apenas números</div>`
        return
    }

    if(numeroForMaiorOuMenorQueOValorPermitido(numero)){
        elementoChute.innerHTML += `<div>Valor inválido: o número precisa estar entre ${menorValor} e ${maiorValor}</div>`
        return
    }

    if(numero === numeroSecreto){
        document.body.innerHTML = `<h1>Você acertou!</h1> <h3>O número secreto era ${numeroSecreto}</h3>
        <button id="jogar-novamente" class="btn-jogar">Jogar novamente</button>
        `

    }

    else if(numero > numeroSecreto){
        elementoChute.innerHTML += `<div>O número secreto é menor <i class="fa-solid fa-arrow-down-long"></i> </div>`
    }
    else{
        elementoChute.innerHTML += `<div>O número secreto é maior <i class="fa-solid fa-arrow-up-long"></i>   </div>`
    }
}


function chuteForInvalido (numero){
    return Number.isNaN(numero)
}

function numeroForMaiorOuMenorQueOValorPermitido(numero){
    return numero < menorValor || numero > maiorValor
}

document.body.addEventListener('click', e => {
    if (e.target.id == 'jogar-novamente')
        window.location.reload(true)
})
