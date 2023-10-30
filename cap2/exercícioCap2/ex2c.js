function calcularPromocao(){
    //faz referência aos elementos da página
    var inProduto = document.getElementById("inProduto")
    var inPreco = document.getElementById("inPreco")
    var outVerPromocao = document.getElementById("outVerPromocao")
    var outVerDesconto = document.getElementById("outVerDesconto")
    
    // chama o valor dos elementos dos campos de entrada
    var produto = inProduto.value 
    var preco = Number(inPreco.value)
    
    // calcula o valor da promoção e do desconto
    var desconto = (preco * 0.50)
    var promocao = (preco*2) + desconto
    
    // linha de resposta
    outVerPromocao.textContent = produto + " - Promoção: Leve 3 por R$: " + promocao.toFixed(2)
    outVerDesconto.textContent = "O 3º Produto custa apenas R$: " + desconto.toFixed(2)
}
// faz referência ao botão de ver promoção
var btPromo = document.getElementById("btPromo")
// registra o evento do botão e chama a função
btPromo.addEventListener("click", calcularPromocao)