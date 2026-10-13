let n=1
while(n<=20){
    if(n%2===0)
   { console.log(n)}
    n++
}

//sum of even numbers between 0 to 20
let m=1
let sum=0
while(m<=20){
    if(m%2===0){
        sum=sum+m
    }
    m++
}
    {console.log(sum)}
    
//count how many numbers are between 1 and 50

let a=0
let total=0
while(a<=50){
    total=total+1
    a++

}
    console.log(total)

//using while loop find factorial; of 6

let b=6
let totalb=1
while(b>1){
    totalb*=b
    b--
}
console.log(totalb)

//create an object student and print all keys

let student={
    Name:"Akshay",
    Reg:20,
    Batch:"Science",
    Class: 12
}
for(let key in student){
console.log(key)
//console.log(employee[key])
}

//create an object CAR and print all values

let car={
    Name:"Nissan Magnite",
    Registration: 2025,
    RegNo: "KL01202608",
}
for(let key in car){
    console.log(key)
    console.log(car[key])
}

//count properties in for in

let employee={
    Name : "Vedant",
    Age : 25,
    Role : "CEO"
}
let count=0
for(let key in employee){
    count++
    
}
console.log(count)