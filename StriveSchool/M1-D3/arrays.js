// ARRAYS
let myFirstArray = []


let mySecondArray = [1, 2, 3]


let myThirdArray = ["stefano", 'alina', `guled`]


let anotherArray = [true, 1, 'italy', false]


console.log(myThirdArray[0])


myThirdArray[0] = 'Nando'


// console.log(myThirdArray[3])


myThirdArray[4] = 'aizada'


// console.log(myThirdArray[3])


myObjectArray = [{name: 'Stefano'}, {name: 'Alina'}, {name: 'Guled'}]


console.log(myObjectArray[2].name)
myObjectArray[2].surname = 'Casanova'


console.log(myObjectArray[2])


console.log(myObjectArray[1]['name'])


let obj1 = {
    name: 'Stefano'
}


let arr = [obj1]


arr[0]


let fruitsArray = ['apple', 'pear', 'banana', 'mango']


console.log(fruitsArray.length)


fruitsArray[fruitsArray.length] = 'papaya'



fruitsArray.push('papaya') // this will push an element in the latest position
fruitsArray.pop() // this will remove the latest element from an array


let fruitsArrayWithoutApple = fruitsArray.slice(1)


console.log(fruitsArrayWithoutApple)


// concat will merge multiple arrays together
let numbers1 = [1, 2]
let numbers2 = [3, 4]


let allTheNumbers = numbers2.concat(numbers1)


console.log(allTheNumbers)