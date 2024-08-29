// {}  -->  scopes

//var c = 300
let a = 300
if (true) {
    let a = 10
    const b = 20
    // console.log("INNER: ", a);
    
}



// console.log(a);
// console.log(b);
// console.log(c);

//NESTED SCOPES ANFD FUNCTIONS

function one(){
    const username = "hitesh"
    //const num = 789;

    function two(){
        const website = "youtube"
        console.log(username);
        console.log(website);
        // console.log(num);
        
    }
     
    //const isLogged = true;
    const num = 789;
    console.log(num);

     two()

}

   one()

   if (true) {
    const username = "hitesh"
    if (username === "hitesh") {
        const website = " youtube"
        // console.log(username + website);
    }
    // console.log(website);      //scope ke bhar hh
}

// console.log(username);      will give an error coz scope ke bhar hh

addone(6)
function addone(num){
    return num + 1                 //function likhne ke kaafi types hote h
}


const addTwo = function(num){
    return num + 2                                //type 2  but ye function se pehle declare ni kr skte h coz humne variable banaya hh
}
