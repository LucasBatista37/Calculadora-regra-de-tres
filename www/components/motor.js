function calcularregrade3(){
var primeirovalor, segundovalor, terceirovalor, resultado

primeirovalor = document.getElementById('1valor').value
segundovalor = document.getElementById('2valor').value
terceirovalor = document.getElementById('3valor').value

resultado = (segundovalor * terceirovalor) / primeirovalor

document.getElementById('result').textContent = resultado

document.getElementById("resultado").value = resultado;

    var tabela = document.getElementById("historico");
    var novaLinha = document.createElement("tr");
    novaLinha.innerHTML = "<td>" + primeirovalor + "</td><td>" + segundovalor + "</td><td>" + terceirovalor + "</td><td>" + resultado + "</td>";

    tabela.appendChild(novaLinha);
}
