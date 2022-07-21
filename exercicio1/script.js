const numeroPar = +prompt("digite um numero par de 2 digitos")

console.log("numero par selecionado", numeroPar)

const a = 2 

const resustadoResto = +(numeroPar % a)

console.log("resto", resustadoResto)

console.log(typeof numeroPar,typeof a,typeof resultadoResto)
// todos os numeros par restam 0
// ao inserir numeros ímpar começa a aparecer o resto 1
//nao consegui mudar o valor de resultadoResto para numero
