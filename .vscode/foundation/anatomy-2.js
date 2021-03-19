// Anonymous function
(
    function (a, b, c) {
        return a + b + c
    }
)

// Function expression
var sum = function (a, b) {
    return a + b
}

console.log(sum(5,5))

let x = 3
console.log(x)

x= sum
console.log(x(1,1))