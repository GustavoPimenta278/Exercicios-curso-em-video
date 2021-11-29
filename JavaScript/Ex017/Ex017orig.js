var inputNumber = document.getElementById('txtnumber')
var resultado = document.getElementById('resultado')
var tabuada = document.getElementById('tabuada')

function geratabuada () {
    if (inputNumber.value.length == 0) {
        resultado.innerHTML = '{ERROR} Dados insuficientes!'
        
    }   else {
        let number = Number(inputNumber.value)
        let multiplicador = 1
        tabuada.innerHTML = ''

        while (multiplicador <= 20) {
            let item = document.createElement('option')
            item.text = `${number} X ${multiplicador} = ${number*multiplicador}`
            item.value = `tab${multiplicador}`
            tabuada.appendChild(item)
            multiplicador++
        }
    }
}
