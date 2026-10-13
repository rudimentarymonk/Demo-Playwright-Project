class Animal{
    eat(){
        console.log("Animal is eating")
    }
}

class Dog extends Animal{
    //extends keyword is used to inherit data from another class
    bark(){
        console.log("Dog eats dog food")
    }
}
const bowbow=new Dog()
bowbow.bark()
bowbow.eat()
