function primeornot(num){
    let count=0
    if (num<=1){
        console.log("Not a Prime Number") // 1 is not a Prime number

    }else{
    for(let i=2; i<num; i++ ){             //Start checking from 2 until less than num
        if (num%i===0){                    // if num is divisible by i with no reminder, then increase count value
            count++
        }}
        if (count===0){                     // if count is  0 then its a prime number else not
            console.log(num+" is a Prime Number")
        }
        else{console.log(num+" is Not a Prime Number")

        }
        
    }
}
primeornot(13)