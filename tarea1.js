let descuento = 15;
let envio = 2500;


let cantidadMouse = 3;
let precioMouse = 15000;

let cantidadTeclado = 4;
let precioTeclado = 30000;

let cantidadAuriculares = 5;
let precioAuriculares = 20000;

let subtotalMouse = cantidadMouse * precioMouse
let subtotalTeclado = cantidadTeclado * precioTeclado
let subtotalAuriculares = cantidadAuriculares * precioAuriculares

let subtotalCompra = subtotalMouse + subtotalAuriculares + subtotalTeclado

let precioFinal = subtotalCompra - (subtotalCompra * descuento / 100);

let totalConEnvio = precioFinal + envio;

const cantidadDeCuotas = 3;
let precioPorCuotas = precioFinal / cantidadDeCuotas;

console.log("Subtotal de los mouse: ", subtotalMouse)
console.log("Subtotal de los teclados: ", subtotalTeclado)
console.log("Subtotal de los auriculares", subtotalAuriculares)

console.log("Subtotal de la compra: ", subtotalCompra)

console.log("Precio total con envio: ", totalConEnvio)
console.log("precio total con descuento: ", precioFinal)

console.log("Precio por cada cuota: ", precioPorCuotas)
