// JS hoisting

// its a process of accessing a variable before its been declared.

// var hoisting

// All variables declared with var, will get hoisted, but its value will always be undefined.
console.log(age)
var age = 20

// let hoisting
// all the variables declared with let and consts are hoisted, but they all will be in temporall dead zone.

console.log(name) // will throw reference err, because the variable will be in temporal dead zone.
let name = 'Akshay'

// function hoisting

// all the regular functions get hoisted.

console.log(getName())

function getName() {
    return 'hello'
}

console.log(getName())

// function  expression hoisting

console.log(greet()) // since the variable is declared in let, it will give temporal dead zone, so it will through an err.
// output: Uncaught ReferenceError: greet is not defined

let greet = function () {
    return 'hello'
}

console.log(getAge())
// output: Uncaught TypeError: undefined is not a function

var getAge = function () {
    return 1
}