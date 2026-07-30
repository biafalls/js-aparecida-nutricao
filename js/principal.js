var titulo = document.querySelector(".titulo");
titulo.textContent = "Aparecida Nutricionista";

var paciente = document.querySelector("#primeiro-paciente");
var tbPeso = paciente.querySelector(".info-peso");
var tbAltura = paciente.querySelector(".info-altura");
var tbImc = paciente.querySelector(".info-imc"); 

var peso = tbPeso.textContent;
var altura = tbAltura.textContent;

var pesoEhValido = true;
var alturaEhValida = true;

if (peso <= 0 || peso >= 1000) {
    tbImc.textContent = "Peso inválido!";
    pesoEhValido = false;
}

if (altura <= 0 || altura >= 1000) {
    tbImc.textContent = "Altura inválida!";
    alturaEhValida = false;
}

if (pesoEhValido && alturaEhValida) {
    var imc = peso / (altura * altura);
    tbImc.textContent = imc;
}





