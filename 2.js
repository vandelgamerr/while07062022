// Crea un programa que solicite al usuario 2 números entre 1 y 50. Posteriormente mostrar en consola los números del 
// 1 hasta el 50, pero añadir el mensaje “¡Lotería!” solo al mostrar los números indicados por el usuario.

// Declaracion de variables
var numero1 = 0;
var numero2 = 0;
var contador = 1;

// Se solicita numero al usuario
numero1 = parseInt(prompt('Por favor introduce un numero'));
numero2 = parseInt(prompt('Por favor introduce un numero'));

// Se recorre con un ciclo while
while (contador <= 50) {
    // Si son numeros premiados agregar palabra !loteria¡, de lo contrario solo imprimirlo
    if (contador == numero1 || contador == numero2){
        console.log(contador + "  ¡Loteria!");
    }else{
        console.log(contador)
    }
// Se incrementa en 1 el contador
contador = contador +1;
}
