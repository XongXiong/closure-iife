// With an IIFE (Immediately Invoked Function Expression 
// We can see that the code below can be simplified to create less pollution

function bob() {
    var foo = "foo2";
    console.log(foo);
};

bob();

// Using IIFE we can get rid of the bob() call and just run the code once 

(function bob() {
    var foo = "foo2";
    console.log(foo);
})();

// This allows us to simplify our code and allow us to not have to write so many lines of code
// Just like above, it also allows us to be concise and run the code once since that was our objective

