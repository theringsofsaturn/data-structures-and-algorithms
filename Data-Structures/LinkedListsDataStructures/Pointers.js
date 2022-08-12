// Linked Lists diagram
// apples
// 8914 --> grapes
//          8632 --> bananas
//                   678 --> null

let obj1 = { a: true };
let obj2 = { a: true };

console.log(obj1 === obj2); // false
console.log(obj1.a === obj2.a); // true

let obj3 = { a: true };
let obj4 = obj3;

console.log(obj3 === obj4); // true

console.log("1 value", obj1); // { a: true }
console.log("2 value", obj2); // { a: true }

obj3.a = "change";

console.log("3 changed value", obj3); // { a: true }
console.log("4 changed value?", obj4); // { a: true }

// delete obj3.a;
// console.log("3 after deleted value", obj3); // { }
// console.log("4 after deleted value?", obj4); // { }

delete obj3;
console.log("3 after deleted obj3", obj3); // undefined // obj3 is deleted
console.log("4 after deleted obj3?", obj4); // { a: "change" } // obj4 is still pointing to the same location in memory. This is how things get deleted i languages like JavaScript. This is what we might call "garbage collection". For example, as soon as we change the value of obj4:
obj4 = "Hello";
console.log("4 after changing the value", obj3); // Hello

// Because JavaScript is garbage collected, that is memory is managed automatically, the { a: "change"} gets automatically garbage collected and deleted, because nothing is pointed to it. In Low Level languages you have to manage your own memory. You have to manually delete this reference item in memory { a: "change"}. This can cause a lot of possible issues, where you leave memory that's not being used in memory. There is also benefits with non garbabe collected languages, where you get to manage your own memory, so you get things really fast and efficient!
