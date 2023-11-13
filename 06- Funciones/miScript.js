//let miBloque = document.getElementById("miBloque")

// 1.- Escribe un script con, al menos, estos valores: 3, 3.5, “3”, "3.5", “7aaa”, “aaa7” y “hola”. Recorre el
// array y muestra por consola el resultado de aplicar las funciones parseInt, parseFloat, isNan, Number y
// String, a cada uno de los elementos del array. ¿Hay algún resultado que no esperabas?
function ejer1() {
    let arrayEjer1 = [3, 3.5, "3", "3.5", "7aaa", "aaa7", "hola"];
    for (let valor in arrayEjer1) {
        console.log("Indice: " + valor + " Valor: " + arrayEjer1[valor]);
        console.log("parseInt: " + parseInt(arrayEjer1[valor]));
        console.log("parseFloat: " + parseFloat(arrayEjer1[valor]));
        console.log("isNaN: " + isNaN(arrayEjer1[valor]));
        console.log("Number: " + Number(arrayEjer1[valor]));
        console.log("String: " + String(arrayEjer1[valor]));
    }
}

// 2.- Crea una función llamada "DibujarLinea3", que dibuje una línea con 3 asteriscos en la pantalla.
//let miBloque = document.getElementById("miBloque").innerHTML
function dibujarLinea3() {
    let miBloque = document.getElementById("miBloque");
    let node = document.createTextNode("***");
    miBloque.appendChild(node);

    miBloque.innerHTML += "<br>";
}

// 3.- Crea una función llamada "DibujarCuadrado3x3", que dibuje un cuadrado (en la pantalla) formado
// por 3 filas con 3 asteriscos cada una (esta función deberá llamar a la función creada en el ejercicio
// anterior).

function dibujarCuadrado3x3() {
    document.getElementById("miBloque").innerHTML = "";
    for (let i = 0; i < 3; i++) {
        dibujarLinea3();
    }
}

// 4.- Crea una función llamada "DibujarLinea", que dibuje una línea con X asteriscos (en la pantalla). La
// función tendrá un parámetro de entrada con el número de asteriscos a mostrar.

function dibujarLinea(num) {
    let miBloque = document.getElementById("miBloque");
    for (let i = 0; i < num; i++) {
        miBloque.innerHTML = miBloque.innerHTML + "*";
    }
    miBloque.innerHTML += "<br>";
}

// 5.- Crea una función llamada "DibujarCuadrado", que dibuje un cuadrado formado por X filas con X
// asteriscos cada una (esta función deberá llamar a la función creada en el ejercicio anterior).  El script
// pedirá al usuario el tamaño del cuadrado, y llamará a la función con ese dato.
function dibujarCuadrado(filas, columnas) {
    document.getElementById("miBloque").innerHTML = "";
    for (let i = 0; i < filas; i++) {
        dibujarLinea(columnas);
    }
}

// 6.- Crea una función "DibujarRectangulo" que dibuje en pantalla un rectángulo del ancho y alto que se
// indiquen como parámetros. El script pedirá al usuario el tamaño del rectángulo, y llamará a la función
// con ese dato.
function dibujarRectangulo(alto, ancho) {
    let miBloque = document.getElementById("miBloque").innerHTML;
    for (let i = 0; i < alto; i++) {
        for (let j = 0; j < ancho; j++) {
            miBloque.innerHTML += "*";
        }
        miBloque += "<br>";
    }
}
// 7.- Crea una función "Cubo" que devuelva el cubo de un número real que se indique como parámetro.
// La función tendrá que comprobar que el parámetro es un número (o que se pueda convertir a un
// número), en caso contrario, devolverá false.
// Prueba esta función para calcular el cubo de 3.2 y el de 5, y también prueba a pasarle “hola” como
// parámetro. ¿Qué ocurre?
function cubo(numero) {
    if (Number(numero)) {
        alert(Math.pow(parseInt(numero), 3));
    } else {
        alert("FALSE");
    }
}
// 8.- Crea una función "Menor" que devuelva el menor de dos números que recibirá como parámetros.
function menor(n1, n2) {
    let nMenor;
    if (n1 <= n2) {
        nMenor = n1;
    } else {
        nMenor = n2;
    }
    alert(nMenor);
}

// 9.- Crear 4 funciones: PideNumero, EsPositivo, CalculaMitad y HazTodo
// La función PideNumero, pedirá al usuario que introduzca un número y devuelve el número introducido.
function pideNumero() {
    return parseInt(prompt("Escribe un numero"));
}

// Las funciones EsPositivo y CalculaMitad, no imprimen nada en la consola, simplemente devuelven los
// valores correspondientes.
function esPositivo(num) {
    let esPositivo = "NEGATIVO";
    if (num >= 0) {
        esPositivo = "POSITIVO";
    }
    return esPositivo;
}

