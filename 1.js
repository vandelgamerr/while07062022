
// Crea un programa que pregunte al usuario un número. Mostrar 
//los números que son múltiplos de 5 desde 1 hasta el número introducido por el usuario.

// Declaracion de variables
var numero = 0;
var contador = 1;

// Se solicita numero al usuario
numero = parseInt(prompt('Por favor introduce un numero'));


// Se recorre con un ciclo while
while (contador <= numero) {
    // Si es multiplo de 5 se imprime
    if (contador % 5 == 0){
        console.log(contador);
    }
// Se incrementa en 1 el contador
contador = contador +1;
}
