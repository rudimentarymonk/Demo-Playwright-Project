class Playwright{
    learn(){
        console.log("Learning playwright")
    }
}
class Javascript extends Playwright{
    learn(){
        super.learn()
        console.log("Learning javascript")
    }
}
const objjavas = new Javascript()
objjavas.learn()

//const objplay = new Playwright()
//objplay.learn()