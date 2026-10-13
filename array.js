let course=["MBA","Btech","PhD", "BE"]
console.log(course)

//empty array format
let numbers=[]
numbers[0]=1500
numbers[1]=2000
numbers[2]=2500
numbers[3]=3000
console.log(numbers)

//array constructor
let colors=new Array("yellow","blue","green") //new Array
console.log(colors)

//creating array with a specific size
let myArray = new Array(5)
console.log(myArray)
console.log(myArray.length)

//creating array using array of function Array.of()
let num=Array.of(10,20,30)
console.log(num)

//push function
let myNum=[]
myNum.push(10)
myNum.push(11)
myNum.push(12)
myNum.push(13)
console.log(myNum)

//array iteration using for loop
let fruits=["apple","orange","grapes"]
for(let i=0; i<3; i++){       //index 0,1,2
    console.log(fruits[i])
}

//array iteration using forof loop
let fruits1=["apple","orange","grapes"]
for(let fruit of fruits1){     //storing value in fruit
    console.log(fruit)
}

//array iteration using foreach loop
let fruits2=["apple","orange","grapes"]
fruits2.forEach(function(fruit){   //forEach is an array function - instead of using conditions in For loop
    console.log(fruit)             //function(fruit) is callback function
})

//for in
let fruits3=["apple","orange","grapes"]
for(let index in fruits3){
    console.log(index,fruits3[index])
}

//Map function - Creating new array based on existing array by transorming the values
let numbers1=[1,2,3,4]
let double= numbers1.map(num=>num*2)
console.log(double)

//filter function
let unfilteredArray = [10,20,30,40]
let filteredArray=unfilteredArray.filter(num=>num>50)
console.log("filtered array ", filteredArray)

//find function
let findArray =[35,45,55,65]
let find2Array = findArray.find(num=>num>70)
console.log("find function ", find2Array)

//POP function
let languages=["java", "python", "C++"]
languages.pop()
console.log(languages)

//unshift function
languages.unshift("Ruby")
console.log(languages)

//shift function
languages.shift()
console.log(languages)

//splice function   - to add elements in between
languages.splice(0,2,"New") //splice(add index,del index)
console.log(languages)

let newLan =["Eng","Mal","Tam","Hin","Tel"]
newLan.splice(2,1)
console.log(newLan)

let numbers2= [10,20,30,40,50]
numbers2.splice(2,1,100)
console.log(numbers2)

//includes function - to check value includes or not
console.log(numbers2.includes(100))
console.log(numbers2.includes(120))

//index of  -- to get index of an element
 console.log(numbers2.indexOf(40))
  console.log(numbers2.indexOf(740))

//Reverse function
numbers2.reverse()
console.log(numbers2)  