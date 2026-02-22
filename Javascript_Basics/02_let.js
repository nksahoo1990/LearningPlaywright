let a = 10; // globaly scoped variable
console.log(a);

function testVar() {
    let a = 30; // function scoped variable.
    console.log(a);

    if (true) {
        let a = 40; // block scoped variable. It is only accessible within this block.
        console.log(a);
    }
    console.log("values of a:",a);
}

testVar();