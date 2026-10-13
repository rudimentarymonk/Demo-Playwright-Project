let price=500 //using let reassignation is possible
price=700
console.log(price)

//using ternary find odd or even
let a=21
let result= a%2==0 ? "Even" : "Odd"
console.log(result)

//find if a student is pass or fail using if else

let mark=85
if (mark>=40){
    console.log("Pass")
}else{console.log ("Fail")}


let username ="admin", password = "1234"
if (username!= "admin" && password!= "1234"){
    console.log("Incorrect creds")

}else{console.log("Credentias accepted")}

//Check if given number is divisible by 3 and 5
let number1=300
if(number1%3===0 && number1%5===0){
    console.log(number1+" Divisible by 3 & 5")
}else {console.log(number1+" not divisible by 3 & 5")}

//Traffic signals using Switch

let color="Green"
switch (color){
    case "Green" : console.log ("Go")
    break
    case "Yellow" :console.log ("Wait")
    break
    case "Red" : console.log ("Stop")
    break
    default: console.log ("Not an assigned color in traffic signal")   
}

//Using Switch print the browser used

let browser="Safari"
switch (browser){
    case "Chrome" : console.log ("Google Chrome is being used")
    break
    case "Firefox" : console.log("Mozilla Firefox is being used")
    break
    case "Edge" : console.log("Microsoft Edge is being used")
    break
    default : console.log("Not a recognized browser")

}
// Print multiplication table of 6 using for loop
let num=6
for(i=1; i<=10; i++){
    console.log(i+ "*" +num+ "="+ i*num)
}

//sum of 1 to 10 using for loop
let sum=0
for (j=1; j<=10; j++){
    sum=sum+j
}
console.log("Sum of numbers from 1 to 10 is "+sum)

//Find first number greater than 50 using while

let num2=0
while (num2<=50){
    num2++
}
console.log("The first number bigger than 50 is "+num2)

// from 1 to 20 how many even numbers 
let num3=1
let count=0
while(num3<=20){
    if(num3%2==0)
    count=count+1
    num3++

}
console.log("The number of even numbers between 1 & 20 is "+count)