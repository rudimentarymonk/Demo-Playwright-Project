class Atm{
    withdraw(amount){
        console.log(`${amount}`) //template literal format  - using back tick
    }                            //$ is used to attach a variable to a string
}
const objatm = new Atm()
objatm.withdraw(500)