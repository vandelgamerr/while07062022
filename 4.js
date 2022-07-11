// Crea un programa que solicite al usuario letras o palabras, si es así guardar el resultado. 
// Para terminar de capturar el usuario no debe escribir valor alguno. Al terminar de capturar, 
// mostrar en pantalla la concatenación de todas las palabras capturadas.

// Declaracion de variables
var palabra;
var frase = '';
var contador = 1;

// Se recorre con un ciclo while hasta que no tenga ninguna palabra
while (palabra != '') {
    // Se solicita letra o palabra,letra o numero como texto
    palabra = prompt('Por favor introduce una palabra, letra o caracter').toString().trim();
    // Se concatena
    frase = frase + palabra;
}

// Se imprime la frase concatenda
    console.log(frase);
  