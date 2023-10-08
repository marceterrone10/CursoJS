alert("Bienvenido a Service Vial")
alert("Ingrese sus datos personales")

let nombre = prompt("Ingrese su nombre")
let empresa = prompt("Nombre de su empresa")

while (nombre == "" || empresa == ""){
    alert("Recuerde ingresar los datos para proceder")
    nombre = prompt("Ingrese su nombre")
    empresa = prompt("Nombre de su empresa")
}

let servicio1 = "Defensas"
let servicio2 = "Drenajes"
let servicio3 = "Agro"
const impuestoServiceVial = 700

alert("Hola " +nombre+ " presione aceptar para proceder a la selección de servicios")

while(nombre != "" && empresa != ""){
    var seleccionServicio = parseFloat(prompt("Seleccione el servicio que desee adquirir \n 1: Defensas \n 2: Drenajes \n 3: Agro"))
    if (seleccionServicio == ""){
        alert("Debe seleccionar un servicio")
        seleccionServicio = parseFloat(prompt("Seleccione el servicio que desee adquirir \n 1: Defensas \n 2: Drenajes \n 3: Agro"))
    }
    if (seleccionServicio > 3){
        alert("Esa opción no es correcta")
        seleccionServicio = parseFloat(prompt("Seleccione el servicio que desee adquirir \n 1: Defensas \n 2: Drenajes \n 3: Agro"))
    }
    else{
        break
    }
}

// Selección del servicio

if(seleccionServicio == 1){
   alert("Usted adquirio " +servicio1+ " presione aceptar para proceder al pagamento")
   monto = 1000;
}
if(seleccionServicio == 2){
    alert("Usted adquirio " +servicio2+ " presione aceptar para proceder al pagamento")
    monto= 1700;
}if(seleccionServicio == 3){
    alert("Usted adquirio " +servicio3+ " presione aceptar para proceder al pagamento")
    monto = 600;
}

alert("Revise la consola para consultar el precio final con IVA incluido")

// Calcular el IVA 

function CalcularIva (monto){
    return (monto * 0.21)
}

var iva = CalcularIva(monto) 
montoConIva = iva.toFixed(2)
console.log("El IVA es de: "+montoConIva)

// Sumarle el IVA al monto del servicio

function SumarIva (monto){
    return (monto + (monto * 0.21))
}

var precioConIva = SumarIva(monto)
precioConIvaM = precioConIva.toFixed(2)

alert("El precio del producto final es de: " +precioConIvaM)
console.log("El precio del producto final es de: " +precioConIvaM)
