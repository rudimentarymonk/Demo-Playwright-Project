function sample(){
    console.log("Hello")
}
sample()

//create two functions ith addition and substraction

let a=33
let b=50
function addition(){
    console.log(a+b)
}
addition()
function substraction(){
    console.log(b-a)
}
substraction()

//find a number is even or odd
 function even(){
    if (a%2==0){
        console.log("Even")
    }else {console.log("odd")}
 }
 even()

 //factorial of 5
  function fact(){
 let c=5
 let num = 1
 while(c>0){
    num=num*c
    c--
 } console.log(num)
 }

 fact()

 //find bigger number
 function largenum(){
    let d=46, e=76
    if(d>e){
        console.log(d+" larger than "+e)
    }
    else {console.log (e+ " larger than "+d)}
 }
 largenum()

 //parameterized function
 function message(yourmessage){
     console.log(yourmessage)
 }
 message(50)

 //addition of two numbers using parame

 function sum(i,j){
     console.log(i+j)
 }
 sum(31,41)

 //find positive or neg

 function pozneg(l,m){
    if(l>0){
        console.log(l+" is a positive number")
    }else {console.log(l+ " is a negative number")}
    if(m>0){
        console.log(m+" is a positive number")
    }else {console.log(m+ " is a negative number")}

 }
 pozneg(-3,4)

 //function with return type

 let r,s
 function addition(r,s){
    let t=r+s
    return t
   
 }console.log(addition(10,20))