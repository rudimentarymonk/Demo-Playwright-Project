let score = [78, 65, 82, 91, 74, 88]
let lowest = score[0]
let highest = score[0]
let current = 0
for (let i=1; i<=score.length; i++){
    if (lowest >score[i]){
        lowest = score[i]
    }
}
console.log("The lowest score is: " ,lowest)
for (let j=0; j<=score.length; j++){
    if (highest < score[j]){
        highest = score[j]
    }
}
console.log("The highest score is: ", highest)

let count = 0 
for (let k=0; k<=score.length; k++){
if(score[k]>77){
    count++
}
}
console.log("The number of scores greater than 75 is: ",count)

let total=0, gavg=0, l=0
for(l=0; l<score.length; l++){
    total=total+score[l]
    
}
console.log("Total score: ", total)

let avg=total/(score.length)
for(let m=0; m<=score.length; m++){
if(score[m]> avg){
       gavg++
    }}

console.log("Average scoe: ", avg)
console.log("No. of scores greater than Average : ", gavg)

