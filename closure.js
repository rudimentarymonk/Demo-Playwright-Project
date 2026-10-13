//it is a function that remembers variables from its outer function after the outer function has finished execution
function outer(){
    let name="Adhyay"
    function inner(){
        console.log(name)
    }
    return inner
}
const x=outer()
x()