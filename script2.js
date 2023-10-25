class Producto{
    constructor(id, nombre, precio, stock){
        this.id=id;
        this.nombre=nombre;
        this.precio=precio;
        this.stock=stock;
        this.disponible=true;
    }
    restaStock(){
        this.stock=this.stock - 1;
        console.log(`Actualizamos la cantidad de ${this.nombre} en el almacen`)    
    }
}

const producto0 = new Producto(0, "CREATINA STARNUTRITION", 17500, 4);
const producto1 = new Producto(1, "WHEY PROTEIN STARNUTRITION", 9500, 20);
const producto2 = new Producto(2, "PRE ENTRENO CELLUCOR C4", 3400, 3);
const producto3 = new Producto(3, "CREATINA ON", 20000, 3);

const stockProductos = [producto0, producto1, producto2, producto3]
const carrito = []
let catalogo = `Buenas tardes, este es el catalogo de SUPLEMENTSPORTS. \n `

// EJECUCIÓN DEL PROGRAMA
alert("Bienvenido a SuplementSports")
alert("Ingrese sus datos personales")

let nombre = prompt("Ingrese su nombre")

while (nombre == ""){
    alert("Recuerde ingresar los datos para proceder")
    nombre = prompt("Ingrese su nombre")
}

alert("Hola " +nombre+ " presione aceptar para proceder a la selección de servicios")

function accionCarrito(){
    for (item of stockProductos) {
        catalogo += `\n ${item.id} - ${item.nombre} a $ ${item.precio} por cantidad. \n`  
    }
    
    catalogo += `\n Ingrese el numero de item del producto que desea agregar al carrito. Si desea dar por finalizada su compra digite 9 \n`
    
    let respuesta = prompt(catalogo)
    while(respuesta === "9"){
        break;
    }
    while(respuesta != "9"){  
        switch(respuesta){
            case 0:
                if (stockProductos[0].stock <= 2){
                    console.log(`Actualmente este producto se encuentra fuera del stock permitido para ser vendido`)
                }else{
                    carrito.push(stockProductos[0])
                    alert(`Agregamos al carrito el producto ${stockProductos[0].nombre}`)
                    stockProductos[0].restaStock()
                    break;  
                }
            case 1:
                if (stockProductos[1].stock <= 2){
                    console.log(`Actualmente este producto se encuentra fuera del stock permitido para ser vendido`)
                }else{
                    carrito.push(stockProductos[1])
                    alert(`Agregamos al carrito el producto ${stockProductos[1].nombre}`)
                    stockProductos[1].restaStock()
                    break;  
                }
            case 2:
                if (stockProductos[2].stock <= 2){
                    console.log(`Actualmente este producto se encuentra fuera del stock permitido para ser vendido`)
                }else{
                    carrito.push(stockProductos[2])
                    alert(`Agregamos al carrito el producto ${stockProductos[2].nombre}`)
                    stockProductos[2].restaStock()
                    break;  
                }
            case 3:
                if (stockProductos[3].stock <= 2){
                    console.log(`Actualmente este producto se encuentra fuera del stock permitido para ser vendido`)
                }else{
                    carrito.push(stockProductos[3])
                    alert(`Agregamos al carrito el producto ${stockProductos[3].nombre}`)
                    stockProductos[3].restaStock()
                    break;  
                }
            default:
                alert("Actualmente ese producto se encuentra fuera del catalogo")
                break
        }
        respuesta = parseInt(prompt(catalogo))
    }
    alert("Su compra fue procedida con exito!")
    mostrarCarrito()
}
let productosCarrito = "Vas a llevar: \n"
let precioCarrito = 0

function mostrarCarrito(){
    for (itemCarrito of carrito) {
        productosCarrito += ` \n - ${itemCarrito.nombre}`
        precioCarrito += itemCarrito.precio
    }
    alert(`Llevaras: \n ${productosCarrito} \n por un total de ${precioCarrito}`)
}
accionCarrito()
// Calcular el IVA 

function calcularIva (precioCarrito){
    return precioCarrito* 0.21
}

let iva = calcularIva(precioCarrito)
montoConIva = iva.toFixed(2)
console.log("El IVA es de: "+montoConIva)

// Sumarle el IVA al monto del servicio

function sumarIva (precioCarrito){
    return (precioCarrito + (precioCarrito * 0.21))
}

let precioConIva = sumarIva(precioCarrito)
precioConIvaM = precioConIva.toFixed(2)

alert("El precio del producto final es de: " +precioConIvaM)
console.log("El precio del producto final es de: " +precioConIvaM)

