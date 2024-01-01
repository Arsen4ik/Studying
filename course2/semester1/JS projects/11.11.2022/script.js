
// новые методы массива

let array = [1,2,3,4,5,6,7]
console.log(array[array.length-1])

array.pop() // удалить последний элемент
array.push(10)

array.shift() // удалить 1 эл
array.unshift(13) // добавить 1 эл


console.log(array)

array.splice(2, 3, 'h', 'uy') // с чего начать и сколько удалить // и то что хочешь доь=бавиььб


console.log(array)
//
let arr = [1,2,3,4]

for(let i of arr){
    console.log(i += 5)
}

// задача 1

let arr = ['яблоко', "апельсин", "арбуз", "дыня"]

arr.splice(0,0, 1,2)
console.log(arr)

arr.splice(3,0,4)
console.log(arr)

arr.splice(arr.length-2)
console.log(arr)

// задача 2

let res = function(arr){
    for(let i = 0; i < arr.length; i++){
        if(typeof arr[i] == 'boolean'){
            arr[i].splice(i,0,'булевый', "тип")
        }
    }
}

let array = [1,'r',true,4,false]

console.log(res(array))
