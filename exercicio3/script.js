// a) 5 é maior que 20 e também é menor que 2;
const a = 5
const b = 20
const c = 2
console.log( ` 5 é maior que 20 e também é menor que 2`, a > b && b <a)

// b) 5 é igual a 5 ou é igual a “5”;
const d = 5
const e = "5"
console.log( "5 é igual a 5 ou é igual a “5”", d===d || d === e )   

// c) negação de vinte é maior que cinquenta
const f = 20
const g = 50
console.log( "negação de vinte é maior que cinquenta", !f > g)

// d) negação de (vinte é maior que cinquenta)
const h = 20
const i = 50
console.log(`negação de (vinte é maior que cinquenta)`, !(h > i))

// fiquei com duvida no exercicio b e no e c
console.log(typeof a, typeof b, typeof c, typeof d, typeof e, 
    typeof f, typeof g, typeof h, typeof i)