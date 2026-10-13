//common js and es modules
//common js is older module system
//es is modern module system

create file Math.js
===================================
function add(){
    return a+b
}
module.exports=add()

create another file App.js
====================================
const add=require('./Math.js')
console.log(add(10,3))

====================================
import{add} from './math.js'
console.localStorage(addEventListener(21,32))