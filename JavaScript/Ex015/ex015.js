function verificar() {

    //puxando o ano atual do sistema
    var data = new Date()
    var ano = data.getFullYear()

    //puxando as ids
    var fAno = document.getElementById('txtano')
    var resultado = document.getElementById('resultado')

    //criando uma tag através do JS
    var img = document.createElement('img')
    img.setAttribute('id', 'foto')

    if (fAno.value.length == 0 || fAno.value > ano) {
        window.alert('[ERROR] Verifique os dados e tente novamente!')

    }   else {
        var fsex = document.getElementsByName('radsex')
        var idade = ano - Number(fAno.value)
        var genero = ''

         //criando as variantes para o genero masculino
        if (fsex[0].checked) {
            genero = 'masculino'
           
            if (idade >= 0 && idade < 14) {
                genero = 'um garotinho'
                img.setAttribute('src', 'garoto.jpeg')

            }   else if (idade < 24) {
                    genero = 'um jovem'
                    img.setAttribute('src', 'jovem_masc.jpeg')
            }   else if (idade < 60) {
                    genero = 'um homem'
                    img.setAttribute('src', 'homem.jpeg')

            }  else if (idade < 110 ) {
                    genero = 'um senhor'
                    img.setAttribute('src', 'idoso.jpeg')

            } else {
                genero = 'um ancião'
                img.setAttribute('src', 'ancião.jpg')

            }
        }
            //criando as variantes do genero feminino
           else if (fsex[1].checked) {
            genero = 'feminino'

            if (idade >= 0 && idade < 14) {
                genero = 'uma garotinha'
                img.setAttribute('src', 'garota.jpeg')

            }   else if (idade < 24) {
                    genero = 'uma jovem'
                    img.setAttribute('src', 'jovem_fem.jpeg')

            }   else if (idade < 60) {
                    genero = 'uma mulher'
                    img.setAttribute('src', 'mulher.jpeg')

            } else if (idade < 110 ) {
                genero = 'uma senhora'
                img.setAttribute('src', 'idosa.jpeg')

            } else {
                genero = 'uma anciã'
                img.setAttribute('src', 'anciã.jpg')
            }
        }

        resultado.style.textAlign = 'center'
        resultado.innerHTML = `Detectamos que você é ${genero} com ${idade} anos`
        //colocando a imagem no html
        resultado.appendChild(img)
        
    }
}