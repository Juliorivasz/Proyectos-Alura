var tabla = document.querySelector("#tabla-pacientes");

tabla.addEventListener('dblclick',function(event){  
    event.target.parentNode.classList.add("eliminar-paciente");
    setTimeout(() => {
        event.target.parentNode.remove();
    }, 500);
});