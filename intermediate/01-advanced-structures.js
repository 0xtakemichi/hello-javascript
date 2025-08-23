// Estructuras avanzadas

// Array avanzados

// - Métodos funcionales

// forEach
let numbers = [1, 2, 3, 4, 5]

numbers.forEach(element => console.log(element))

// map
let doubled = numbers.map(element => element * 2)
console.log(doubled)

// filter
let evens = numbers.filter(element => element % 2 === 0)
console.log(evens)

//reduce
let sum = numbers.reduce((previous, current) => previous + current, 10)
console.log(sum)