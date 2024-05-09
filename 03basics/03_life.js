// Immediately Invoked Function Expression [IIFE].

// NOTE:- it used to avoid the global scope pollution. That's why we use this functions to call itself immediately.

(function db(){   // normal functions known as named IIFE
    console.log("DB connected")
})(); // semicolon is used to stop the context

(()=>{ // here now we use arrow function and it also known as unamed IIFE
    console.log("DB2 connected")
})();


((name)=>{ 
    console.log(`my name is ${name}`)
})('devraj')