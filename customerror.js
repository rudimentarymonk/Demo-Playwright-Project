// throw new Error("error found") -- here error is a predefined class
//custom error is an error that is customized according tto our need
//create class for custom error
class Usernotfounderror extends Error{
    constructor(message){
        super(message) //super keyword is used to refer the parent-class object
    }
}
function login(username){
    if(username!=="admin"){
        throw new Usernotfounderror("Invalid Username")
    }
    else{console.log("login successfully")}
}
login("admin")