// let vs const vs var

// 1. scope

// let and const is block scoped
// var is function scoped
{
    let age = 10
    var name = 'nithin'
    const isAdult = true
}

console.log(age) // will throw err. // age is not defined, same with const as well.
console.log(name) // will print nithin since tis function scoped
console.log(isAdult) // will throw err: / since its block scoped.

// 2. reassigning a value

// let and var can be reassigned
// const cannot be reassigned

let userAge = 23
var userName = 'nithin'
const userAddress = 'some address'

userAge = 24
userName = 'virat'
userAddress = 'update address'

console.log(userAge, userName) // will be reassigned with the latest value.
console.log(userAddress) // will not be reassigned it will throw err.


// 3. Re-declaring a value

// var can be re-declared

// let and const cannot be re-declared

var nName;
var nName;

// let nAge;
// let nAge;

// const nAge;
// const nAge;