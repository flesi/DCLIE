let miBloque = document.getElementById("miBloque")

// 1.- Escribe un script con, al menos, estos valores: 3, 3.5, “3”, "3.5", “7aaa”, “aaa7” y “hola”. Recorre el 
// array y muestra por consola el resultado de aplicar las funciones parseInt, parseFloat, isNan, Number y 
// String, a cada uno de los elementos del array. ¿Hay algún resultado que no esperabas? 
function ejer1() {
    alert("Prueba")
}

// 2.- Crea una función llamada "DibujarLinea3", que dibuje una línea con 3 asteriscos en la pantalla.
//let miBloque = document.getElementById("miBloque").innerHTML
function dibujarLinea3() {
    let miBloque = document.getElementById("miBloque")
    console.log(miBloque.toString())
    miBloque.innerHTML += "***" + "<br>"
}
 
// 3.- Crea una función llamada "DibujarCuadrado3x3", que dibuje un cuadrado (en la pantalla) formado 
// por 3 filas con 3 asteriscos cada una (esta función deberá llamar a la función creada en el ejercicio 
// anterior). 

function dibujarCuadrado3x3(){
    let Bloque = document.getElementById("miBloque")
    Bloque.innerHTML=""
    for (let i = 0; i < 3; i++) {
        Bloque.innerHTML = Bloque.innerHTML + dibujarLinea3()
    }
}

 
// 4.- Crea una función llamada "DibujarLinea", que dibuje una línea con X asteriscos (en la pantalla). La 
// función tendrá un parámetro de entrada con el número de asteriscos a mostrar. 

function dibujarLinea(num) {
    let miBloque = document.getElementById("miBloque")
    for (let i = 0; i < num; i++) {
        miBloque.innerHTML = miBloque.innerHTML + "*"
    }
}

// 5.- Crea una función llamada "DibujarCuadrado", que dibuje un cuadrado formado por X filas con X 
// asteriscos cada una (esta función deberá llamar a la función creada en el ejercicio anterior).  El script 
// pedirá al usuario el tamaño del cuadrado, y llamará a la función con ese dato. 
 
// 6.- Crea una función "DibujarRectangulo" que dibuje en pantalla un rectángulo del ancho y alto que se 
// indiquen como parámetros. El script pedirá al usuario el tamaño del rectángulo, y llamará a la función 
// con ese dato. 
 
// 7.- Crea una función "Cubo" que devuelva el cubo de un número real que se indique como parámetro. 
// La función tendrá que comprobar que el parámetro es un número (o que se pueda convertir a un 
// número), en caso contrario, devolverá false.  
// Prueba esta función para calcular el cubo de 3.2 y el de 5, y también prueba a pasarle “hola” como 
// parámetro. ¿Qué ocurre? 
 
// 8.- Crea una función "Menor" que devuelva el menor de dos números que recibirá como parámetros.
function menor(n1, n2) {
    let nMenor
    if (n1<=n2) {
        nMenor = n1
    } else {
        nMenor = n2
    }
    alert(nMenor)
}

// 9.- Crear 4 funciones: PideNumero, EsPositivo, CalculaMitad y HazTodo 
// La función PideNumero, pedirá al usuario que introduzca un número y devuelve el número introducido. 
function pideNumero() {
    return parseInt(prompt('Escribe un numero'))
 }
// Las funciones EsPositivo y CalculaMitad, no imprimen nada en la consola, simplemente devuelven los 
// valores correspondientes. 
function esPositivo(num) {
    let esPositivo = "NEGATIVO"
    if (num>=0) {
        esPositivo = "POSITIVO"
    } 
    return esPositivo
}
function calculaMitad(num) {
    return num / 2
}
// La función HazTodo no tendrá ningún parámetro, llamará a las otras tres funciones y mostrará la 
// siguiente información en la consola:
// ‘El número X es POSITIVO/NEGATIVO’ 
// ‘La mitad de X es Y’  
 function hazTodo() {
    numero = pideNumero()
    numPositivo = esPositivo(numero)
    mitadNumero = calculaMitad(numero)

    console.log("El numero " + numero + " es " + numPositivo)
    console.log("La mitad de " + numero + " es " + mitadNumero)
 }
// Fuera de las funciones, solo habrá una llamada a la función HazTodo.

// 11.- Escribe una función que dado un string, devuelva un array con las palabras que forman el string. 
// ¿Qué pasa si el string tiene 3 espacios en blanco seguidos? ¿Se puede solucionar?
function ejer11(cadenaOriginal) {
    cadenas = cadenaOriginal.split(" ")
    
}
 
// 12.- Escribe una función que se le pase un nombre completo (string) y devuelve el nombre abreviado 
// (es decir, el nombre y la primera letra del primer apellido, seguido de un punto). Escribe también el 
// código necesario para probarla. 
 
// 13.- Crea una función que oculte parte de una dirección de email. Por ejemplo, si se le pasa 
// “1234567890@gmail.com”, devolverá “12345...@gmail.com”, es decir, sustituye la 2ª mitad del email 
// (antes de la @) por “...”. Escribe también el código necesario para probarla. 
 
// 14.- Define una función que sustituya los espacios en blanco por un guión y, además, convierta todo el 
// texto en minúsculas. Escribe también el código necesario para probarla. 
 
// 15.- Escribe una función que reciba dos parámetros, string1 y string2, y que devuelva true si string1 
// contiene a string2, o false en caso contrario. 
 
// 16.- Crea una función que genere un número aleatorio, entre dos valores dados. Utiliza esta función 
// para simular el funcionamiento de un dado. 
 
// 17.- Define una función que devuelva una cadena de texto con el día actual. Además, hay que pasarle 
// el separador. Suponiendo que el separador es “-”, el formato de salida será “dd-mm-yyyy” 
 
// 18.- En una empresa las facturas vencen a los 20 días. Crear una función que tendrá como parámetro 
// una fecha con el formato 'dd-mm-YYYY' y devolverá la fecha de vencimiento (con el mismo formato). 
// Hay que tener en cuenta que, si la fecha de vencimiento cae en fin de semana, habrá que mostrar la 
// fecha del viernes anterior.