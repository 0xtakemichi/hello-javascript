// Exportación de módulos

// Funciones
export function sum(a, b){
    return a + b
}

// Propiedades
export const PI = 3.1415
export const name = "Felipe"

// Clases
export class Circle {
    constructor(radius) {
        this.radius = radius
    }

    area() {
        return Math.PI * Math.pow(this.radius, 2)
    }

    perimeter() {
        return 2 * Math.PI * this.radius
    }
}

// Exportación por defecto
export default function substract(a, b) {
    return a - b
}