// Create a range function
// range(5) -> [1, 2, 3, 4, 5]
// range(6, 11) -> [6,7,8,9,10,11]
// range(10, 19, 2) -> [10,12,14,16,18]
// range(6,2) -> [6, 5, 4, 3, 2]
// range(8, -3, 4) -> [8, 4, 0]

// function range_example(...nums){
//     console.log(nums)
//     for (let i = 1; i < nums[0]; i++) {
//         console.log(i);
//     }
// }

// range_example(5)

// function range(a,b,c){
//     const max = 5
//     const inicio = b === undefined ? a - (max - 1) : a
//     const fim = b === undefined ? a : b
//     const passo = c === undefined ? 1 : c
//     const nums = []
//     if(inicio<fim){
//         for(let i = inicio; i <= fim;){
//             nums.push(i)
//             i = i+passo
//         }
//     }
//     else {
//         for(let i = inicio; i >= fim;){
//             nums.push(i)
//             i = i-passo
//         }
//     }
//     return nums
// }

// console.log(range(8,-3,4))

function range(a,b,c = 1){
    const inicio = b === undefined ? 1 : a
    const fim = b === undefined ? a : b
    const nums = []

    for(let i = inicio; inicio <= fim ? i <= fim : i >= fim ; inicio <= fim ? i += c : i-=c){
        nums.push(i)
    }
    
    return nums
}

// range(5) -> [1, 2, 3, 4, 5]
console.log(range(5))
// range(6, 11) -> [6,7,8,9,10,11]
console.log(range(6,11))
// range(10, 19, 2) -> [10,12,14,16,18]
console.log(range(10,19,2))
// range(6,2) -> [6, 5, 4, 3, 2]
console.log(range(6,2))
// range(8, -3, 4) -> [8, 4, 0]
console.log(range(8,-3,4))

