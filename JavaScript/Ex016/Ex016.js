//puxando os inputs e divs
var inicio = document.getElementById('inicio')
var fim = document.getElementById('fim')
var passo = document.getElementById('passo')
var resultado = document.getElementById('mostraPatinho')


function contaPatinho() {
    //verificação
    if (inicio.value.length == 0 || fim.value.length == 0 || passo == 0) {
        resultado.innerHTML = 'Impossivel contar!'

    } else {
        resultado.innerHTML = 'Contando: <br>'
        let valorIni = Number(inicio.value)
        let valorFim = Number(fim.value)
        let valorPasso = Number(passo.value)

        //caso coloquem a quantidade de passos como 0
        if (valorPasso <= 0) {
            window.alert('Passo inválido! Considerando PASSO 1')
            valorPasso = 1
        }

        //contagem crescente
        if (valorIni < valorFim) {
        
            for (let contador = valorIni; contador <= valorFim; contador += valorPasso) {
                resultado.innerHTML += ` ${contador} \u{1F986} `

            }

        } else {
            //contagem regressiva
            for(let contador = valorIni; contador >= valorFim; contador -= valorPasso) {
                resultado.innerHTML += ` ${contador} \u{1F986}`
            }
        }
        resultado.innerHTML += '\u{1F3C1}'
    }
}


