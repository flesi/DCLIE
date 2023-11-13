/*Para comprobar que entienden correctamente el uso del FOR:
Teniendo un vector de 7 elementos(créalo tú), recorrerlo y a los elementos que estén
en el índice del array par hay que sumarles la posición que ocupa en
el vector. Hacer las modificaciones dentro del propio vector.
Una vez modificado el vector con las sumas indicadas según corresponda,
recorrer el vector y concatener los campos del vector con una "/" después
de cada elemento y cuando todos los elementos estén concatenados en una
cadena, mostrar el resultado por pantalla
*/
function ejecutarFor() {
    let vect = [0,3,1,5,6,4,7]

    let tamañoVector = vect.length

    for (let i = 0; i < tamañoVector; i++) {
        vect[i]=vect[i]+i
    }

    let cadenaVect = "";

    // for (let i = 0; i < tamañoVector; i++) {
    //     cadenaVect += vect[i] + "/"            
    // }

    cadenaVect = vect.join("/")
    alert(cadenaVect)
}