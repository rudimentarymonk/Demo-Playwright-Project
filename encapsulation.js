//wrapping data into a single unit
class Student{
    #mark = 90 // # makes it a pvt class field
    getmarks(){
        return this.#mark
    }
}
const objmarks = new Student()
console.log(objmarks.getmarks())

//console.log(objmarks.#mark)