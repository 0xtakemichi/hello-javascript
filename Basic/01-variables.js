// var
// Era la forma inicial que habia para declarar variables
// deprecated
var name = 'hola chavales'

// let
// Es reasignable solo dentro de su bloque de ejecución
let name2 = 'hola chavales 2'

// const
// Es inmutable, no puede ser reasignada
const name3 = 'hola chavales 3'

// Ejemplo de reasignación y redeclaración
var x = 1
x = 2 // Reasignación permitida
var x = 3 // Redeclaración permitida

let y = 1
y = 2 // Reasignación permitida
// let y = 3 // Redeclaración NO permitida

const z = 1
// z = 2 // Reasignación NO permitida
// const z = 3 // Redeclaración NO permitida

// Scope (alcance)
if (true) {
    var a = 'var dentro de if' // Disponible fuera del bloque
    let b = 'let dentro de if' // Solo disponible dentro del bloque
    const c = 'const dentro de if' // Solo disponible dentro del bloque
}
console.log(a) // Funciona
// console.log(b) // Error: b no está definida
// console.log(c) // Error: c no está definida

// Tipos de datos
let numero = 42
let texto = 'Hola mundo'
let booleano = true
let arreglo = [1, 2, 3]
let objeto = { nombre: 'Juan', edad: 30 }

// Buenas prácticas
// - Usar const por defecto, let solo si necesitas reasignar
// - Evitar var, ya que puede causar errores difíciles de detectar
// - Nombrar las variables de forma descriptiva y usar camelCase

// Errores comunes
// - Olvidar el scope de var
// - Intentar reasignar una constante
// - Redeclarar variables con let o const