function seleccionarTodo() {
    // Obtenemos el elemento textarea
    var elemento = document.getElementById("mi-textarea a" );
    var elemento = document.getElementById("mi-textarea img" );

      // Recorremos todas las opciones del select
  for (var i = 0; i < elemento.options.length; i++) {
    // Si la opción actual tiene el valor 'js', la seleccionamos
    if (elemento.options[i].value === "todo") {
      elemento.options[i].selected = true;
    }
  }

    // Seleccionamos todo el texto dentro del elemento
    elemento.select();
  
} 

function seleccionarpython() {
    // Obtenemos el elemento textarea
    var elemento = document.getElementById("mi-python span");
      // Recorremos todas las opciones del select
  for (var i = 0; i < elemento.options.length; i++) {
    // Si la opción actual tiene el valor 'js', la seleccionamos
    if (elemento.options[i].value === "python") {
      elemento.options[i].selected = true;
    }
  }

    // Seleccionamos todo el texto dentro del elemento
    elemento.select();
  
} 