function calcularPreco(){
    // referencia os elementos da página
    var inMed = document.getElementById("inMed")
    var inPreco = document.getElementById("inPreco")
    var outMed  = document.getElementById("outMed")
    var outPromo = document.getElementById("outPromo")
    
    // obtém os campos de entrada 
    var med = inMed.value
    var preco = Number(inPreco.value) 

    // calcula o valor da promoção
    var promocao = Math.floor(preco*2)

    // altera a linha de resposta
    outMed.textContent = "Promoção de " + med
    outPromo.textContent = "Leve 2 por apenas R$: " + promocao.toFixed(2)
}

// cria referência ao elemento btPromo
var btPromo = document.getElementById("btPromo")

//registra um evento associado ao botão para carregar a função
btPromo.addEventListener("click", calcularPreco)