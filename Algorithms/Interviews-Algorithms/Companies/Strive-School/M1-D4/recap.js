let striver = {
    firstName: 'Stefano',
    enrolled: true,
    roles: ['admin', 'teacher', 'staff'],
    country: {
        area: 'Italy',
        planet: 'Earth'
    }
}

// 1) DOT NOTATION when you explicitely know the name of the key for your property
// 2) SQUARE BRACKETS useful for evaluating the content of the brackets before

console.log('IS THE STRIVER ENROLLED?', striver.enrolled) // true
console.log(striver['enrolled']) // true

let x = 'firstName'
console.log(striver[x]) // 'Stefano'

striver.x // undefined

// arrays elements can be referenced using their indexes
// indexes in arrays always start from 0

console.log('THESE ARE MY ROLES', striver.roles)
console.log('JUST THE FIRST ONE', striver.roles[0]) // 'admin'

let arrayOfStrivers = [
    {
        firstName: 'Stefano',
        enrolled: true,
        roles: ['admin', 'teacher', 'staff'],
        country: {
            area: 'Italy',
            planet: 'Earth'
        }
    },
    {
        firstName: 'Guled',
        enrolled: true,
        roles: ['student', 'apr-21'],
        country: {
            area: 'Sweden',
            planet: 'Earth'
        }
    },
    {
        firstName: 'Maksym',
        enrolled: true,
        roles: ['student', 'apr-21'],
        country: {
            area: 'Italy',
            planet: 'Earth'
        }
    }
]

// for signature: initialization of the counter, condition for the counter, increasing for the counter
for(let x=0; x<arrayOfStrivers.length; x++) {
    // console.log(x)
    console.log(arrayOfStrivers[x].enrolled)
    // we're going to enter this code block three times
}

let striveTeachers = [
    {
        firstName: 'Diego',
        lastName: 'Banovaz',
        age: 'unknown',
        country: {
            area: 'Italy',
            planet: 'Earth'
        }
    }
]

console.log(arrayOfStrivers[2].country.planet, striveTeachers[0].lastName)

striveTeachers[0].roles = ['COO', 'Teacher']

console.log(striveTeachers[0]['age'])


