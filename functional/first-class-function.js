// A programming language is said to have
// First-class functions when function in
// that language are treated like any other
// variable

function add (a,b){
    return a + b
}

const sub = function (a,b) {
    return a - b
}

const mult = (a,b) => {
    return a * b
}

const div = (a,b) =>  a / b

console.log(add(10,20))
console.log(sub(10,20))
console.log(mult(10,20))
console.log(div(10,20))