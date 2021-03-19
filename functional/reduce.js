const numbers = [1, 2, 3, 4, 5, 6]

const sum = (total,el) => total + el
const total = numbers.reduce(sum)
console.log(total)

const avg = (total, el, i, arr) => {
    if(i === arr.length-1){
        return (total+el)/ arr.length
    }
    else{
        return total + el
    }
}

console.log(numbers.reduce(avg))




