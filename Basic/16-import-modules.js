// Importación de módulos
import { sum, PI, name, Circle } from "./16-export-modules.js"
import resta from "./16-export-modules.js"

// Funciones
console.log(sum(5,5))

// Propiedades
console.log(PI)
console.log(name)

// Clases
let circle = new Circle(10)
console.log(circle)
console.log(circle.radius)
console.log(circle.area().toFixed(2))
console.log(circle.perimeter().toFixed(2))

// Importación por defecto
console.log(resta(5, 9))

// Proyecto modular
// import { MyImport } from "./directory/file.js"