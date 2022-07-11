// Crea un programa que solicite al usuario un día de la semana (ej: lunes, jueves, domingo, etc). 
// El programa mostrará un mensaje personalizado para cada día de la semana por medio de un alert. 
// Y seguirá pidiendo al usuario introducir otro día. En caso de que el día introducido sea domingo mostrar 
// al usuario el mensaje “Ve a descansar” y terminar la captura de información.

// Declaracion de variables
var diaSemana;

// Se recorre con un ciclo while hasta que el dia sea domingo
while (diaSemana != 'domingo') {
    // Se solicita dia de la semana
    diaSemana = prompt('Por favor introduce un dia de la semana').toString().trim().toLowerCase();
    // Seevalua el dato introducido
    switch (diaSemana) {
        case 'lunes':
          alert("Es lunes");
          break;
        case 'martes':
          alert("Es martes");
          break;
        case 'miercoles':
          alert("Es miercoles");
          break;
        case 'jueves':
          alert("Es jueves");
          break;
        case 'viernes':
          alert("Es viernes");
          break;
        case 'sabado':
          alert("Es sabado");
          break;
        case 'domingo':
          alert("Ve a descansar");
          break;
        default:
          alert("Dato invalido");
          break;
      }
    }
