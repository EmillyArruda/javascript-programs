function ladosTriangulo(){
    var inLadoA = document.getElementById("inLadoA")
    var inLadoB = document.getElementById("inLadoB")
    var inLadoC = document.getElementById("inLadoC")
    var outSimNao = document.getElementById("outSimNao")
    var outTipo = document.getElementById("outTipo")

    var ladoA = Number(inLadoA.value)
    var ladoB = Number(inLadoB.value)
    var ladoC = Number(inLadoC.value)

    if(ladoA == 0 || ladoB == 0 || ladoC == 0 || isNaN(ladoA) || isNaN(ladoB) || isNaN(ladoC)){
        alert("Informe o valor do lado corretamente")
        ladoA.focus()
        return
    }

    if(ladoA > ladoB + ladoC || ladoB > ladoA + ladoC || ladoC > ladoA + ladoB) {
        outSimNao.textContent = "Lados não podem formar um triângulo"
    } else {
        outSimNao.textContent = "Lados podem formar um triângulo"
        if(ladoA == ladoB && ladoA == ladoC){
            outTipo.textContent = "Tipo: Equilátero"
        }
        if(ladoA == ladoB || ladoA == ladoC || ladoB == ladoC){
            outTipo.textContent = "Tipo: Isósceles"
        } else{
            outTipo.textContent = "Tipo: Escaleno"
        }
    }
}
var btVerificar = document.getElementById("btVerificar")
btVerificar.addEventListener("click", ladosTriangulo)