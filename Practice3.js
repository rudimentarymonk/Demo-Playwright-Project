function cartAnalysis(){
    let prices =[123,500,324,442,138]
    let total=0
    let highest = prices[0]
    for(i=0; i<=4; i++){
     if(i<=4)
        console.log("Individual price of item "+(1+i)+" : "+ prices[i])
        total=total+prices[i]
        console.log("Price of current item + previous item : " + total)    
     }
    for(j=1;j<=4; j++){
     if(prices[j]>highest){
        highest=prices[j]
     }    
     }
     console.log("Highest price is: "+ highest)

    let count =0
    for(k=0;k<=4; k++){
     if(prices[k]>200)
        count +=1
     }
     console.log("Prices above 200 are: "+count)


}
cartAnalysis()
