let name = "Akshay"
let marks = 62
const passingMarks="40"
if (marks>=passingMarks)
{console.log("PASS")
}
else (console.log("FAIL"))
if (marks>=90)
{
    console.log ("Grade: S")
}
else if (marks>=80 && marks<90)
{
    console.log ("Grade: A")
}
else if (marks>=70 && marks<80)
{
    console.log ("Grade: B")
}
else if (marks>=60 && marks<70)
{
    console.log ("Grade: C")
}
else if (marks>=50 && marks<60)
{
    console.log ("Grade: D")
}
else {console.log ("Grade: E")}
let Result= marks>=50 ?"Scored above 50%" : "Scored below 50%"
console.log(Result)

if (marks%2==0)
{console.log("Even marks")}
else if (marks%2==1){
    console.log("Odd marks")
}