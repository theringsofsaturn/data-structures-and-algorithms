let counter = 0


// the while loop will work 
while(counter < 10){
    console.log(counter)
    // this loop won't exit until counter is 10
    counter = counter + 1
}


console.log('now counter is 10')



let exit = false


while(exit === false) {
    console.log('exit is still false')
    if(Math.random() > 0.9) { // this random number is generated every time from scratch
        // and it can be any value from 0 to 1
        exit = true
    }
}


// 1) create a variable
// 2) set the limit
// 3) how much we want to increase the variable


for(let x=0; x < 15; x++) {
    console.log('Hello', x)
}


let fruitsArray = ['apple', 'pear', 'banana', 'mango', 'kiwi', 'papaya']


// fruitsArray[0] --> apple


for(let x=0; x<fruitsArray.length; x++){
    console.log('fruit', fruitsArray[x]) //fruitsArray[x] is apple, pear, banana etc.
    // if(fruitsArray[x] === 'mango') { // fruitsArray[x] is the CURRENT FRUIT
    //     break
    // }
}


// for(let x=0; x<fruitsArray.length; x++){
//     if(fruitsArray[x] !== 'banana' && fruitsArray[x] !== 'mango') { // fruitsArray[x] is the CURRENT FRUIT
//         console.log('fruit', fruitsArray[x]) //fruitsArray[x] is apple, pear, banana etc.
//     }
// }