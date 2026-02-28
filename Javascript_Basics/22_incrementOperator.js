let a = 10;
let b = a++; // post increment: assign a to b, then increment a

console.log("Value of a:", a);
console.log("Value of b:", b);

// -----------------------------------------------//

let x = 5;
let y = ++x; // pre increment: increment x, then assign to y

console.log("Value of x:", x);
console.log("Value of y:", y);  

// -----------------------------------------------//

let m= 10;
console.log (m++ + m);
// Output: 21 (m++ returns 10, then m becomes 11, so 10 + 11 = 21)

let n = 10;
console.log (++n + n);
// Output: 22 (++n increments n to 11, then returns 11, so 11 + 11 = 22)