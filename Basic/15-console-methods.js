// Console

// log
console.log("Mesaje por consola")

// error
console.log("Esto es un error")
console.log("Error al conectarse: ", new Error("Conexion fallida."))

// warn
console.warn("Mensaje de advertencia")

// info
console.info("Mensaje con información adicional")

// table
let data = [
    {name: "Felipe", age: 25},
    {name: "Takemi", age: 24}
]
console.table(data)

// group
console.group("Grupo de ciudades:")
console.log("Santiago")
console.log("La Serena")
console.log("Valparaiso")
console.groupEnd()

// time
console.time("tiempo de ejecución")
console.timeEnd("tiempo de ejecución")

// assert
let age = 15
console.assert(age >= 18, "Debe ser mayor de 18")

// count
console.count("Click")
console.count("Click")
console.count("Click")
console.countReset("Click")
console.count("Click")

// trace
function funcA () { funcB }
function funcB () { console.trace("Seguimiento de la ejecución") }
funcA()

// clear
// console.clear()