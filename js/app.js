var estudiantes = [];

function obtenerListaEstudiantes() {
    // TO DO: Retornar la lista de estudiantes
    return estudiantes;
}

function agregarEstudiante() {
    // TO DO: Preguntar al usuario por el nombre, puntos técnicos y puntos de HSE de un estudiante
    // Hint: El estudiante debe ser agregado a la lista de estudiantes
    // TO DO: Retornar el estudiante recientemente creado

      var nombreEstudiante = (prompt("Nombre del estudiante:")).toLowerCase();
      var puntosTecnicos = parseInt(prompt("Puntos técnicos del estudiante:"));
      var puntosHse = parseInt(prompt("Puntos de HSE del estudiante:"));

      var estudiante = {
        "nombreEstudiante": nombreEstudiante,
        "puntosTecnicos": puntosTecnicos,
        "puntosHse": puntosHse
      };

      estudiantes.push(estudiante);
      return estudiante;
}

function mostrar(estudiante) {
    // TO DO: Completar el template para que muestre las propiedades correctas del estudiante
    var resultado = " ";
    resultado += "<div class='row'>";
    resultado += "<div class='col m12'>";
    resultado += "<div class='card blue-grey darken-1'>";
    resultado += "<div class='card-content white-text'>";
    resultado += "<p><strong>Nombre:</strong> " + estudiante.nombreEstudiante + "</p>";
    resultado += "<p><strong>Puntos Técnicos:</strong> " + estudiante.puntosTecnicos + "</p>";
    resultado += "<p><strong>Puntos HSE:</strong> " + estudiante.puntosHse + "</p>";
    resultado += "</div>";
    resultado += "</div>";
    resultado += "</div>";
    resultado += "</div>";
    return resultado;
}

function mostrarLista(estudiantes) {
    // TO DO: Iterar la lista del estudiantes para devolverlos en el formato que usa la función mostrar(estudiante)
    // Retornar el template de todos los estudiantes
    var listaEstudiantes = " ";
    for(var i = 0; i < estudiantes.length; i++){
      listaEstudiantes += mostrar(estudiantes[i]);
    }
    return listaEstudiantes;

    // var busquedaEstudiante = estudiantes.forEach(function(){
    //   listaEstudiantes += mostrar(estudiantes[i]);
    // }

    //No entiendo el forEach xDD
}

function buscar(nombre, estudiantes) {
    // TO DO: Buscar el nombre en la lista de estudiantes que se recibe por parámetros
    // Retornar el objeto del estudiante buscado
    // Nota: NO IMPORTA SI EL USUARIO ESCRIBE EL NOMBRE EN MAYÚSCULAS O MINÚSCULAS

    // var buaquedaEstudiante = [];
    // nombre = nombre.toLowerCase();
    // for( var i = 0; i < estudiantes.length; i++){
    //   if(estudiantes[i].nombre == nombre){
    //     buaquedaEstudiante.push(estudiantes[i]);
    //     return buaquedaEstudiante;
    //   };
    // };

    var busquedaEstudiante = estudiantes.filter(function(alumno){
      return alumno.nombreEstudiante.toLowerCase() == nombre(alumno);
    })

    return busquedaEstudiante;
}

function topTecnico(estudiantes) {
    // TO DO: Retornar el arreglo de estudiantes ordenado por puntaje técnico de mayor a menor
    var ordenarPuntosTec = estudiantes.sort(function(a,b){
      return b.puntosTecnicos > a.puntosTecnicos;
    })
    return ordenarPuntosTec;
}

function topHSE(estudiantes) {
    // TO DO: Retornar el arreglo de estudiantes ordenado por puntaje de HSE de mayor a menor
    var ordenarPuntosHse = estudiantes.sort(function(a,b){
      return b.puntosHse > a.puntosHse;
    })
    return ordenarPuntosHse;
}
