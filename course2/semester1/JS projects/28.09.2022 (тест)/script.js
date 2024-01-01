let i = 1
do {
    console.log(i)
    i++
} while(i < 5)

let array = [1,2,3]
array[array.length] = 'new el'
array

let i = 5
let j = -4

while(i > 0 && j < 1){
    console.log(i,j)
    j++
    i--
}

let arr = [1,2,3,4,5]
for(let i = 0; i < arr.length; i++){
    if(i % 2 == 0){
        console.log(i)
        continue
    }
    console.log(i)
}

let users = [
    [1, 'Alex', ['work', 1500]],
    [2, 'Dima', ['work', 2000]],
    [3, 'Vika', ['hime', 'none']]
]

console.log(users[1][2][1])