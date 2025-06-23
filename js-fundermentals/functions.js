// functions

// regular functions

// syntax:

function functionName() {

}

// arrow functions

// synatax
const getName = () => {
    
}

//2. this keyword

// regular functions: have their own this keyword

const user = {
    name: 'nithin',
    getName: function () {
        console.log('hello', this.name)
    }
}

// since getName here is regular function call or method, we 
console.log(user.getName())  // willl display the name inside the object. here this refers to the calling site that is

// arrow functions: doesnt have their own this. they borrow it from its parent's scope (lexical scope)
const user1 = {
    name: 'nithin',
    getName : () => {
        console.log('hello', this.name)
    }
}

// 3. args

//regular  functions have their own args variable

function getArgs(args) {

}

// Arrow functions doesnt have args variable.