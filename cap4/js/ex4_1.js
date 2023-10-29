function mostrarTabuada(){
    var inNumero = document.getElementById("inNumero")
    var outTabuada = document.getElementById("outTabuada") // faz referância aos elementos da página

    var numero = Number(inNumero.value) // converte o conteúdo do campo inNumero
    
    // valida o número
    if(numero == 0 || isNaN(numero)){
        alert("Informe um número válido...")
        inNumero.focus()
        return
    }

    var resposta = "" // cria uma string que concatena a resposta 

    // cria um alaço de repetição
    for(var i = 1; i <= 10; i++){
        resposta = resposta + numero + " X " + i + " = " + numero * i + "\n"
    }

    outTabuada.textContent = resposta // exibe a tabuada do número informado
}
// cria uma referência ao botão e faz a chamada da função
var btMostrar = document.getElementById("btMostrar")
btMostrar.addEventListener("click", mostrarTabuada)