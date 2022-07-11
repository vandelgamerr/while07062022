// Crea un programa que solicite al usuario números, si lo que este introduce es un número guardarlo en un arreglo. 
// Para terminar el capturar el usuario debe ingresar el número 0. Finalmente mostrar la lista de números 
// capturados en pantalla o en la consola.

// Declaracion de variables
var numero;
var contador = 1;
var array= new Array();

// Se recorre con un ciclo while hasta que el valor de numero sea 0
while (numero != 0) {
    // Se solicita numero al usuario
    numero = parseInt(prompt('Por favor introduce un numero'));
    // Se inserta el valor al arreglo
    array.push(numero);
}

// Se imprime el array
for (var i = 0; i < array.length; i++){
    console.log(array[i]);
    }