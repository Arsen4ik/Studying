// let obj = new Object({
//     name: 'Arsen',
// })

let obj = {
    name: 'Arsen',
    'my age': 17,
    isJob: true,
    num: [1,2,3]
}
console.log(obj)

// взаимодействие с объектами

let obj2 = {
    name: 'Arsen',
    age: 17,
    isJob: true,
    num: [1,2,3]
}
console.log(obj2)

// console.log(obj['isJob'], obj['age'])
console.log(obj2.name, obj2.age)

// создание и изменение свойств объектов

let obj3 = {
    name: 'arsen',
    age: 17,
}
console.log(obj3)

obj3.isJob = true
console.log(obj3)

obj3.name = 'Arsen'
console.log(obj3)

delete obj3.age
console.log(obj3)

// объекты и массивы

let arr = [1,2,3]

let obj4 = {
    char1: 1,
    char2: 2,
    char3: 3
}

console.log(arr[2])
console.log(obj4.char3)

// циклы по объектам

let obj = {
    name: 'Arsen',
    age: 17,
    isJob: true,
}

for(let i in obj){
    console.log(obj[i])
}

// задача 1

let obj = {
    char1 : 1,
    char2 : 'string',
    char3 : 3,
    char4 : true,
    char5 : 'false',
    char6 : 1,
}

let newObj = {}
for(let i in obj){
    if(typeof obj[i] == 'number'){
        newObj[i] = obj[i]
        // console.log(`${i}: ${obj[i]}`)
    }
}
console.log(newObj)

// задача 2

let obj = {
    char1 : 1,
    char2 : 'string',
    char3 : 3,
    char4 : true,
    char5 : 'false',
    char6 : 1
}

for(let i in obj){
    if(i[i.length-1] % 2 == 0){
        console.log(obj[i])
    }
}
// for(let i in obj){
//     if(i.slice(-1) % 2 == 0){
//         console.log(obj[i])
//     }
// }


/// задание 3

let obj = {
    name: 'Alex',
    age: 25,
    isJob: true,
    isJob2: true,
    isJob3: true,
    some: 'text'
}
let oneB = 0;

for(let i in obj){
    if(typeof obj[i] == 'boolean' && oneB < 1){
        delete obj[i]
        // break
        oneB = 1
    }
}
console.log(obj)

// сравнение объектов


let obj1 = {
    name: 'test',
    salary: 1000
}
// let obj2 = {  
//     name: 'test',
//     salary: 1000
// }

let obj2 = obj1
obj2.f = 'g'
console.log(obj2)
console.log(obj1)

console.log(obj1 == obj2)


console.log(JSON.stringify(obj1) == JSON.stringify(obj2))

// задание 4
let createObject = function(n){
    let obj = {}
    for(let i = 1; i <= n; i++){
        obj[`char${i}`] = i*10
    }
    return obj
}


console.log(createObject(5))

// методы класса Object

let obj = {
    name: 'alex',
    salary: 1000,
    isJob: true
}
console.log(Object.keys(obj))
console.log(Object.values(obj))
console.log(Object.entries(obj))

// задача 5

// номер 1
function func1(obj){
    let arr = []
    for(let i in obj){
        arr.push(i)
    }
    return arr
}
let obj1 = {
    name: 'Arsen',
    age: 17
}
let obj2 = {
    name32: 'Fedor',
    age32: 121
}
console.log(func1(obj1))
console.log(func1(obj2))

// номер 2

function func2(obj){
    let arr = []
    for(let i in obj){
        let arrSmall = []
        arrSmall.push(i)
        arrSmall.push(obj[i])
        arr.push(arrSmall)
    }
    return arr
}
let obj3 = {
    name: 'Arsen',
    name2: 'Arsen',
    age: 17
}
let obj4 = {
    name32: 'Fedor',
    age32: 121
}
console.log(func2(obj3))
console.log(func2(obj4))