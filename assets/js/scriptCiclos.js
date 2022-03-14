//Estructuras de control de flujo
// if - switch - for - while - do while
// símbolos de comparación: > < >= <= == != === !==


// for
// solicitar por pantalla 10 nombres e imprímelos en consola
// También podemos solicitar los nombres que el usuario necesita.
/* var hasta = prompt('¿Cuántos nombres necesitas?'); */
/* for( *//*inicio*//* var i = 0 ; */ /*hasta*//* i < 10 ; */ /*de cuanto en cuanto*//* i = i + 1) { */
/*     var nombre = prompt('Ingresa tu nombre');
    console.log(nombre);
} */
// El código anterior pide 10 nombres.

// contadores y acumuladores
// contador = contador + 1;
// Este contador puede ser de 1 en 1, de 2 o en 2 o como se requiera.
// acumulador = acumulador + dato;

// while
// solicita por pantalla N nombre e imprímelos en consola, el usuario dira stop
// para cuando quiera dejar de ingresar nombres.
// ejemplo caja de supermercado.
// while (condicional o prueba lógica){
//  instrucciones a ejecutar y repetirse mientras la condición se cumpla.
//}
/* var estado = prompt('Ingrese "stop" si quiere salir');
while(estado != 'stop'){ */
/*      var nombre = prompt('Ingresa tu nombre');
     console.log(nombre); */
/*      console.log('infinito!!!!');
} */

// Esta función (while) se va a detener cuando se ingrese stop
var estado = prompt('Ingrese "stop" si quiere salir');
while(estado != 'stop'){
    var nombre = prompt('Ingresa tu nombre');
    console.log(nombre);
    estado = prompt('Ingrese "stop" si quiere salir');
}





