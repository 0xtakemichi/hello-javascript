// Estructuras avanzadas

// Array avanzados

// - Métodos funcionales

// forEach
let numbers = [1, 2, 3, 4, 5]
let strings = ['one', 'two', 'three', 'four', 'five']

numbers.forEach(element => console.log(element))
strings.forEach(element => console.log(element))

// map
let doubled = numbers.map(element => element * 2)
console.log(doubled)

let uppercased = strings.map(element => element.toUpperCase())
console.log(uppercased)

// filter
let evens = numbers.filter(element => element % 2 === 0)
console.log(evens)

let longStrings = strings.filter(element => element.length > 3)
let included = strings.filter(element => element.includes('o'))
console.log(longStrings)
console.log(included)

//reduce
let sum = numbers.reduce((previous, current) => previous + current, 10)
console.log(sum)

let concatenated = strings.reduce((previous, current) => previous + ' ' + current)
console.log(concatenated)