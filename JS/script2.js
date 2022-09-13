//2 Productos -> Mostrar prods -> Compra? 
// Que cantidad? -> Mostrar Precio total compra

let nombreProductoA = 'Mesa'
let precioProductoA = 100
let stockProductoA = 10

let nombreProductoB = 'Silla'
let precioProductoB = 10
let stockProductoB = 20

let nombreProductoC = 'Lampara'
let precioProductoC = 20
let stockProductoC = 50

//let compra = prompt("Ingrese SI si quiere comprar: " + nombreProductoA + " y " + nombreProductoB)

let productoCompra = prompt("Ingrese que producto quiere comprar: \n - Mesa\n - Silla\n - Lampara")
let precioTotal = 0

if(productoCompra.toUpperCase() == 'MESA'){
    let cantidadProductoMesa = prompt("ingrese que cantidad de " + nombreProductoA + " desea comprar:")
    if(cantidadProductoMesa <= stockProductoA){
        precioTotal = cantidadProductoMesa * precioProductoA
    }
    else{
        alert("Actualmente tenemos " + stockProductoA + " unidades de este producto")
    }
}
else if(productoCompra == 'Silla'){
    let cantidadProductoSilla = prompt("ingrese que cantidad de " + nombreProductoB + " desea comprar:")
    precioTotal = cantidadProductoSilla * precioProductoB
}
else if(productoCompra == 'Lampara'){
    let cantidadProductoLampara = prompt("ingrese que cantidad de " + nombreProductoC + " desea comprar:")
    precioTotal = cantidadProductoLampara * precioProductoC
}
else{
    alert("No tenemos ese producto a la venta")
}

if(precioTotal != 0){
    alert("El precio total es: " + precioTotal)
}
/* if(compra == "SI"){
    let cantidadProductoA = prompt("ingrese que cantidad de " + nombreProductoA + " desea comprar:")
    let cantidadProductoB = prompt("ingrese que cantidad de " + nombreProductoB + " desea comprar:")

    let precioTotalA = cantidadProductoA * precioProductoA
    let precioTotalB = cantidadProductoB * precioProductoB

    let precioTotal = precioTotalA + precioTotalB

    alert("El precio total es: " + precioTotal)
} 
else{
    alert("Gracias por su visita")
} */
