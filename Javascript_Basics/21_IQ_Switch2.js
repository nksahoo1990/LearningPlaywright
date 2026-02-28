let value ="5";

switch (value) {

    case 5 :
        console.log("Value is a number : 5");
        break;

    case "5":
        console.log  ("Value is a String: 5");
        break;

     default:
            console.log ("value is not 5");

}

// Output: "String '5' matched"
// switch uses ===, so "5" !== 5 (different types)

// **********************//

let statusval = 0;
switch (statusval) {
    case false:
        console.log("false matched");
        break;
    case 0:
        console.log("0 matched");
        break;
}

// Output: "0 matched" (0 === 0, NOT 0 === false)