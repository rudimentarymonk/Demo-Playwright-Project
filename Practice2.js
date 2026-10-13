let Studentname="Akhi Raj", Age= 15
let Eng = 70, Mat= 35, Sci=76, JS= 21, Aut=65
let total= (Eng+Mat+Sci+JS+Aut)
let avg = ((total/5))
console.log("Total marks obtained by :"+Studentname+ " is: "+total)
console.log("Average marks obtained by :" +Studentname+ " is: "+avg)

if(avg>=50 && Eng>=35 && Mat>=35 && Sci>=35 && JS>=35 && Aut>=35){
    
    console.log("The Result is PASS")
}else{
    console.log("The Result is FAIL")
}

function checkGrade(subName, marks){
    let grade=""
    if (marks>=90){
        grade = "A"
    } else if (marks>=80){
        grade = "B"
    }else if (marks>=70){
        grade ="C"
    }else if (marks>=60){
        grade = "D"
    }else if (marks>=50){
        grade ="E"
    }else grade = "F"

    //console.log(`${subName}: Grade =${grade}`)
    console.log("Grade of "+subName +" is: "+ grade)

}
checkGrade("English", Eng)
checkGrade("Maths", Mat)
checkGrade("Science", Sci)
checkGrade("JavaScript", JS)
checkGrade("Automation", Aut)

let marks= [70,35,76,21,65]
