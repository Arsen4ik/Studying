// задание 1

function func1(obj){
    let res = 0
    for(let i in obj){
        res += obj[i]
    }
    return res
}

let obj = { 
    price1: 100, 
    price2: 150, 
    price3: 200, 
    price4: 100,
    price5: 150, 
    }
    
console.log(func1(obj))

// задание 2

let array = [ 
    {id: 1, name: 'apple'}, 
    {id: 2, name: 'watermelon'}, 
    {id: 3, name: 'qiwi'}, 
    {id: 4, name: 'lemon'} 
    ]
function func2(arr){
    let newArr = []
    for(let i of arr){
        newArr.push(Object.values(i))
    }
    return newArr
}   
console.log(func2(array)) 

// задание 3

function logString(...arg){
    let res = ''
    for(let i of arg){
        res += i += ' '
    }
    return res
}
console.log(logString("Hello", "my", "world!"))

// задание 4

function checkObj(obj){
    for(let i in obj){
        if(i == "particle"){
            console.log('s')

            return true
        }
    }
    return false
}

let obj1 = {
    id: 1,
    particle: true
}
let obj2 = {
    id2: 1,
    name: 'w'
}

console.log(checkObj(obj1))
console.log(checkObj(obj2))

// задание 5

function generateArray(arr){
    for(let i = 0; i < arr.length; i++){
        if(typeof arr[i] == 'object'){
            arr.splice(i, 1, Object.values(arr[i]))
        }
    }
    return arr
}

let array = [[1], {id: 40, age: 15}, [100], [300], {part: 10}]
console.log(generateArray(array))