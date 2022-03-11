var nome = "Leticia"

var notaDoPrimeiroBimestre = 9.43
var notaDoSegundoBimestre = 7.23
var notaDoTerceiroBimestre = 8.23
var notaDoQuartoBimestre = 9.18

var notaFinal = (notaDoPrimeiroBimestre + notaDoSegundoBimestre + notaDoTerceiroBimestre + notaDoQuartoBimestre) / 4

var notaFixada = notaFinal.toFixed(1)

console.log("Bem vindo(a) " + nome)
console.log(notaFixada)

//Revisão
//variáveis, strings, console.log, toFixed, operações matemáticas, concatenação

//concatenação = junção de uma string com uma variável ex.:("Bem vindo(a) " + nome)

function media(){
    var valorElemento1 = document.getElementById("primeiroBimestre");
    var primeiroBimestre = valorElemento1.value;
    var valorPrimeiroBimestre = parseFloat(primeiroBimestre);

    var valorElemento2 = document.getElementById("segundoBimestre");
    var segundoBimestre = valorElemento2.value;
    var valorSegundoBimestre = parseFloat(segundoBimestre);

    var valorElemento3 = document.getElementById("terceiroBimestre");
    var terceiroBimestre = valorElemento3.value;
    var valorTerceiroBimestre = parseFloat(terceiroBimestre);

    var valorElemento4 = document.getElementById("quartoBimestre");
    var quartoBimestre = valorElemento4.value;
    var valorQuartoBimestre = parseFloat(quartoBimestre);

    var valorMedia = (valorPrimeiroBimestre + valorSegundoBimestre + valorTerceiroBimestre + valorQuartoBimestre) / 4;
    console.log(valorMedia);

    var elementoValorCalculado = document.getElementById("resultado");
    var resultado = "A sua média esse ano foi de " + valorMedia;
    elementoValorCalculado.innerHTML = resultado;
}
