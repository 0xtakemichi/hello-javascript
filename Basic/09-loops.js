// loops o bucles

// for

for (let i = 0; i < 5; i++) {
    console.log(`hola ${i}`)
}

const numbers = [1, 2, 3, 4, 5, 6, 7]

for (let i = 0; i < numbers.length; i++) {
    console.log(`Numeros: ${numbers[i]}`)
}

// while

let i = 0
while (i < 5) {
    console.log(`adios ${i}`)
    i++
}

// do while

i = 7
do {
    console.log(`chao ${i}`)
    i++
} while (i < 5)

// for of
// itera sobre los valores de un iterable
let myArray = [5, 4, 3, 2, 1]
let mySet = new Set(["hola", "adios", 32, "world"])
let myMap = new Map([
    ["nombre", "felipe"],
    ["edad", 25],
    ["profesion", "programador"],
    ["email", "@gmail.com"]
])

for (let valor of myArray) {
    console.log(`for of array:`)
    console.log(valor)
}

for (let valor of mySet) {
    console.log(`for of set:`)
    console.log(valor)
}

for (let valor of myMap) {
    console.log(`for of map:`)
    console.log(valor)
}

let myString = "hola"
for (let valor of myString) {
    console.log(`for of string:`)
    console.log(valor)
}

// for in
// itera sobre las propiedades de un objeto
let myObject = {
    nombre: "felipe",
    edad: 25,
    profesion: "programador",
    email: "@gmail.com"
}

for (let key in myObject) {
    console.log(`for in object:`)
    console.log(key, myObject[key])
}

// for each
// itera sobre los valores de un array
myArray.forEach((valor) => {
    console.log(`for each array:`)
    console.log(valor)
})

// break y continue

for (let i = 0; i < 5; i++) {
    if (i === 3) {
        break
    }
    console.log(`break: ${i}`)
}

for (let i = 0; i < 5; i++) {
    if (i === 3) {
        continue
    }
    console.log(`continue: ${i}`)
}