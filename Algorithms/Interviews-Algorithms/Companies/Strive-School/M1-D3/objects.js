// OBJECTS
let aNewObject = {}


let user = {
    name: 'Stefano',
    age: 25,
    hasADrivingLicense: true,
    area: {
        country: 'Italy',
        region: 'FVG',
        hasPandemic: true
    }
    // property: value
}


// THE CONTENT IS INSERTED WITH PAIRS OF KEYS/VALUES


// HOW TO ACCESS PROPERTIES INSIDE AN OBJECT
// 1) DOT NOTATION


console.log(user)
console.log(user.age)


// 2) SQUARE BRACKETS


let x = 'area'


console.log(user['name'])
console.log(user[x])


console.log(user.x)


console.log(user['na' + 'me'])


user.age = 26
user.name = 'Sara'


user.height = {
    cm: 170,
    mt: 1.70
}


console.log(user)


delete user.age



console.log(user.height['mt'])


user['surname'] = 'casanova'


console.log(user)


let var1 = 10
let var2 = var1


console.log(var1)
console.log(var2)


var1 = 5


console.log(var1)
console.log(var2)


let obj1 = {
    name: 'Shakira'
}


// let obj2 = obj1 // THIS WILL NOT CREATE SEPARATE BOXES
let obj2 = Object.assign({}, obj1)


obj1.name = 'Samuel'


console.log(obj2)
