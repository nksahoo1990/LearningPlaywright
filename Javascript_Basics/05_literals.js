let age = "pramod"; // This is a string literal assigned to the variable 'age'.
let isStudent = true; // This is a boolean literal assigned to the variable 'isStudent'.
let pi = 3.14; // This is a numeric literal assigned to the variable 'pi'.
let name = 'Alice'; // This is a string literal assigned to the variable 'name'.
let nullValue = null; // This is a null literal assigned to the variable 'nullValue'.
let undefinedValue; // This variable is declared but not assigned, so it has the value 'undefined'.

let count = 42;
let negative = -100;
let zero = 0;

let h = 0xFF;
let color_hex = 0xFF0000;
console.log("color code is: ", color_hex);

let single = 'Hello World'; 
// let name = 'It's a test'; It will give an error because of the single quote in the string. We can use double quotes to avoid this issue.
console.log(single);

// Template literal .

let firstname = "Nitya Krushna";
let lastname = "Sahoo";
let fullname = `Hi ${firstname} ${lastname}`; // This is a template literal that allows for embedding expressions.
console.log(fullname);

let math = `2+2=${2+2}`; 
console.log(math);

// I want to store path of the file.
let path = "C:\\users\\nitya\\file.txt";
// Single slash is not allowed. We have to use double slash. JS considers the single slash as an escape character. So, to represent a single slash in a string, we need to use two slashes.
console.log(path);
// ---> // - URLs
// ---> \\ - Path
let address = "https://app.vwo.com/#login";
console.log(address)

// Null — "intentionally nothing"
let selectedItem = null;
let searchResult = null;
console.log(searchResult);

// Undefined — "not yet assigned"
let declaredOnly;                     // automatically undefined
console.log(declaredOnly);           // undefined