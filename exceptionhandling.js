//try catch and finally
//A code that might throw an error
//try{} catch finally or try finally
try{
    let result=10/0
    console.log(result)
    console.log("Name")
}catch(error){
    console.log(error.message)
}finally{
    console.log("execution finished")
}