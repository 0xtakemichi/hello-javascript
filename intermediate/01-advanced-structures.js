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

// - Manipulación

// flat
let nestedArray = [1, [2,[3,[4]]]]
let flatArray = nestedArray.flat()
console.log(flatArray)
let deepFlatArray = nestedArray.flat(3)
console.log(deepFlatArray)

// flatMap
let phrases = ['hello world', 'lorem ipsum']
let words = phrases.flatMap(phrase => phrase.split(' '))
console.log(words)

// - Ordenación

// sort
let unsorted = [5, 3, 8, 1, 2]
let sorted = unsorted.sort((a, b) => a - b)
console.log(sorted)

let unsortedLetters = ['e', 'd', 'c', 'b', 'a']
let sortedLetters = unsortedLetters.sort()
console.log(sortedLetters)

//reverse
sorted.reverse()
console.log(sorted)

// - Búsqueda

// includes
console.log(sorted.includes(4))
console.log(sorted.includes(5))

// find
// entrega el primer elemento encontrado, no como filter
let firstEven = sorted.find(element => element > 2)
console.log(firstEven)

// findIndex
let firstEvenIndex = sorted.findIndex(element => element % 2 === 0)
console.log(firstEvenIndex)

// Sets avanzados

// - Operaciones

// Eliminación de duplicados
let numbersArray = [1, 1, 2, 2, 3, 3, 4, 4]
const numbersSet = new Set(numbersArray)
numbersArray = [...new Set(numbersArray)]
console.log(numbersSet)
console.log(numbersArray)

// Unión
const setA = new Set([1, 2, 3])
const setB = new Set([2, 3, 4, 5])
const union = new Set([...setA, ...setB])
console.log(union)

// Intersección
const intersection = new Set([...setA].filter(element => setB.has(element)))
console.log(intersection)

const palabras = ['hola', 'mundo', 'hola', 'estudio', 'me gusta', 'javascript']
const palabras2 = ['hola', 'mundo', 'no me gusta', 'estudio', 'javascript']
const intersectionStrings = new Set([...palabras].filter(element => palabras2.includes(element)))
console.log(intersectionStrings)

// Diferencia
const difference = new Set([...setA].filter(element => !setB.has(element)))
console.log(difference)

const differenceStrings = new Set([...palabras].filter(element => !palabras2.includes(element)))
console.log(differenceStrings)