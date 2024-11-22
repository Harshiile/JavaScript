// Primitive Datatypes - Call by value
// string, numbers, boolean, null, undefined, symbol, bigInt

let x;
let y = '23'
let z = 234
let w = true
let e = null
// console.log(typeof x);//undefined
// console.log(typeof y);//string
// console.log(typeof z);//number
// console.log(typeof w);//boolean
// console.log(typeof e);//object // typeof null -> object



//-------------------------------------------------------------------------

//---> Conversion

// ----- anything to Number

// let a = '34'
// console.log(Number(a)); // 34 as number
// a = '3a4'
// console.log(typeof Number(a), Number(a)); // Nan -> Not a Number
// console.log(Number("")); // -> 0
// console.log(Number(null)); // -> 0
// console.log(Number(undefined)); // -> NaN


// ----- anything to Boolean

// let a = '3a4'
// console.log(Boolean(a)); // true
// a = ''
// console.log(Boolean(a)); // '' -> false , '   ' -> true
// console.log(Boolean(null)); // -> false
// console.log(Boolean(undefined)); // -> false


// ----- anything to String

// let a = 43
// console.log(String(a)); // 43 as string
// console.log(String(null)); // -> null
// console.log(String(undefined)); // -> undefiend


//-------------------------------------------------------------------------

// Special Conversion

// console.log('1' + 2 + 2); // 122
// console.log(1 + 2 + '2'); // 32

// First two variables decides whole result
// string > number , in both case -> type is string


let s = 'harshil'
console.log(new Date().getTime());




