var idade = 17

if (idade < 16) {
    console.log('Você ainda não pode votar!')
}  else if (idade < 18 && idade > 16 || idade > 65) {
    console.log('Voto opcional!')

}   else {
    console.log('Voto obrigatório!')
}
