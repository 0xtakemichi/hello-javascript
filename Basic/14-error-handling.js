// Excepción

// Captura de errores

// try-catch
let myObject

try {
    console.log(myObject.email)
    console.log("Finaliza sin errores")
} catch {
    console.log("Se produjo un error")
}

// Capturar el error
try {
    console.log(myObject.email)
    console.log("Finaliza sin errores")
} catch (error) {
    console.log("Se produjo un error:", error.message)
}

// finally
try {
    console.log(myObject)
    console.log("Finaliza sin errores")
} catch (error) {
    console.log("Se produjo un error:", error.message)
} finally {
    console.log("Esto se ejecuta siempre")
}

// Lanzamiento de errores

// throw
function sumIntegers(a, b){
    if (typeof a !== "number" || typeof b !== "number") {
        throw new TypeError("Esta operación sólo suma números")
    }
    if (!Number.isInteger(a) || !Number.isInteger(b) ) {
        throw new Error("Esta operación solo acepta números enteros");
    }
    if (a == 0 || b == 0) {
        throw new SumZeroIntegerError("Se está intentando sumar cero", a, b)
    }
    return a + b
}

console.log(sumIntegers(5, 5))

try{
    console.log(sumIntegers(5, 5))
    console.log(sumIntegers("4", 5))
} catch (error) {
    console.log(error.message)
}

// Capturar varios tipos de errores
try {
    console.log(sumIntegers(5.5, 10))
    console.log(sumIntegers("5", 10))
} catch (error) {
    if (error instanceof TypeError) {
        console.log("Se ha producido un error de tipo:", error.message)
    } else if (error instanceof Error) {
        console.log("Se ha producido un error:", error.message)
    }
}

// Crear excepciones personalizadas
class SumZeroIntegerError extends Error {
    constructor(message, a, b) {
        super(message)
        this.a = a
        this.b = b
    }

    printNumbers() {
        console.log(this.a, " + ", this.b)
    }
}

try {
    console.log(sumIntegers(0, 10))
} catch (error) {
    console.log("Se ha producido un error personalizado:", error.message)
    error.printNumbers()
}