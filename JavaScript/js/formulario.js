var boton = document.querySelector("#adicionar-paciente");
boton.addEventListener("click",function(event){
    event.preventDefault();
    
    var formulario = document.querySelector("#formulario");
    var paciente = capturarDatos(formulario);
    adicionarPaciente(paciente);  
    var validacion = validarPaciente(paciente);
    if(validacion.length){
        mostrarMensaje(validacion);
        return;
    }
    
    formulario.reset();
    quitarMensaje();
})

function adicionarPaciente(paciente){
    var pacienteTr = construirTr(paciente);
    var tabla = document.querySelector("#tabla-pacientes");
    tabla.appendChild(pacienteTr);

}

function capturarDatos(formulario){

    var paciente = {
        nombre: formulario.nombre.value,
        peso: formulario.peso.value,
        altura: formulario.altura.value,
        gordura: formulario.gordura.value,
        imc: calcularIMC(formulario.peso.value,formulario.altura.value)
    }
    return paciente;
}

function construirTr(paciente){
    var pacienteTr = document.createElement("tr");
    pacienteTr.classList.add("paciente");
    
    pacienteTr.appendChild(construirTd(paciente.nombre, "info-nombre"));
    pacienteTr.appendChild(construirTd(paciente.peso, "info-peso"));
    pacienteTr.appendChild(construirTd(paciente.altura, "info-altura"));
    pacienteTr.appendChild(construirTd(paciente.gordura, "info-gordura"));
    pacienteTr.appendChild(construirTd(paciente.imc, "info-imc"));

    return pacienteTr;

}
function construirTd(dato, clase){
    var td = document.createElement("td");
    td.textContent = dato;
    td.classList.add(clase);
    return td;
}

function validarPaciente(paciente){
    var errores = [];
    if(paciente.nombre.length === 0){
        errores.push("ingrese su nombre");
    }
    if(paciente.peso.length === 0){
        errores.push("ingrese su peso");
    }
    if(paciente.altura.length === 0){
        errores.push("ingrese su altura");
    }
    if(paciente.gordura.length === 0){
        errores.push("ingrese su %gordura");
    }
    if(!validarPeso(paciente.peso)){
        errores.push("Peso incorrecto");
    }
    if(!validarAltura(paciente.altura)){
        errores.push("Altura incorrecta");
    }
    return errores;
}

function mostrarMensaje(errores){
    var ul = document.querySelector("#mensajes-errores");
    ul.innerHTML= "";
    errores.forEach(function(error){
        var li = document.createElement("li");
        li.textContent = error;
        ul.appendChild(li);
    });
}
function quitarMensaje(){
    var ul = document.querySelector("#mensajes-errores").innerHTML = "";
}