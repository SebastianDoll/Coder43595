// Este es mi archivo JS

/* 
Comentario de bloque
Comentario de bloque 2 
*/

//var

//case sensitive

// camel case

let nombreProducto

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

console.log(num3)

/* alert("Bienvenido!")

let numeroIngresado = prompt("Ingrese un numero:") */

//console.log(numeroIngresado)


//2 Productos -> Mostrar prods -> Compra? 
// Que cantidad? -> Mostrar Precio total compra

let nombreProductoA = 'Mesa'
let precioProductoA = 100

let nombreProductoB = 'Silla'
let precioProductoB = 10

alert("Acepte si quiere comprar: " + nombreProductoA + " y " + nombreProductoB)

let cantidadProductoA = prompt("ingrese que cantidad de " + nombreProductoA + " desea comprar:")
let cantidadProductoB = prompt("ingrese que cantidad de " + nombreProductoB + " desea comprar:")

let precioTotalA = cantidadProductoA * precioProductoA
let precioTotalB = cantidadProductoB * precioProductoB

let precioTotal = precioTotalA + precioTotalB

alert("El precio total es: " + precioTotal) 