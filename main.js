function seleccionarTodo() {
    // Obtenemos el elemento textarea
    var elemento = document.getElementById("mi-textarea");
      // Recorremos todas las opciones del select
  for (var i = 0; i < elemento.options.length; i++) {
    // Si la opción actual tiene el valor 'js', la seleccionamos
    if (elemento.options[i].value === "js") {
      elemento.options[i].selected = true;
    }
  }

    // Seleccionamos todo el texto dentro del elemento
    elemento.select();
  
} 

function seleccionarpython() {
    // Obtenemos el elemento textarea
    var elemento = document.getElementById("mi-python");
      // Recorremos todas las opciones del select
  for (var i = 0; i < elemento.options.length; i++) {
    // Si la opción actual tiene el valor 'js', la seleccionamos
    if (elemento.options[i].value === "js") {
      elemento.options[i].selected = true;
    }
  }

    // Seleccionamos todo el texto dentro del elemento
    elemento.select();
  
} 