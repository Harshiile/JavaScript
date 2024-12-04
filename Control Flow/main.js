// ------------------------------------------------------------------------------------

// Falsy & Truthy values
// Falsy values - "",null,undefined,0,NaN
// Truthy values - [],{},1,function(){}

// ------------------------------------------------------------------------------------



// ------------------------------------------------------------------------------------

// Nullish coalescing operator(??) : returns its right-end side variable if left-end is null or undefined,otherwise returns left-end side variable

// Difference b/w ?? and || :
// ----- ?? -> not count falsy values like (0,false,"",NaN)
// ----- || -> count falsy value also
console.log("" ?? 8); // ""
console.log("" || 8); // 8

// ------------------------------------------------------------------------------------