function calculaMitad(num) {
    return num / 2;
}
// La función HazTodo no tendrá ningún parámetro, llamará a las otras tres funciones y mostrará la
// siguiente información en la consola:
// ‘El número X es POSITIVO/NEGATIVO’
// ‘La mitad de X es Y’
function hazTodo() {
    numero = pideNumero();
    numPositivo = esPositivo(numero);
    mitadNumero = calculaMitad(numero);

    console.log("El numero " + numero + " es " + numPositivo);
    console.log("La mitad de " + numero + " es " + mitadNumero);
}
// Fuera de las funciones, solo habrá una llamada a la función HazTodo.

// 11.- Escribe una función que dado un string, devuelva un array con las palabras que forman el string.
// ¿Qué pasa si el string tiene 3 espacios en blanco seguidos? ¿Se puede solucionar?
function ejer11(cadenaOriginal) {
    let cadenas = cadenaOriginal.split(" ");
    for (let key in cadenas) {
        alert(cadenas[key]);
    }
}

// 12.- Escribe una función que se le pase un nombre completo (string) y devuelve el nombre abreviado
// (es decir, el nombre y la primera letra del primer apellido, seguido de un punto). Escribe también el
// código necesario para probarla.

function acortarNombre(nombreCompleto) {
    alert(nombreCompleto.split(" ")[0] + "" + nombreCompleto.split(" ")[1].charAt(0) + ".")

    
}


// 13.- Crea una función que oculte parte de una dirección de email. Por ejemplo, si se le pasa
// “1234567890@gmail.com”, devolverá “12345...@gmail.com”, es decir, sustituye la 2ª mitad del email
// (antes de la @) por “...”. Escribe también el código necesario para probarla.
function ocultarMail(mail) {
    let primeraMitad = mail.split("@")[0];
    let mitadLongPrimeraMitad = (mail.split("@")[0].length)/2;
    alert(primeraMitad);
    for (let i = 0; i < mitadLongPrimeraMitad; i++) {
                
    }
    
}

// 14.- Define una función que sustituya los espacios en blanco por un guión y, además, convierta todo el
// texto en minúsculas. Escribe también el código necesario para probarla.
function espaciosAGuionesYMinusculas(cadena) {
    alert(cadena.toLowerCase().replaceAll(" ", "-"));
}

// 15.- Escribe una función que reciba dos parámetros, string1 y string2, y que devuelva true si string1
// contiene a string2, o false en caso contrario.
function contieneSubcadena(string1, string2) {
    string1.indexOf(string2) >= 0 ? alert("TRUE") : alert("FALSE");
}

// 16.- Crea una función que genere un número aleatorio, entre dos valores dados. Utiliza esta función
// para simular el funcionamiento de un dado.
function dado(valor1, valor2) {
    let tam = num2 - num1
    let ini = 1
    let numeroAzar = (Math.random()*tam)+ini
    alert(Math.round(numeroAzar))
}

// 17.- Define una función que devuelva una cadena de texto con el día actual. Además, hay que pasarle
// el separador. Suponiendo que el separador es “-”, el formato de salida será “dd-mm-yyyy”
function todayString() {
    let fecha = new Date()
    alert(fecha.getDate() + "-" + (fecha.getMonth()+1) + "-" + fecha.getFullYear())
}

// 18.- En una empresa las facturas vencen a los 20 días. Crear una función que tendrá como parámetro
// una fecha con el formato 'dd-mm-YYYY' y devolverá la fecha de vencimiento (con el mismo formato).
// Hay que tener en cuenta que, si la fecha de vencimiento cae en fin de semana, habrá que mostrar la
// fecha del viernes anterior.

function vencimientoFacturas(fecha) {
    let dd = fecha.split("-")[0]
    let mm = fecha.split("-")[1] -1
    let yyyy = fecha.split("-")[2]

    let fechaActual = new Date(yyyy,mm,dd)
    
    fechaActual.setDate(fechaActual.getDate() + 20);
    if (fechaActual.getDay() == 0) {
        fechaActual.setDate(fechaActual.getDate() + 5 );
    } else if (fechaActual.getDay() == 6) {
        fechaActual.setDate(fechaActual.getDate() - 1 );
    }

    alert("La fecha de vencimiento es: " + fechaActual.getDate() + "-" + (fechaActual.getMonth() + 1) + "-" + fechaActual.getFullYear())
}

// 19.  Hacer  una  función  que  reciba  dos  parámetros  (mes  y  año).  Con  esos  datos  tiene  que  mostrar  la 
// siguiente información (por ejemplo, si le pasamos el mes de Octubre y el año 2020:

function fechasMeses(mm,yyyy) {
    let fecha = new Date(yyyy,(mm-1))
    //alert(fecha)
    //alert(fecha.getDate() + "-" + (fecha.getMonth()+1) + "-" + fecha.getFullYear())
    let dias = ["(DO)","(LU)","(MA)","(MI)","(JU)","(VI)","(SA)"]
    let diaSemana = fecha.getDay()

    for (let i = 1; i <= 5; i++) {
        document.write("<br> Semana: " + i + ": ")
        for (let j = 0; j < 6; j++) {
            document.write(i + dias[fecha.getDay()])
            fecha.setDate(fecha.getDate() + 1)
        }
    }
}