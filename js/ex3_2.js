function calcularPeso(){
    var inNome = document.getElementById("inNome")
    var rbMasculino = document.getElementById("rbMasculino")
    var rbFeminino = document.getElementById("rbFeminino")
    var inAltura = document.getElementById("inAltura")
    var outResposta = document.getElementById("outResposta")

    var nome = inNome.value
    var masculino = rbMasculino.checked
    var feminino = rbFeminino.checked
    var altura = Number(inAltura.value)

    if(nome == "" || (masculino == false && feminino == false)){
        alert("Por favor, informe o nome e selecione o sexo")
        inNome.focus()
        return
    } // verifica se nome foi preenchido e sexo selecionado
    
    if(altura==0 || isNaN(altura)){
        alert("Por favor, informe a altura corretamente")
        inAltura.focus()
        return
    } // verifica se altura está vazio ou Not-an-Number 

    if(masculino){ // masculino == true
        var peso = 22 * Math.pow(altura, 2)
    } else {
        var peso = 21 * Math.pow(altura, 2)
    }

    outResposta.textContent = nome + "seu peso ideal é " + peso.toFixed(3) + " kg" // apresenta a resposta 
}
var btCalcular = document.getElementById("btCalcular")
btCalcular.addEventListener("click", calcularPeso)

function limparCampos(){
    location.reload() // recarrega a página 
    document.getElementById("inNome").focus() // posiciona o foco no elemento inNome 
}
var btLimpar = document.getElementById("btLimpar")
btLimpar.addEventListener("click", limparCampos)