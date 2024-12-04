// Function executes when it calls ------------++++

// --------------------------------------------------------------------


function add(num1, num2, num3 = 10) {
    console.log(num1 + num2 + num3);
}
add(4, 7)
// add -> function reference
// add() -> function execution
// add(num1,num2) -> parameters : variables in function defination
// add(4,7) -> arguments : variables in function execution


// --------------------------------------------------------------------


// Rest operator : Rest operator == Spread operator, difference in how they used
// Use as function parameters => known as Rest operator, return array
// Use as destructuring => known as Spread operator
function showCase(...nums) {
    console.log(nums);
}
showCase(3, 5, 2, 6, 3)


// --------------------------------------------------------------------


// Hoisting : We can call functions before it initialization
// ---- It only works when we create function with function keywork, not when we create function & store it in variable

// n1() - Worked
function n1() {
    console.log('111');
}

// x() - Not work
const x = function n2() {
    console.log('222');
}


// --------------------------------------------------------------------


// this : it refer to current context(current block/scope)
// ---- It does not work with arrow functions
const user = {
    name: "Harshil",
    age: '23',
    print: function () {
        console.log(this.name);
    }
}

console.log(this);
// print -> {} , when we call above line in node environment
// print -> windowObject , when we call above line in window environment(in console section of any search engine)


// --------------------------------------------------------------------


// Arrow functions