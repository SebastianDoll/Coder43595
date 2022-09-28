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

/* let precio = prompt("Ingrese un numero:")

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

console.log("Fin") */



/* for(let i = 0; i < 10; i = i + 1){
    
    if(i == 5){
        continue
    }

    console.log(i)
}

console.log("Este es el fin") */

/* let flag = true

while(flag){

    if(nombre != "Pedro"){
        flag = false
    }
} */

/* let entrada = prompt("1 - Cuentas\n2 - Cajero\n3- Contador\n ESC - Salir");

while(entrada != "ESC" ){
    alert("El usuario ingresó "+ entrada);
    //Volvemos a solicitar un dato. En la próxima iteración se evalúa si no es ESC.
    entrada = prompt("1 - Cuentas\n2 - Cajero\n3- Contador\n ESC - Salir");
   }
 */
/* let i = 0

do{
    console.log("¡Solo una vez!");
}
while(false) */

/* while(false){
    console.log("¡Solo una vez!");
} */

/* i = 1 --> i <= 10  --> true
alert("El numero es el: " + 1)
i = 2 --> i <= 10  --> true
alert("El numero es el: " + 2)
i = 3 --> i <= 10  --> true
alert("El numero es el: " + 3)
i = 11 --> i <= 10  --> false */


/* let numero1 = parseInt(prompt("ingrese un numero:"))

console.log(numero1)

let numero2 = parseInt(prompt("ingrese otro numero:"))

alert(numero1 + numero2) */

/* for(let i = 1; i <= 10; i++){
    let nombre = prompt("ingrese su nombre:")
    alert("Bienvenid@ " + nombre + " su turno es el N: " + i)
} */

/* function bienvenida(a, b){
    alert("Bienvenido " + a + " " + b)
    console.log(a)
}

bienvenida(5, 15)
bienvenida("Ana", "Perez")
bienvenida("Noah", "Zla") */

/* function suma(a, b){
   return a + b;
}

let resultado = suma(5, 10)
console.log(resultado) */
//let nombre = prompt("ingrese su nombre: ")

/* 

function calculadora(primerNumero, segundoNumero, operacion) {
    switch(operacion) {
        case "+":
            return primerNumero + segundoNumero;
            break;
        case "-":
            return primerNumero - segundoNumero;
            break;
        case "*":
            return primerNumero * segundoNumero;
            break;
        case "/":
            return primerNumero / segundoNumero;
            break;
        default:
            return 0;
            break;
    }
}

let numeroA = parseInt(prompt("Ingrese el numero:"))

let operacion = prompt("ingrese que operacion desea realizar:")

let numeroB = parseInt(prompt("Ingrese otro numero:"))

alert(calculadora(numeroA, numeroB, operacion)) */


//                  0   1       2
let listaNumeros = [15, 20, "Coder", 30]

console.log(listaNumeros.join(", "))
                

/* let nombre = prompt("Ingrese su nombre:")

listaNumeros.unshift(nombre) */

//let primerElemento = listaNumeros.shift()

/* let segundoElemento = listaNumeros[1]

console.log(segundoElemento) */

//console.log(listaNumeros.length)

/* for(let i = 0; i < listaNumeros.length; i++){
    console.log(listaNumeros[i])
} */