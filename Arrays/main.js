// Array always do shallow copy

// Shallow Copy : Both variables references to same point
// Deep Copy : Both variables does not references to same point

let x = new Array(1, 2, 3, 4, 5, 6, 7, 8, 9) // Follows shallow copy


// x.push(2) // Insert at end
// x.pop() // Pop from end

// x.unshift(55) // Insert at start
// x.shift() // Pop from start

// x.join() // convert array element into string separate with ' , '

// x.slice(2, 5) // just send copy of sliced array , return new array
// let y = x.splice(2, 5) // send sliced array , original array -= sliced array

// let initialVal = 10
// const cb = (x, y) => (x + y)
// let y = x.reduce(cb, initialVal) // Give single value where x is result of result callback, y is current element and initially x can't take result hence it take x=initialVal
// console.log(y);


// let z = x.concat(y) // Join two arrays, return new array

// let z = y.flat(2) // Sub-arrays into one array with depth parameter, return new array

// let z = Array.from('Harshil') // -> [H,a,r,s,h,i,l]

// let x = Array.of('fsdf', 'werfsd', true, false, 45, 23) // Make new array







