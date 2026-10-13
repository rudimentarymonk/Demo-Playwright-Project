//a promise is an object that represents the enventual completion or failure of an asynchronous operation and its resulting value
//asynchronous operation - is a task that takes some time to complete. it allows the rest of the program to continue executing without waiting the task to finish.
//api call is an example
// methods in promise - then catch and finally
//then : when promise is fullfilled. to handle success
//catch: when the promise is rejected. to handle errors
//finally:  even when promise is covered or not. if there is and mandatory exceptions

const promise= new Promise((resolve,reject)=>{
    let success=true
    if(success){
        resolve("login successfully")
    }else{
        reject("reject")
    }
})
promise
.then(result=>console.log(result))
.catch(error=>console.log(error))
.finally(()=>console.log("finished"))