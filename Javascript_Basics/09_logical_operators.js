// && -> AND Gate
// || -> OR Gate

let a = true;
let b = false;
console.log(a && b); //  AND
console.log(a || b); //  OR
console.log(!a); // Reverse of a

// ********** //
// logical operators with if-else

let username = "Dev";
let password = "secure123";
let isAccountLocked = true;

if ((username === "Dev" && password === "secure123") && !isAccountLocked) {
    console.log("Allowed to enter");
} else {
    console.log("not allwed to enter");
}