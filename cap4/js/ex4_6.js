function verificaPrimo(){
    var inNumero = document.getElementById("inNumero")
    var outResposta = document.getElementById("outResposta")

    var num = Number(inNumero.value)

    if(num == 0 || isNaN(num)){
        alert("Número Inválido :-(")
        inNumero.focus()
        return
    }
var numDivisores = 0 // inicia o contador 

for(var i = 0; i<= num; i++){
    if(num % i == 0){ // verifica se um número primo é um divisor do num
        numDivisores++
    }
}

if(numDivisores == 2){
    outResposta.textContent = num + " é primo" // se possui apenas dois divisores é primo
}else{
    outResposta.textContent = num + " não é primo"
}
}
var btVerificarPrimo = document.getElementById("btVerificarPrimo")
btVerificarPrimo.addEventListener("click", verificaPrimo)