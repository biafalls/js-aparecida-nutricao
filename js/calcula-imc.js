var titulo = document.querySelector(".titulo");
titulo.textContent = "Aparecida Nutricionista";

var pacientes = document.querySelectorAll(".paciente");

for (var i =0 ; i < pacientes.length; i++) {
    var paciente = pacientes[i];

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
        paciente.classList.add("paciente-invalido");
    }

    if (altura <= 0 || altura >= 1000) {
        tbImc.textContent = "Altura inválida!";
        alturaEhValida = false;
        paciente.classList.add("paciente-invalido");
    }

    if (pesoEhValido && alturaEhValida) {
        var imc = calculaImc(peso,altura);
        tbImc.textContent = imc;
    }
}

function calculaImc(peso,altura) {
    var imc = 0;
    imc = peso / (altura * altura);
    return imc.toFixed(2);
}