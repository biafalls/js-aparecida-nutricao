var botaoBuscar = document.querySelector("#buscar-pacientes");

botaoBuscar.addEventListener("click", function() {
    var xhr = new XMLHttpRequest();

    xhr.open("GET", "https://raw.githubusercontent.com/loresgarcia/Pacientes-API/master/pacientes.json");

    xhr.addEventListener("load", function() {
        var erroAjax = document.querySelector("#erro-ajax");

        if (xhr.status == 200){
            erroAjax.classList.add("invisivel");
            var resposta = xhr.responseText;
            console.log(resposta);
            console.log(typeof resposta);

            var pacientes = JSON.parse(resposta);
            console.log(pacientes);
            console.log(typeof pacientes);

            for(var i = 0; i < pacientes.length; i++) {
                adicionarPacienteNaTabela(pacientes[i]);
            }
        } else {
            console.log(xhr.status);
            console.log(xhr.responseText);
        
            erroAjax.classList.remove("invisivel");
        }
        
    });

    xhr.send();
});