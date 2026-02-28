let amul = null;
let val = amul ?? "nandani milk";
let val2 = null ?? "default";   // "default" (?? returns right side if left is null/undefined)

console.log(val);
console.log(val2);

val = "which milk? -> " + val;
console.log(val);