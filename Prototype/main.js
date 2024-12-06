// Constructer function : same as normal function but two difference
// ------ 1) Apperence : first symbol is capital
// ------ 2) new keyword : Use with "new" keyword

// ------------------------------------------------------------------------------

// new keyword : It creates new unique instance
function User(name, age) {
    this.name = name
    this.age = age
}
const user1 = new User('Harshil', 45)
const user2 = new User('Habibi', 21) //-> without new keyword , it overwrite above data, hence we need "new" keyword to create seprate instances for both dat
// console.log(user1);
// console.log(user2);

// ------------------------------------------------------------------------------


//###############  NOTE   ###############

// All arrays,strings,functions are objects, every objects has prototype & prototypes have another prototype into it until it reaches to null
// Functions are uses as functions & objects also

//###############  NOTE   ###############



// ------------------------------------------------------------------------------

// We can add extra properties & methods to functions because it is initially objects


// 1) Directly : only affect perticuler single instance of function
user1.marks = 100
// console.log(user1.marks); // 100
// console.log(user2.marks); // undefined


// 2) Using prototype : affect to all instances of functions
function details(name, rollno) {
    this.name = name
    this.rollno = rollno
}
details.prototype.age = 100
details.prototype.print = function () {
    return `Hello ${this.name}`
}
const x = new details('Harshil', 57)
const y = new details('Valkyrie', 100)
// console.log(x.age);
// console.log(y.print());

// ------------------------------------------------------------------------------


// BTS when new keyword is used
// -- 1) An empty object created : A new keyword creates new empty object
// -- 2) A prototype linked : The newly created objects links with prototyped properties & methods of constructer function
// -- 3) Constructer called : The constructer is called with specific arguments & those arguments are bounds with newly created object and implicitly returns the object(this)
// -- 4) Object returns : if there is no explicit returns of non - primitive value( like array, object, function etc) then new keyword return "this" new created object implicitly


// ------------------------------------------------------------------------------

// Prototypes to all instance of all objects

String.prototype.trueLength = function () {
    return this.trim().length
}
// console.log('harshil          '.trueLength());
// console.log('      harshil  '.trueLength());


Object.prototype.marks = function () {
    return (this.age) > 18 ? 100 : 0;
}
const obj = {
    name: 'Harshil',
}
// console.log(obj.marks());


// ------------------------------------------------------------------------------

// Prototype Inheritance

// Old method
const obj1 = {
    name1: 'Harshil--1'
}
const obj2 = {
    name2: 'Harshil--2',
    __proto__: obj1
}
const obj3 = {
    name3: 'Harshil--3',
    __proto__: obj2
}
// console.log(obj3.name1);


// Modern method
const obj4 = {
    name1: 'Harshil--4'
}
const obj5 = {
    name2: 'Harshil--5',
}
Object.setPrototypeOf(obj5, obj4) // At backend, it uses same previous old method, Modern method is just for better syntax
console.log(obj5.name1);


//####################### What if, if properties in both objects have same varibale name


