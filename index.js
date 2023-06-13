// Esta é a função contarVogais, ao começar a escrever a palavra, não há nenhuma vogal, depois será verificado as vogais com acento //
function contarVogais(palavra) {
    var contadorVogais = 0;
    var vogais = ['a', 'e', 'i', 'o', 'u', 'ê', 'á','é','í','ó','ú','ã','õ','â','ê','ô'];
// Começa a verificação de vogais com acento, onde se adiciona 1 no valor das vogais //
    for (var i = 0; i < palavra.length; i++) {
      if (vogais.includes(palavra[i].toLowerCase())) {
        contadorVogais++;
      }
    }
// Retorna a função //
    return contadorVogais;
  }

// Executa a função ao digitar uma palavra //
  function verificarPalavra() {
    var palavraInserida = prompt("Digite uma palavra:");
    var numVogais = contarVogais(palavraInserida);
    alert("A palavra '" + palavraInserida + "' tem " + numVogais + " vogais.");
    }

// Esta é a função reverter string //
function reverseString(str) {
    return str.split("").reverse().join("");
}

// Utiliza o reverter string //
function reverterString() {
    var verificador = prompt("Digite uma palavra")
    var palRevertida = reverseString(verificador)
    alert("A palavra revertira é " + palRevertida);
}

function inserirTemperatura() {
    var fahrenheit = prompt("Escreva uma temperatura em Celcius")
    var temperaturaFinal = 
    alert("A temperatura em Fahrenheit é" + temperaturaFinal)
}