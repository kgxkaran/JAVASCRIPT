function sayMyName(){
    console.log("H");
    console.log("I");
    console.log("T");
    console.log("E");
    console.log("S");
    console.log("H");
}

sayMyName()    //() shows only the refrence of the function

function addTwoNumbers(number1, number2){

    console.log(number1 + number2);    //but its type is not confirmed will use if else for this
}

function addTwoNumbers(number1, number2){

    // let result = number1 + number2
    // return result
    return (number1 + number2)    //use return keyeword
}

const result = addTwoNumbers(3, 5)

console.log("ghg",result);

function justLoggedin(username){

    return `${username} just logged in`    
}

console.log(justLoggedin("KARAN"));
console.log(justLoggedin());    //it is undefined we will use if statement or username="sam"

function justLoggedin(username="sam"){

    return `${username} just logged in`    
}

console.log(justLoggedin("KARAN"));

//suppose we making an e commerce website and humari cart mai add hota rhta hh so use ... rest operator

function cart(...num1){
    return num1;
}

console.log(cart(5,6,6,7));

function cartAdd(val1,val2,...num1){      //will not  show first 2 values
    return num1;
}

console.log(cartAdd(5,6,6,7,5,6,7));

const user = {
    username: "hitesh",
    price: 199
}

function handleObject(anyobject){  
      //so that it can recall any object
    console.log(`Username is ${anyobject.username} and price is ${anyobject.price}`);
}

// handleObject(user)

//but will return undefined if that key is not present 
//plus we can also enter a new object while calling the function  but make sure the keys shold be present

handleObject({
    username: "sam",
    price: 399
})

console.log(handleObject);

const myNewArray = [200, 400, 100, 600]

function returnSecondValue(getArray){
    return getArray[1]
}

// console.log(returnSecondValue(myNewArray));    can recall array too

console.log(returnSecondValue([200, 400, 500, 1000]));
