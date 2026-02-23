let s = "Hello";
let title = "Sahoo";
//s = `s +" " + title + " Nitya" + " " + ${title}; // concatenation operator. It combines two strings together and returns a new string.

s = `${s} Nitya ${title}`; // Template literal. It allows for embedding expressions and variables directly within a string using backticks (`) and ${} syntax.
console.log(s);
