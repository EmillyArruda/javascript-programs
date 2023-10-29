function calcularValor(){
    var inValor = document.getElementById("inValor")
    var outPermanencia = document.getElementById("outPermanencia")
    var outTroco = document.getElementById("outTroco")

    var valor = Number(inValor.value)

    if(inValor == 0 || isNaN(valor)){
        alert("Informe o valor corretamente")
        inValor.focus()
        return
    }

    if(valor < 1.00) {
        alert("Valor insuficiente")
        inValor.focus()
        return
    }

    var tempo 
    var troco

    if(valor >= 3.00){
        tempo = 120
        troco = valor - 3.00
    } else if(valor >= 1.75){
        tempo = 60
        troco = valor - 1.75
    } else {
        tempo = 30
        troco = valor - 1.00
    }

    outPermanencia.textContent = "Tempo: " + tempo + " min"
    if(troco > 0){
        outTroco.textContent = "Troco R$: " + troco.toFixed(2)
    }
}
var btDeposito = document.getElementById("btDeposito")
btDeposito.addEventListener("click", calcularValor)