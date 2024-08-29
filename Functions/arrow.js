const user = {
    username: "hitesh",
    price: 999,

    welcomeMessage: function() {
        console.log(`${this.username} , welcome to website`);    //this keyword is used for any object
        console.log(this);
    
    }
}

    user.welcomeMessage()
    user.username="sam"
    user.welcomeMessage()

    // console.log(this);   will return null object  {}

//     function chai(){
//     let username = "hitesh"
//     return(username);
// }

// console.log(chai())

const chai =  () => {        //syntax of arrows functions
    let username = "hitesh"
    console.log(this);
}

 const addTwo = (num1, num2) => {
     return (num1 + num2)                    //return key is used when you use {}
 }

console.log(addTwo(7,8));

// const addTwo = (num1, num2) =>  num1 + num2

// const addTwo = (num1, num2) => ( num1 + num2 )    other syntaxes

const addTwo1 = (num1, num2) => ({username: "hitesh"})   //if we want to return an object use {}
