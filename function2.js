//arrow function
const samplemessage =()=>{
    console.log("Arrow Function")
} 
samplemessage()

const sub =(a,b)=>{
    console.log(a-b)
}
sub(30,20)

let c,d
const add =(c,d)=>{
   let e=c+d
   return (e)
   
}
console.log(add(12,13))

//default parameter - In java script default parameter allow you to assign a default value to a function if no value is passed.
function greet(name="Adhyay"){
    console.log(name)

} 
greet("Akshay")
greet()