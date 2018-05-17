/* 
        var numeroAzar = function (valor) {
            return Math.floor(Math.random() * valor);
        };
        document.write(numeroAzar(500)); */

console.log("El area de un triagulo de base 5 y altura 7 es: " + 5 * 7 / 2)
// Puedes escribir con comillas dobles o simples, pero cerrar de inico a fin con la misma
// Puedes usar Template String also,
console.log(`El area de un triagulo de base 5 y altura  8 es: ${5 * 8 / 2}`)
// Vamos a migrar a una funcion
let base = 5;
let height = 7;
//console.log(`El area de un triagulo de base 5 y altura  8 es: ${ base * height / 2}`)

function triangleArea(base, height) {
    return base * height / 2

}
console.log(`El area de un triagulo de base 
        ${base} y altura  ${height} es: ${triangleArea(base, height)}`)
// Arrow functions
const triangleA = (base, height) => base * height / 2
console.log(triangleA(5, 7))
console.log(triangleA(5, 12))
console.log(triangleA(5, 3))
//si  vamos a tomar muchas lienas de codigo usamos {} y return
// si es solo una linea uno usamos nada

/* Condicionales Programacion */
const starWars7 = "Jamaica Bajo Cero",
    pgStarWars7 = 17,
    nameDavid = 'David',
    ageDavid = 26,
    nameSanti = "Santi";
let ageSanti = 16

function canWatchStarWars7(name, age, isWhitAdult) {
    if (age >= pgStarWars7) {
        console.log(`${name} puede ver ${starWars7} `)
    }
    /* else {
           console.log(`${name} no tiene  puede ver ${starWars7} 
           por que solo tiene ${age} años `)
        } */
    else if (isWhitAdult) {
        console.log(`${name}tiene ${age} años y puede ver ${starWars7} 
        por que esta acompañado por un adulto`)

    } else {
        console.log(`${name} no tiene  puede ver ${starWars7} 
        por que solo tiene ${age} años `)
    }
}
canWatchStarWars7(nameDavid, ageDavid, false)
canWatchStarWars7(nameSanti, ageSanti, true)


/* Manipulacion de Strings */
//Palindromos : palabras que suenan igual de leer haceia a tras hacia a delante

function platzom(str) {
    let translation = str
    /* Si la palabra termina en "ar" 
    se le sacan 2 caracteres
    */
    str.toUpperCase()

    if (str.toLowerCase().endsWith(`ar`)) {
        translation = str.slice(0, -2)
        // 
    }
    // si la palabra incia con z se le añade P al final
    if (str.toLowerCase().startsWith(`z`)) {
        translation += `pe`
    }

    // si la palabra traducida tiene 10 o mas letras 
    // se debe partir a la mitad y unir con un -
    const length = translation.length
    if (length >= 8) {
        const firstHalf = translation.slice(0, Math.round(length / 2))
        const secondHalf = translation.slice(Math.round(length / 2))
        translation = `${firstHalf}-${secondHalf}`
    }
    return translation
}
console.log(platzom(`programar`))
console.log(platzom(`zorro`))
console.log(platzom(`zarpar`))
console.log(platzom(`abcdarios`))