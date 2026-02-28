console.log(typeof "hello");
console.log(typeof 123); // int -> number
console.log(typeof 31.4); // float -> number

console.log(typeof true); // boolean
console.log(typeof []); // object
console.log(typeof null); // object (this is a known quirk in JavaScript)
console.log(typeof undefined); // undefined
console.log(typeof function() {});
console.log(`${6 * 4}`);