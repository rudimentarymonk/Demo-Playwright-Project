//object literal format
let student= {
    name:"Akshay",
    age:30,
    greet(){
        console.log("hello")
    }
}
console.log(student.name, student.age)
student.greet()

//using new Object()
const employee = new Object()
employee.name="Adhyay"
employee.salary=500000
console.log(employee)

//json Object creation": It is a text format used to store and exchange data. It consists of key value pair
const students={
    "Name": "Vedant",
    "Age" : 0,
    "Department" : "Science"
    
}
console.log(students)