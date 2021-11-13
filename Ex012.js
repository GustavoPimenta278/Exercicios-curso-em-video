var horarioAtual = new Date()
var hora = horarioAtual.getHours()
console.log(`Agora são exatamente ${hora} horas.`)

if (hora < 12) {
    console.log('Bom dia, flor do dia!')

} else if (hora < 19) {
    console.log('Boa tarde!')

} else {
    console.log('Boa noite meu caro.')
}
