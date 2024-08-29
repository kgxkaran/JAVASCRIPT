// Immediately Invoked Function Expressions (IIFE)

//sometimes we need to execute functions quickly 

//to remove global scope pollution

(function chai(){
    // named IIFE
    console.log(`DB CONNECTED`);
})()         ;                           //wrapping the function and then executing

//if humne 2 functions banaye toh make sure to use ; at the end of 1st function otherwise it will not run

(function code(){
    // named IIFE
    console.log(`DB CONNECTED 2`);
})();                                

(()=>{
    // arrowed IIFE
    console.log(`DB CONNECTED 2`);          //same in case of arrow functions
})();                          

( (name) => {
    console.log(`DB CONNECTED TWO ${name}`);    //declaring variable too
} )('hitesh')