function verificarMulta(){
  var inVelPermitida = document.getElementById("inVelPermitida")
  var inVelCondutor = document.getElementById("inVelCondutor")
  var outSituacao = document.getElementById("outSituacao")

  var velPermitida = Number(inVelPermitida.value)
  var velCondutor = Number(inVelCondutor.value)
  var maisVinte = velPermitida * 1.20

  if(inVelPermitida.value == "" || isNaN(velPermitida) || 
  inVelCondutor.value == "" || isNaN(velCondutor)){
    alert("Informe a velocidade corretamente")
    inVelPermitida.focus()
    return
  }

  if(velCondutor <= velPermitida) {
    outSituacao.textContent = "Situação: Sem Multa"
  }
  if(velCondutor <= maisVinte){
      outSituacao.textContent = "Situação: Multa Leve"
    } else {
      outSituacao.textContent = "Situação: Multa Grave"
    }
  }
var btSituacao = document.getElementById("btSituacao")
btSituacao.addEventListener("click", verificarMulta)