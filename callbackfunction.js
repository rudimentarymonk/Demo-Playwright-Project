// a callback function is a function, that is passed as an argument to another function and is executed later usually after some task is completed
//Reusable, flexible, better organization,

function greet(){
    console.log("Hello")
}
function processuser(callbacker){
    console.log("Hello 2")
    callbacker()
}
processuser(greet)

//Callback hell- pyramid of doom