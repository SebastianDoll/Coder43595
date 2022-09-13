// Este es mi archivo JS

/* 
Comentario de bloque
Comentario de bloque 2 
*/

//var

//case sensitive

// camel case

/* let nombreProducto

let year

nombreProducto = "Mesa"
//string
year = 2022

const altura = 1.79

let numeroA = 5
let numeroB = 10

let resultado = numeroA * numeroB
let resultado2 = numeroA + numeroB

console.log("Este es el resultado de la mult:", resultado)
console.log("Este es el resultado de la suma:", resultado2)

let texto = 'Hola'
let texto2 = "mundo"
let espacio = " "

let texto3 = texto + espacio + texto2

console.log(texto3)

let union = numeroA + texto

console.log(union)

let num1 = "texto"
let num2 = 3

let num3 = num1 - num2

console.log(num3) */

/* alert("Bienvenido!")

let numeroIngresado = prompt("Ingrese un numero:") */

//console.log(numeroIngresado)

/* let verdadero = true
let esFalso = false */

/* let numero = prompt("Ingrese un numero:")

if(numero > 5){
    console.log("El numero es mayor")
}

console.log("Este es el final") */


/* let texto = prompt("Ingrese SI para comprar \nIngrese NO para salir")

if(texto == "SI"){
    alert("Gracias por su respuesta")
}
else{
    alert("Gracias vuelva prontos")
} */

let precio = prompt("Ingrese un numero:")

if (precio < 100) { // 0 - 99
 alert("El precio es menor que 100");
}
else if (precio < 50) { // 20 - 49
 alert("El precio es menor que 50");
}
else if (precio < 20) { // 0 - 19
    alert("El precio es menor que 20");
   }
else { 
 alert("El precio es mayor que 100");
}

console.log("Fin")