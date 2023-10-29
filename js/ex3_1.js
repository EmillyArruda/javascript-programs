function calccularMedia(){
//Referência aos elementos da página
   var inNome = document.getElementById("inNome")
   var inNota1 = document.getElementById("inNota1")
   var inNota2 = document.getElementById("inNota2")
   var outSituação = document.getElementById("outSituação")
   var outMedia = document.getElementById("outMedia")
// pega os valores dos campos de entrada 
   var nome = inNome.value
   var nota1 = Number(inNota1.value)
   var nota2 = Number(inNota2.value)

   var media = (nota1+nota2)/2 // cálcula a média

   outMedia.textContent = "Média das Notas: " + media.toFixed(1) // mostra na tela a média 
// cria as condições
   if(media >= 7){
    outSituação.textContent = "Parabéns " + nome + "! Você foi aprovado(a)"
    outSituação.style.color = "blue"
   } else if(media >= 4){
    outSituação.textContent = "Atenção! " + nome + " parece que você vai fazer recuperação"
    outSituação.style.color = "purple"
   } else{
    outSituação.textContent = "Opa! " + nome + "parece que você está reprovado!"
    outSituação.style.color = "red"
   }
}
//referencia ao botão
var btResultado = document.getElementById("btResultado")
btResultado.addEventListener("click", calccularMedia) // evento relacionado ao botão para chamar a função
