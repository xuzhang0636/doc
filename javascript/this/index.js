var object = {
    name : 'Robert Xu',
    tags : ['a','b','c'],
    showTags(){
        this.tags.forEach(function(tag){
            console.log(this.name,tag)
        },this);
    }
}
function sayHell(){
    console.log(this)
}
const a = new sayHell()
object.showTags()