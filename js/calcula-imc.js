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

    var pesoEhValido = validarPeso(peso);
    var alturaEhValida = validarAltura(altura);

    if (!pesoEhValido) {
        tbImc.textContent = "Peso inválido!";
        pesoEhValido = false;
        paciente.classList.add("paciente-invalido");
    }

    if (!alturaEhValida) {
        tbImc.textContent = "Altura inválida!";
        alturaEhValida = false;
        paciente.classList.add("paciente-invalido");
    }

    if (pesoEhValido && alturaEhValida) {
        var imc = calculaImc(peso,altura);
        tbImc.textContent = imc;
    }
}

function validarPeso(peso) {
    if (peso >= 0 && peso < 1000) {
        return true;
    } else {
        return false;
    }
}

function validarAltura(altura) {
    if (altura >= 0 && altura <= 3.00) {
        return true;
    } else {
        return false;
    }
}

function calculaImc(peso,altura) {
    var imc = 0;
    imc = peso / (altura * altura);
    return imc.toFixed(2);
}

