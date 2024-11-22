// let x = Symbol('14')
// let y = Symbol('14')
// console.log(x);
// console.log(y);
// console.log(x == y); // false

let z = 545n
console.log(typeof z, z);// bigint 545n


//-------------------------------------------------------------------------

// Non-Premitive Datatypes - Call by reference
// Array, functions, objects
// datatype of above all -> objects , specially for function it is object function

//-------------------------------------------------------------------------


// Stack(Primitive DT) & Heap(Non-Primitive DT)
// ---- Stack gives copy of a variable, hence changing on copy doesn't effect on original value
// ---- While Heap gives reference of a variable, hence changing on copy does effect on original value


