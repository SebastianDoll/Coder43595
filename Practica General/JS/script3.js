function Producto(nombre, precio, stock, cat){
    this.nombre = nombre;
    this.precio = precio;
    this.stock = stock || 0;
    this.cat = cat
    this.restarStock = function(cantidad){
        this.stock -= cantidad
    }
    this.sumarStock = function(cantidad){
        this.stock += cantidad
    }
}

let productoA = new Producto("Mesa", 100, 20, "madera")
let productoB = new Producto("Silla", 10, 10, "madera")
let productoC = new Producto("Lampara", 20, "metal")
let productoD = new Producto("Piano", 20, 5, "plastico")
let productoE = new Producto("Armario", 20, 20, "plastico")
let productoF = new Producto("TV", 20, 10, "madera")

let listaProductos = [productoA, productoB, productoC, productoD, productoE, productoF]

let listaProductosConStock = listaProductos.filter((prod) => prod.stock > 0)

let listaProductosConStockMasProximosProductos = [...listaProductosConStock, productoNuevo, prodMasNuevo]

let listaNombres = listaProductosConStock.map((prod) => prod.nombre)

let precioTotal = 0

let catalogo = document.getElementById("catalogo")

function render(lista) {
    catalogo.innerHTML = ""

    for(const prod of lista){

        let card = document.createElement("div")

        card.className = "card"

        card.innerHTML = `<h2 class="titulo">${prod.nombre}</h2><p>Precio: $${prod.precio}</p><button>Comprame!</button>`

        catalogo.append(card)
    }
}
render(listaProductosConStock)

let categoriaElegida = ''

let categoria = document.getElementById("categoria")
categoria.addEventListener("change", ()=>{categoriaElegida = categoria.value})

let botonFiltrado = document.getElementById("filtrar")
botonFiltrado.addEventListener("click", filtrado)


function filtrado(){
    let filtroActual = listaProductos.filter((prod)=>prod.cat == categoriaElegida)
    filtroActual.length == 0 && console.log("Esa categoria no existe")

    render(filtroActual)
}

let botonTodos = document.getElementById("todos")

botonTodos.addEventListener("click", ()=>{render(listaProductosConStock)})


alert("Estos son nuestros productos: \n - " + listaNombres.join("\n - "))

function calculoPrecio(cantidad, precio){
    precioTotal += (cantidad * precio)
    
}

function calculoStock(cantidad, { stock, precio, nombre }){

    /* let { stock, precio, nombre } = producto */
    cantidad <= stock ? calculoPrecio(cantidad, precio) : alert("Actualmente tenemos " + stock + " unidades del producto " + nombre )
}

let cantidadCompra = parseInt(prompt("Que cantidad de productos distintos quiere comprar:")) || 0

for(let i = 0; i < cantidadCompra; i = i + 1){

    let productoCompra = prompt("Ingrese que producto quiere comprar: \n - Mesa\n - Silla\n - Lampara")
    
    if(productoCompra.toUpperCase() == 'MESA'){
        let cantidadProductoMesa = prompt("ingrese que cantidad de " + productoA.nombre + " desea comprar:") || 1
        calculoStock(cantidadProductoMesa, productoA)
        productoA.restarStock(cantidadProductoMesa)
    }
    else if(productoCompra == 'Silla'){
        let cantidadProductoSilla = parseInt(prompt("ingrese que cantidad de " + productoB.nombre + " desea comprar:")) || 1
        calculoStock(cantidadProductoSilla, productoB)
        productoB.restarStock(cantidadProductoSilla)
    }
    else if(productoCompra == 'Lampara'){
        let cantidadProductoLampara = prompt("ingrese que cantidad de " + productoC.nombre + " desea comprar:")
        calculoStock(cantidadProductoLampara, productoC)
        productoC.restarStock(cantidadProductoLampara)
    }
    else{
        alert("No tenemos ese producto a la venta")
    }

} 

precioTotal != 0 ? alert("El precio total es: " + precioTotal) : alert("Gracias por su visita!")