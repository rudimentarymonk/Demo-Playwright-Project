class Car{
    display(){
        console.log("Welcome to Car class")
    }
}
const obj=new Car() // here Car() is constructor invoking
obj.display()       // Class name and constructor name should be the same

let brand,color
class Car1{
    constructor(brand,color)
    {
        this.brand=brand //this key word represents current object
        this.color=color
        console.log(brand,color)
    }
}
const obj1=new Car1("Audi","Forest Green")
const obj2=new Car1("BMW","Red")