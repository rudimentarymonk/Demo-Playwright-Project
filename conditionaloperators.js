//find odd and even
let num=20
if((num%2)===0)
{console.log ("EVEN")}
else
{console.log("odd")}

//find largest number
let num1 =15 , num2= 19
if (num1>num2)
{console.log (num1= " is greater than " +num2)}
else{
    console.log (num2+ " is greater than "+ num1)
    }

//To check pass and fail marks    
let mark=20
if (mark > 40)
{
    console.log("The score obtained is "+mark+ " greater than 40 hence PASS")
}
else 
    {
        console.log("The score obtained is "+mark+ " less than 40 hence FAIL")
    }

//Switch and break
let day=2
switch(day)
{
    case 1:
        console.log ("Monday")
        break
    case 2:
        console.log("Tuesday")
        break
    case 3:
        console.log("Wednesday")
        break
    case 4:
        console.log("Thursday")  
        break
    case 5:
        console.log("Friday")
        break      
    default:
        console.log("Invalid Day")    
}