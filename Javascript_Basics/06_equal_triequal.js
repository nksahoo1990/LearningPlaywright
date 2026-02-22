// = == ===

let a =5;
// = assignment operator. It assigns the value on the right to the variable on the left.

console.log("returns", 5==5);
console.log("returns", 5=="5"); // number , string.

// == equality operator. It compares the values for equality after performing type coercion if necessary. 
// It returns true if the values are equal, and false otherwise.

console.log("returns", 5==="5"); 
// === strict equality operator. It compares both the value and the type for equality without performing type coercion. 
// It returns true only if both the value and type are the same, and false otherwise.

console.log(null == undefined); // special rule, they only equal each other)
console.log(null === undefined);

console.log(5 == 5.00);
console.log(5 === 5.0);
console.log(5 === 5.01);

