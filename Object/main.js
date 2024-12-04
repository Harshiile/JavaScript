// Object we can create by 2 methods
// 1. By literals(Uptil we use that)
// 2. By Constructor(Known as Singaleton)
// Singleton object : A class object which have only single instance throughout the application

// By literals
const user = {
    name: 'Harshil',
    age: 233,
    email: 'mcintryre45@gmail.com',
    marks: () => {
        if (user.age > 30) return 100
        return 50
    }
}
// console.log(user['age']);
// console.log(user.marks());
// console.log(user['marks']());



// Use of Symbol in object
const mySyb = Symbol('mcg34')
const obj = {
    [mySyb]: 'harshil',
}
// console.log(obj);


// To freeze object
Object.freeze(user) // we can't modify the user now


// Merging of objects
const obj1 = { 1: "a", 2: "b" }
const obj2 = { 3: "c", 5: "d" }

// 1. By method
// const obj3 = Object.assign({}, obj1, obj2)
// console.log(obj3);

// 2. Spread operator
// const obj4 = { ...obj1, ...obj2 }
// console.log(obj4);


// Get details about objects
// console.log(Object.keys(user)) // Array of keys
// console.log(Object.values(user)) // Array of values
// console.log(Object.entries(user)) // Array of (key,value) pair - 2D array
// console.log(user.hasOwnProperty('name')); // Check whether object has key or not


// Destructuring & aliasing
// let { name: i } = user
