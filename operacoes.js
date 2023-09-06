var num1 = parseFloat(prompt("Insira um número: "));
var num2 =parseFloat(prompt("Insira outro número: "));

var soma = num1 + num2;
var subtracao = num1 - num2;
var produto = num1 * num2;
var divisao = num1 / num2;
var resto = num1 % num2;

var resultado = "Soma: " + soma + "\n";
resultado += "Subtração: " + subtracao + "\n";
resultado +="Produto: " + produto + "\n";
resultado += "Divisão: " + divisao + "\n";
resultado += "Resto: " + resto + "\n";

alert(resultado);