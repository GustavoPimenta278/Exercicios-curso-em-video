var inputNumber = document.getElementById('txtnumber')
var resultado = document.getElementById('resultado')
var tabuada = document.getElementById('tabuada')
var select2 = document.getElementById('tabuada2')

function geratabuada () {
    //checando se há algum valor no input
    if (inputNumber.value.length == 0) {
        window.alert('{ERROR} Verifique os dados!')
        
    }   else {
        let number = Number(inputNumber.value)
        let multiplicador = 1
        let multiplicador2 = 10
        tabuada.innerHTML = ''
        tabuada2.innerHTML = ''

        //Select 1 a 10
        while (multiplicador <= 10) {
            let item = document.createElement('option')
            item.text = `${number} X ${multiplicador} = ${number*multiplicador}`
            item.value = `tab${multiplicador}`
            tabuada.appendChild(item)
            multiplicador++
        }

        //Select 10 a 20
        while (multiplicador2 <= 20) {
            let item2 = document.createElement('option')
            item2.text = `${number} X ${multiplicador2} = ${number*multiplicador2}`
            item2.value = `tab${multiplicador2}`
            select2.appendChild(item2)
            multiplicador2++
        }
    }
}
