var pacientes = document.querySelectorAll(".paciente");

for(let i = 0; i < pacientes.length; i++){
    
    var paciente = pacientes[i];

    var tdPëso = paciente.querySelector(".info-peso");
    var peso = tdPëso.textContent;

    var tdEstatura = paciente.querySelector(".info-altura");
    var estatura = tdEstatura.textContent;

    
    var tdIMC = paciente.querySelector(".info-imc");

    var pesoEsValido = validarPeso(peso);
    var alturaEsValida = validarAltura(estatura);

    if(!pesoEsValido){
        pesoEsValido = false;
        tdIMC.textContent = "Peso Incorrecto";
        paciente.classList.add("paciente-incorrecto");
    }

    if(!alturaEsValida){
        alturaEsValida = false;
        tdIMC.textContent = "Altura Incorrecta";
        paciente.classList.add("paciente-incorrecto");
    }

    if(pesoEsValido && alturaEsValida){
        tdIMC.textContent = calcularIMC(peso,estatura);
    }

}

function calcularIMC(peso, estatura){
    if(peso === "" || estatura === ""){
        return;
    }
    var imc = peso / (estatura * estatura);
    return imc.toFixed(2);
}

function validarPeso(peso){
    if(peso >= 0 && peso < 300){
        return true;
    }else{
        return false;
    }
}

function validarAltura(altura){
    if(altura >= 0 && altura < 3.00){
        return true;
    }else{
        return false;
    }
}