//for loop
//even numbers
for (let k=1; k<=20; k++)
{
    if(k%2==0)
    console.log(k)
}

//odd numbers
for(let l=1; l<=20; l++)
{
    if(l%2==1)
        console.log(l)
}

//factorial of 5

let fact=1
for (let m=1; m<=5; m++)
{
    fact*=m
}
console.log (fact)

//While Loop
let n=1
while(n<=5){
    console.log(n)
    n++
}
//for IN
let employee={
    name:"Akshay",
    age:33,
    role:"Senior Engineer"
}
for(let key in employee){
console.log(key)
console.log(employee[key])
}
//CONTINUE
for(let a=1; a<=5; a++)
{
    if(a===3){
        continue
    }
    console.log(a)
}