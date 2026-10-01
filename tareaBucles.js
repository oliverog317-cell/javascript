for (let i = 1; i <= 100; i++) {
    if (i % 3 === 0) {
        console.log(i)
    }
} 

for (let i = 1; i <= 100; i++) {
    if (i % 7 === 0) {
        console.log(i)
    }
} 

for (let i = 20; i >= 0; i--) {
    console.log(i)
}

console.log("Despegue!")

let contador = 0;

for (let i = 1; i <= 100; i++) {
    if (i % 5 === 0) {
        contador++;
    }
}

console.log("Hay " + contador + " multiplos")

let numeros = 0;

for (let i = 1; i <= 100; i++) {
    if (i > 70) {
        numeros++;
    }
}

console.log("Hay " + numeros + " números mayores a 70")

let suma = 0;

for (let i = 0; i <= 10; i++) {
    suma += i;
}

let promedio = suma / 10;

console.log("Promedio entre los 10 primeros números:", promedio)