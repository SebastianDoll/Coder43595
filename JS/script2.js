//3 Productos -> Mostrar prods -> Que prod quiere comprar? 
// Que cantidad? -> Hay stock disponible? -> Mostrar Precio total compra

/* let nombreProductoA = 'Mesa'
let precioProductoA = 100
let stockProductoA = 10 */

/* let productoA = {
    nombre: "Mesa",
    precio: 100,
    stock: 10
} */

function Producto(nombre, precio, stock){
    this.nombre = nombre;
    this.precio = precio;
    this.stock = stock || 0;
    this.restarStock = function(cantidad){
        this.stock -= cantidad
    }
    this.sumarStock = function(cantidad){
        this.stock += cantidad
    }
}

/* class Producto{
    constructor(nombre, precio){
        this.nombre = nombre;
        this.precio = precio;
        this.stock = 0;
    }
    restarStock(cantidad){
        this.stock -= cantidad
    }
} */

let productoA = new Producto("Mesa", 100, 20)
let productoB = new Producto("Silla", 10, 10)
let productoC = new Producto("Lampara", 20)
let productoD = new Producto("Piano", 20, 5)
let productoE = new Producto("Armario", 20, 20)
let productoF = new Producto("TV", 20, 10)

let listaProductos = [productoA, productoB, productoC, productoD, productoE, productoF]

let listaProductosConStock = listaProductos.filter((prod) => prod.stock > 0)

let listaNombres = listaProductosConStock.map((prod) => prod.nombre)


/* for(const prod of listaProductos){
    if(prod.stock > 0){
        listaNombres.push(prod.nombre)
    }
} */

//console.log(productoC.stock)

/* for(const x in productoA){
    console.log(productoA[x])
} */


/* let nombreProductoB = 'Silla'
let precioProductoB = 10
let stockProductoB = 20 */

/* let nombreProductoC = 'Lampara'
let precioProductoC = 20
let stockProductoC = 50 */

let precioTotal = 0

//let compra = prompt("Ingrese SI si quiere comprar: " + nombreProductoA + " y " + nombreProductoB)

alert("Estos son nuestros productos: \n - " + listaNombres.join("\n - "))

//Ciclo de compra con FOR

function calculoPrecio(cantidad, precio){
    precioTotal += (cantidad * precio)
}

function calculoStock(cantidad, stock, precio){
    if(cantidad <= stock){
        calculoPrecio(cantidad, precio)
    }
    else{
        alert("Actualmente tenemos " + stock + " unidades de este producto")
    }
}



let cantidadCompra = parseInt(prompt("Que cantidad de productos distintos quiere comprar:"))

for(let i = 0; i < cantidadCompra; i = i + 1){

    let productoCompra = prompt("Ingrese que producto quiere comprar: \n - Mesa\n - Silla\n - Lampara")
    
    if(productoCompra.toUpperCase() == 'MESA'){
        let cantidadProductoMesa = prompt("ingrese que cantidad de " + productoA.nombre + " desea comprar:")
        calculoStock(cantidadProductoMesa, productoA.stock, productoA["precio"])
        productoA.restarStock(cantidadProductoMesa)
    }
    else if(productoCompra == 'Silla'){
        let cantidadProductoSilla = prompt("ingrese que cantidad de " + productoB.nombre + " desea comprar:")
        calculoStock(cantidadProductoSilla, productoB.stock, precioProductoB)
        productoB.restarStock(cantidadProductoSilla)
    }
    else if(productoCompra == 'Lampara'){
        let cantidadProductoLampara = prompt("ingrese que cantidad de " + productoC.nombre + " desea comprar:")
        calculoStock(cantidadProductoLampara, stockProductoC, precioProductoC)
        productoC.restarStock(cantidadProductoLampara)
    }
    else{
        alert("No tenemos ese producto a la venta")
    }

} 

if(precioTotal != 0){
    alert("El precio total es: " + precioTotal)
}
else{
    alert("Gracias por su visita!")
}

//Ciclo de compra con WHILE

/* let opcion = prompt("Ingrese que es lo que quiere comprar o ESC para salir")

while(opcion != "ESC"){
    
    if(opcion.toUpperCase() == 'MESA'){
        let cantidadProductoMesa = parseInt(prompt("ingrese que cantidad de " + nombreProductoA + " desea comprar:"))
        if(cantidadProductoMesa <= stockProductoA){
            precioTotal = precioTotal + (cantidadProductoMesa * precioProductoA)
        }
        else{
            alert("Actualmente tenemos " + stockProductoA + " unidades de este producto")
        }
    }
    else if(opcion == 'Silla'){
        let cantidadProductoSilla = parseInt(prompt("ingrese que cantidad de " + nombreProductoB + " desea comprar:"))
        if(cantidadProductoSilla <= stockProductoB){
            precioTotal = precioTotal + (cantidadProductoSilla * precioProductoB)
        }
        else{
            alert("Actualmente tenemos " + stockProductoB + " unidades de este producto")
        }
    }
    else if(opcion == 'Lampara'){
        let cantidadProductoLampara = parseInt(prompt("ingrese que cantidad de " + nombreProductoC + " desea comprar:"))
        if(cantidadProductoLampara <= stockProductoC){
            precioTotal = precioTotal + (cantidadProductoLampara * precioProductoC)
        }
        else{
            alert("Actualmente tenemos " + stockProductoC + " unidades de este producto")
        }
    }
    else{
        alert("No tenemos ese producto a la venta")
    }
    opcion = prompt("Ingrese que producto quiere comprar: \n - Mesa\n - Silla\n - Lampara\n - ESC")
}

if(precioTotal != 0){
    alert("El precio total es: " + precioTotal)
}
else{
    alert("Gracias por su visita!")
} */