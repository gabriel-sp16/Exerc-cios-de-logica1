
let salario = Number(prompt("Digite o valor do salário (R$):"));
let bonus = Number(prompt("Digite o valor do bónus (R$):"));

let valorTotal = salario + bonus;

alert("O valor total com o bónus incluído é: R$ " + valorTotal.toFixed(2));