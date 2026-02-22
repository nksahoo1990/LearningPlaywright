var a = 10; // globaly scoped variable
console.log(a);

function testVar() {
    var a = 30; // function scoped variable.
    console.log(a);

    if (true) {
        var a = 40;
        console.log(a);
    }
    console.log("values of a:",a);
}

testVar();

// NOTE: if var is function scoped then its value will be changed in the whole function. 
// It is not block scoped. It is function scoped. 
// It is not recommended to use var because it can lead to unexpected behavior. 
// It is better to use let and const which are block scoped. 
