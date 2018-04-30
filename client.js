// With an IIFE (Immediately Invoked Function Expression 
// We can see that the code below can be simplified to create less pollution

function bob() {
    var foo = "foo2";
    console.log(foo); // logs "foo2"
};

bob();

// Using IIFE we can get rid of the bob() call and just run the code once 

(function bob() {
    var foo = "foo2";
    console.log(foo); // logs "foo2"
})();

// This allows us to simplify our code and allow us to not have to write so many lines of code
// Just like above, it also allows us to be concise and run the code once since that was our objective

// IIFE's also allow us to create new iterations in for loops where it can be helpful for closures to happen

for (var i = 1; i < 6; i++) {
    setTimeout(function () {
        console.log('i: ' + i); // Logs "i: 6" 5 times 
    }, i * 1000);
}

// To achieve the right goal of logging 1, 2, 3, 4, 5 we have to look into a few different options

// IIFE option
for (var i = 1; i < 6; i++) {
    (function (i) {
        setTimeout(function () {
            console.log('i: ' + i); // Logs "i: 1", "i: 2", "i: 3", "i: 4", "i: 5"
        }, i * 1000);
    })(i);
}

// Block Scoping
for (var i = 1; i < 6; i++) {
    let j = i;
    setTimeout(function(){
        console.log('j: ' + j); // Logs "j: 1", "j: 2", "j: 3", "j: 4", "j: 5"
    }, j * 1000);
}

// using let vs var
for (let i = 1; i < 6; i++) {
    setTimeout(function () {
        console.log('i: ' + i); // Logs "i: 1", "i: 2", "i: 3", "i: 4", "i: 5"
    }, i * 1000);
}