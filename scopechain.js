//if a variable isnot found in the current scope, javascript looks in the outer scope then the next outer scope and so on until it reaches the global scope

let name="Akshay"
//outer scope
function firstouter(){
    let age=25
    //inner scope
    function inner(){
        let city="Trivandrum"
        console.log(name)
        console.log(age)
        console.log(city)
    }
    inner()
}
firstouter()