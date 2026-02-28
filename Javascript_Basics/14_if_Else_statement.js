let age = 18;

if(age>18){
    console.log("Yes, let go goa!");
}
else{
    console.log("No you are minor, Not going");
}

// Grade program. 
// If else If else ladder.

let marks = 691;

if (marks >= 90 && marks <= 100) {
    console.log("Grade A");
} else if (marks >= 80 && marks < 90) {
    console.log("Grade B");
} else if (marks >= 70 && marks < 80) {
    console.log("Grade C");
} else if (marks >= 60 && marks < 70) {
    console.log("Grade D");
} else if (marks >= 0 && marks < 60) {
    console.log("Grade F");
} else
{
console.log("Invalid marks");
}

// ******************** */
// API if else statement

let statusCode = 404; // APIs are working fine

if (statusCode == 200) {
    console.log("Working fine!")
} else if (statusCode == "404") {
    console.log("not found!");
} else {
    console.log("Not mathcing status code!")
}


//******************* */

let score = 78;

if (score >= 90) {
    console.log("Grade: A — Excellent");
} else if (score >= 80) {
    console.log("Grade: B — Good");
} else if (score >= 70) {
    console.log("Grade: C — Average");
} else if (score >= 60) {
    console.log("Grade: D — Below Average");
} else {
    console.log("Grade: F — Fail");
}