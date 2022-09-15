//3 Productos -> Mostrar prods -> Que prod quiere comprar? 
// Que cantidad? -> Hay stock disponible? -> Mostrar Precio total compra

let nombreProductoA = 'Mesa'
let precioProductoA = 100
let stockProductoA = 10

let nombreProductoB = 'Silla'
let precioProductoB = 10
let stockProductoB = 20

let nombreProductoC = 'Lampara'
let precioProductoC = 20
let stockProductoC = 50

let precioTotal = 0

//let compra = prompt("Ingrese SI si quiere comprar: " + nombreProductoA + " y " + nombreProductoB)

alert("Estos son nuestros productos: \n - Mesa\n - Silla\n - Lampara")

//Ciclo de compra con FOR

/* let cantidadCompra = prompt("Que cantidad de productos distintos quiere comprar:")

for(let i = 0; i < cantidadCompra; i = i + 1){

    let productoCompra = prompt("Ingrese que producto quiere comprar: \n - Mesa\n - Silla\n - Lampara")
    
    if(productoCompra.toUpperCase() == 'MESA'){
        let cantidadProductoMesa = prompt("ingrese que cantidad de " + nombreProductoA + " desea comprar:")
        if(cantidadProductoMesa <= stockProductoA){
            precioTotal = precioTotal + (cantidadProductoMesa * precioProductoA)
        }
        else{
            alert("Actualmente tenemos " + stockProductoA + " unidades de este producto")
        }
    }
    else if(productoCompra == 'Silla'){
        let cantidadProductoSilla = prompt("ingrese que cantidad de " + nombreProductoB + " desea comprar:")
        precioTotal = precioTotal + (cantidadProductoSilla * precioProductoB)
    }
    else if(productoCompra == 'Lampara'){
        let cantidadProductoLampara = prompt("ingrese que cantidad de " + nombreProductoC + " desea comprar:")
        precioTotal = precioTotal + (cantidadProductoLampara * precioProductoC)
    }
    else{
        alert("No tenemos ese producto a la venta")
    }

} 

if(precioTotal != 0){
    alert("El precio total es: " + precioTotal)
} */

//Ciclo de compra con WHILE

let opcion = prompt("Ingrese que es lo que quiere comprar o ESC para salir")

while(opcion != "ESC"){
    
    if(opcion.toUpperCase() == 'MESA'){
        let cantidadProductoMesa = prompt("ingrese que cantidad de " + nombreProductoA + " desea comprar:")
        if(cantidadProductoMesa <= stockProductoA){
            precioTotal = precioTotal + (cantidadProductoMesa * precioProductoA)
        }
        else{
            alert("Actualmente tenemos " + stockProductoA + " unidades de este producto")
        }
    }
    else if(opcion == 'Silla'){
        let cantidadProductoSilla = prompt("ingrese que cantidad de " + nombreProductoB + " desea comprar:")
        precioTotal = precioTotal + (cantidadProductoSilla * precioProductoB)
    }
    else if(opcion == 'Lampara'){
        let cantidadProductoLampara = prompt("ingrese que cantidad de " + nombreProductoC + " desea comprar:")
        precioTotal = precioTotal + (cantidadProductoLampara * precioProductoC)
    }
    else{
        alert("No tenemos ese producto a la venta")
    }
    opcion = prompt("Ingrese que producto quiere comprar: \n - Mesa\n - Silla\n - Lampara\n - ESC")
}

if(precioTotal != 0){
    alert("El precio total es: " + precioTotal)
}