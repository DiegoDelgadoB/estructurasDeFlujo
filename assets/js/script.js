// estructuras de control de flujo
// if - switch - for - while - do while
//símbolos de comparación: > < >= =< == != === !==

// if
// if (conditional o pruebaLógica){
// La (s) instruccion(es) que se ejecutar(án) cuando la condición se cumpla
//}

//console.log(5 == 5);

// if(5 == 5){
//     console.log('esto se ejecuta siempre y cuando la condición se cumpla')
// }

// console.log('esto se ejecuta después del if');

/* let personas = ['juan', 'diego', 'maria']
for (let i = 0; i < personas.length; i++) {
    if (i === personas.length - 1) {
        console.log(personas[i])
    }
}
 */


//prueba secuencial
/* console.log('1');
console.log('2');
console.log('3');
console.log('4');
console.log('5');
alert('esto es una pausa')
console.log('6');
console.log('7');
console.log('8');
console.log('9');
console.log('10');
console.log('11'); */

//Estructuras de control de flujo
// if - switch - for - while - do while
// símbolos de comparación: > < >= <= == != === !==

// if
// if (condicional o pruebaLógica), estas se trabajan con codigos booleanos
/* if (4 == 5) {
    console.log('Esto se ejecuta siempre y cuando la condición se cumpla');
}

console.log('Esto se ejecuta después del if');
 */

// Estructura de una prueba lógica: dato operadorComparación dato

// instrucción if
var datoUno = 5;
var datoDos = 5;
console.log(`verificando el valor de la prueba lógica: ${datoUno != datoDos}`);

if(datoUno > datoDos){
    console.log('esto se ejecuta siempre y cuando la condición se cumpla');
}

console.log('Esto se ejecuta después del if');

// instrucción if - else
// definir el color favorito de una persona entre dos opciones: verde y rojo
var colorFavorito = prompt('Ingresar tu  color favorito entre verde y rojo');
if(colorFavorito == 'verde'){
    console.log(`tu color favorito es: ${colorFavorito}`);
}else{
    console.log(`tu color favorito es: ${colorFavorito}`);
}

// instrucción if - if
// definir el color favorito de una persona entre tres opciones: verde, rojo y amarillo


