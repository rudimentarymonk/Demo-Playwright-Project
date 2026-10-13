//this keyword refers to the object that is currently executing the function. Its value depends on how the function is called.
const person={
    name: "Akshay Mohan",
    greet(){
         console.log(this.name)
    }
}
person.greet()