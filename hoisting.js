//Hoisting is a behaviour of moving declaration to the top of their scope before code execution.
console.log(a)
var a=10

//const and let can be hoisted but will be in temperal dead zone until their declaration is reached
//console.log(b)
let b=20
console.log(b)

//console.log(c)
const c=30
console.log(c)

greet()
function greet(){
    console.log("hello")
}