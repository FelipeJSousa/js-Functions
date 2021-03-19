const students = [
    {name: 'Jake', score: 6.4},
    {name: 'Susan', score: 8.6},
    {name: 'Emma', score: 9.4},
    {name: 'Peter', score: 9.1}
]

const greatStudent = stu => stu.score >= 9
const getScore = el=> el.score
const avg = (total, el, i, arr) => {
    if(i === arr.length-1){
        return (total+el)/ arr.length
    }
    else{
        return total + el
    }
}

console.log(students
                .filter(greatStudent)
                    .map(getScore)
                        .reduce(avg)
)