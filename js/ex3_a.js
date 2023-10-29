function VerificaParImpar(){
    var inNumero = document.getElementById("inNumero")
    var outResposta = document.getElementById("outResposta")

    outResposta.textContent = ""

    var numero = Number(inNumero.value)

    if(numero == 0 || isNaN(numero)){
        alert("Informe um número válido")
        inNumero.focus()
        return
    }

    var resto = numero / 2

    if(resto % 2 == 0){
        outResposta.textContent = "Resposta: " + numero + " é par"
    } else{
        outResposta.textContent = "Resposta: " + numero + " é ímpar"
    }
}
var btVerificar = document.getElementById("btVerificar")
btVerificar.addEventListener("click", VerificaParImpar)