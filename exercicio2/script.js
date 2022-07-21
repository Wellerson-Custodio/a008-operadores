const a = prompt("escolha um numero");

const b = prompt("escolha outro numero");

console.log("primeiro numero escolhido", a, "segundo numero escolhido", b);

console.log("O primeiro numero é maior que segundo?", a>b )  
console.log("O primeiro numero é igual ao segundo?", a===b )
console.log("O primeiro numero é divisível pelo segundo?", a&&b )
console.log("O segundo numero é divisível pelo primeiro?", !b&&a )
// nao consegui fazer se "a" e "b" eram divisiveis
