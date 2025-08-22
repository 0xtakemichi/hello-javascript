// 1. Captura una excepción utilizando try-catch
function validarEdad(edad) {
    try {
        if (edad < 0) {
            throw new Error("La edad no puede ser negativa")
        }
        if (edad < 18) {
            throw new Error("La edad debe ser al menos 18")
        }
        return true
    } catch (error) {
        console.error("Se capturó un error:", error.message)
        return false
    }
}
console.log(validarEdad(18))

// 2. Captura una excepción utilizando try-catch y finally
function validarEdad2(edad) {
    try {
        if (typeof edad !== "number") {
            throw new Error("El valor debe ser un número")
        }
        if (edad < 0) {
            throw new Error("La edad no puede ser negativa")
        }
        if (edad < 18) {
            throw new Error("La edad debe ser al menos 18")
        }
        return true
    } catch (error) {
        console.error("Se capturó un error:", error.message)
        return false
    } finally {
        console.log("Validación de edad finalizada.")
    }
}
console.log(validarEdad2(10))

// 3. Lanza una excepción genérica
function dividir(a, b) {
    if (b === 0) {
        throw new Error("No se puede dividir por cero")
    }
    return a / b
}
try {
    console.log(dividir(10, 0))
} catch (error) {
    console.error("Se capturó un error:", error.message)
}

// 4. Crea una excepción personalizada
class EdadInvalidaError extends Error {
    constructor(mensaje) {
        super(mensaje)
        this.name = "EdadInvalidaError"
    }
}

// 5. Lanza una excepción personalizada
function validarEdadPersonalizada(edad) {
    try {
        if (typeof edad !== "number") {
            throw new EdadInvalidaError("El valor debe ser un número")
        }
        if (edad < 0) {
            throw new EdadInvalidaError("La edad no puede ser negativa")
        }
        if (edad > 120) {
            throw new EdadInvalidaError("Edad no realista")
        }
        return true
    } catch (error) {
        if (error instanceof EdadInvalidaError) {
            console.error("Error personalizado:", error.message)
        } else {
            console.error("Error desconocido:", error.message)
        }
        return false
    }
}
console.log(validarEdadPersonalizada("w"))
console.log(validarEdadPersonalizada(-5))
console.log(validarEdadPersonalizada(130))

// 6. Lanza varias excepciones según una lógica definida
class FormatoNombreError extends Error {
    constructor(mensaje) {
        super(mensaje)
        this.name = "FormatoNombreError"
    }
}
class FormatoEdadError extends Error {
    constructor(mensaje) {
        super(mensaje)
        this.name = "FormatoEdadError"
    }
}

function validarUsuario(nombre, edad) {
    if (typeof nombre !== "string" || nombre.trim() === "") {
        throw new FormatoNombreError("El nombre debe ser una cadena no vacía")
    }
    if (typeof edad !== "number" || edad < 0 || edad > 120) {
        throw new FormatoEdadError("La edad debe ser un número entre 0 y 120")
    }
}

// 7. Captura varias excepciones en un mismo try-catch
function procesarUsuario(nombre, edad) {
    try {
        validarUsuario(nombre, edad)
        console.log("Usuario válido", {nombre, edad})
        return true
    }catch (error) {
        if (error instanceof FormatoNombreError) {
            console.error("Error de formato de nombre:", error.message)
        } else if (error instanceof FormatoEdadError) {
            console.error("Error de formato de edad:", error.message)
        } else {
            console.error("Error desconocido:", error.message)
        }
        return false
    }
}
console.log(procesarUsuario("Felipe", 25))
console.log(procesarUsuario(" ", 20))

// 8. Crea un bucle que intente transformar a float cada valor y capture y muestre los errores
const valores = [15, "55", "12", "abc", "NaN", 45.4, "505.3"]
const resultados = []

for (let i = 0; i < valores.length; i++) {
    try {
        const resultado = parseFloat(valores[i])

        if (isNaN(resultado)) {
            throw new Error(`El valor "${valores[i]}" no es un número válido`)
        }

        resultados.push(resultado)
    } catch (error) {
        console.error("Error capturado:", error.message)
    }
}

// 9. Crea una función que verifique si un objeto tiene una propiedad específica y lance una excepción personalizada
class PropiedadNoEncontrada extends Error {
    constructor(propiedad) {
        super(`La propiedad "${propiedad}" no existe en el objeto`)
        this.name = "PropiedadNoEncontrada"
        this.propiedad = propiedad
    }
}
function verificarUsuario(usuario, propiedad){
    try {
        if (!usuario.hasOwnProperty(propiedad)) {
            throw new PropiedadNoEncontrada(propiedad)
        }
        console.log(`La propiedad "${propiedad}" existe en el objeto.`)
        return true

    } catch (error) {
        if (error instanceof PropiedadNoEncontrada) {
            console.error("Error capturado:", error.message)
        } else {
            console.error("Error desconocido:", error.message)
        }
        return false
    }
}

const usuario = {
    name: "Felipe",
    edad: 25
}

console.log(verificarUsuario(usuario, "name"))
console.log(verificarUsuario(usuario, "mail"))

// 10. Crea una función que realice reintentos en caso de error hasta un máximo de 10
class MaximoReintentosError extends Error {
    constructor(mensaje, ultimoError) {
        super(mensaje)
        this.name = "MaximoReintentosError"
        this.ultimoError = ultimoError
    }
}

function realizarReintentos(func, maxIntentos = 10) {
    let intentos = 0
    let ultimoError = null
    while(intentos <= maxIntentos) {
        try {
            console.log(`🔄 Intento ${intentos + 1} de ${maxIntentos + 1}`)
            return func()

        }catch (error) {
            intentos++
            ultimoError = error

            console.error(`❌ Intento ${intentos} falló: ${error.message}`)

            if (intentos > maxIntentos) {
                throw new MaximoReintentosError(
                    `Has alcanzado el maximo de ${maxIntentos} reintentos`,
                    ultimoError
                )
            }
        }
    }
}

function llamadaApi() {
    const respuestasPosibles = [
        { success: true, data: "Datos recibidos" },
        { success: false, error: "Timeout" },
        { success: false, error: "Servidor no disponible" },
        { success: false, error: "Error desconocido" },
        { success: true, data: "Conexión exitosa" }
    ]

    const respuesta = respuestasPosibles[Math.floor(Math.random() * respuestasPosibles.length)]

    if (!respuesta.success) {
        throw new Error(respuesta.error)
    }

    if (respuesta.success){
        console.log(respuesta.data)
    }

    return respuesta.data
}

console.log("Iniciando reintentos...")
realizarReintentos(llamadaApi)
