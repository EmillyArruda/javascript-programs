function calcularPreco(){
    var inValor = document.getElementById("inValor")
    var inTempo = document.getElementById("inTempo")
    var outPagamento = document.getElementById("outPagamento") // referência aos campos de entrada

    var valor = Number(inValor.value)
    var tempo = Number(inTempo.value) // obtenção aos campos de entrada

    var duracao = Math.ceil(tempo / 15) * valor // calcula o valor a ser pago dividindo por 15

    outPagamento.textContent = "Valor a pagar R$: " + duracao.toFixed(2) // mostra a resposta 
}

var btCalcular = document.getElementById("btCalcular") // referencia ao botão de calcular 

btCalcular.addEventListener("click", calcularPreco) // cria um evento para chamar a função