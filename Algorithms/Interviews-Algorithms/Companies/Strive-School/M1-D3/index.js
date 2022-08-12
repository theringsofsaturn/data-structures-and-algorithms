console.log(3 > 2)

let mikeAge = 27

if(mikeAge >= 18){
    console.log('you can drive a car')
} else if(mikeAge < 10){
    console.log("oh, you're very very young")
} else {
    console.log("you're almost there, but not quite yet!")
}

let student = 'Hasham'

switch(student) {
    case 'Mridula':
        console.log('Hello ' + student)
        break
    
    case 'Hasham':
        console.log('Welcome ' + student)
        break

    default:
        console.log('Student ' + student + ' is not in the database!')
}

// TERNARY OPERATOR

// let canMikeDrive
// // undefined right now

// if(mikeAge >= 18){
//     canMikeDrive = true
// } else {
//     canMikeDrive = false
// }

let canMikeDrive = mikeAge >= 18 ? true : false

console.log('canMikeDrive:', canMikeDrive)

let discount = '10%'

let willIBuyTheseTrousers = discount === '20%' && mikeAge === 27 ? 'yes' : 'no'

let mike = discount === '20%' ? 10 : discount === '10%' ? 5 : 0

console.log(willIBuyTheseTrousers)