let num = 5;

do {  // Executes at least once, then checks the condition
    console.log("Current number:", num);
    num++;
} while (num < 10); // Output: 5, 6, 7, 8, 9 (num starts at 5 and increments until it reaches 10)

// The do-while loop is useful when you want to ensure that the loop body is executed at least once, regardless of the condition.