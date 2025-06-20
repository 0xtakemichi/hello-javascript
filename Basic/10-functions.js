// functions

// function declaration (funcion declarada)
function myFunction() {
    console.log("hola")
}

myFunction()

function myFunctionWithParams(name, age) {
    console.log(`nombre: ${name}, edad: ${age}`)
}

myFunctionWithParams("felipe", 24)

// function expression (funcion anonima)
const myFunction2 = function (product, price) {
    console.log(`producto: ${product}, precio: ${price}`)
}

myFunction2("banana", 1.99)

// arrow function (funcion flecha)
const myFunction3 = (product, price) => {
    console.log(`producto: ${product}, precio: ${price}`)
}

myFunction3("manzana", 2.02)

const myFunction4 = (name) => console.log(`nombre: ${name}`)

myFunction4("felipe")

// parametros por defecto
function sum(a = 0, b = 0) {
    console.log(a + b)
}

sum(5, 4)
sum(5)
sum(b = 5)

// Retorno de valores
function mult(a, b) {
    return a * b
}

console.log(mult(5, 4))

function extern(){
    console.log("extern")
    function intern(){
        console.log("intern")
    }
    intern()
}

extern()


// funciones de orden superior
// una funcion que recibe como parametro otra funcion

function applyFunc(func, param) {
    func(param)
}

applyFunc(myFunction4, "función de orden superior")

// forEach
// itera sobre los valores de un array

const myArray = [1, 2, 3, 4]

const mySet = new Set(["Brais", "Moure", "mouredev", 37, true, "braismoure@mouredev.com"])

const myMap = new Map([
    ["name", "Brais"],
    ["email", "braismoure@mouredev.com"],
    ["age", 37]
])

myArray.forEach(function (value) {
    console.log(value)
})

myArray.forEach((value) => console.log(value))

mySet.forEach((value) => console.log(value))

myMap.forEach((value) => console.log(value))