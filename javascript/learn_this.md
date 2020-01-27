# 学习Javascript this笔记

## what's this  

* The object that is executing the current function
* 'this' can be described in the object method or global function(regular function)

```javascript
function sayHello(){
    console.log(this);//window object
}

// but we can use the new to reference this to this object , so 'this' change its area at this time


const obj = {
    name:'Robert Xu',
    tags: ['a','b','c'],
    sayHello(){
        console.log(this)// object
    },
    iterTags(){
        this.tags.foreach(function(tag){
            //undefine
            console.log(this.name,tag);
        })
    },
    iterTagsWorks(){
        this.tags.foreach(function(tag){
            console.log(this.name,tag)
        },this);
    }
}
```
