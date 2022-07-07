var input = document.querySelector("#search");

input.addEventListener("input",function(){
    var pacientes = document.querySelectorAll(".paciente");


    if(this.value.length > 0){
        for(var i= 0; i < pacientes.length; i++){
            var paciente = pacientes[i];
            var tdnombre = paciente.querySelector(".info-nombre");
            var nombre = tdnombre.textContent;
            var expresion = new RegExp(this.value, "i")
    
            if(!expresion.test(nombre)){
                paciente.classList.add("invisible");
            }else{
                paciente.classList.remove("invisible");
            }
        }        
    }else{
        for(var i= 0; i < pacientes.length; i++){
            var paciente = pacientes[i];
            paciente.classList.remove("invisible");
        }
    }
    
})