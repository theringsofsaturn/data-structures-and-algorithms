// FUNCTIONS

// the reasoning is DRY
// don't repeat yourself
// bark()

// FUNCTION DECLARATION
const bark = function(){
    console.log('a dog barks!')
    console.log('a dog barks another time!!')
}

bark() // this is the FUNCTION EXECUTION

// THIS IS NOT MAKING SENSE, BUT IT WORKS, AVOID IT
// anotherBark()
// function anotherBark() {
//     console.log('another bark!')
// }

let variable = 'stefano'
console.log(variable)

// RETURN VALUES
// PARAMETERS

const sum5to3 = function(){
    let result = 5 + 3
    return result
}

let ten = 2 + sum5to3()

// sum5to3()

// THE RETURN STATEMENT WILL ALLOW YOU TO USE THE FUNCTION INVOCATION AS A VALUE

// console.log(sum5to3()) // this is really 8

// console.log(typeof sum5to3())

// // let eight = sum5to3()
// // console.log(eight)

// const greetSarah = function() {
//     // console.log('Hello Sarah!')
//     return 'Hello Sarah!'
// }

// const x = greetSarah()

// console.log(x)
// // 

const sumAnyNumbers = function(n1, n2) { // IT WILL ALWAYS RETURN A NUMBER
    let result = n1 + n2 // YOU CAN ASSIGN ITS EXECUTION TO A VARIABLE
    return result
}

let strive1 = sumAnyNumbers(6,7) // 13
let strive2 = sumAnyNumbers(1,3) // 4

console.log(sumAnyNumbers(6,7))

console.log(strive1 + strive2) // 17

const greetUserWithParameter = function(striver) {
    return `Hello ${striver}`
}

let greeting = greetUserWithParameter('Vardan')
console.log(greeting)

const saveJustTheFirstLetter = function(name) {
    let justTheFirst = name.slice(0,1)
    return justTheFirst
}

console.log(saveJustTheFirstLetter('janusz'))

const barkOrBork = function(dogSize){
    if(dogSize === 'Little') {
        return 'bark'
    } else {
        return 'bork'
    }
}

console.log(barkOrBork('little'))
console.log(barkOrBork('big'))

const calculateArea = function(l1, l2){
    let area = l1 * l2
    return area
}

const crazySum = function(n1, n2){
    // we need to check if they are the same
    if(){
        // if they are the same, add them up and return the total * 3
    } else {
        // simply return their sum
    }
}

const crazyDifference = function(numberToSubtract) {

}