// задание 1
let array = [1, 3, 14]

function changeElem(arr, callBack){
    let res = []

    for(let i = 0; i < arr.length; i++){
        res[i] = callBack(arr[i])
    }
    return res
}

let a = changeElem(array, (elem) => elem ** 2)
console.log(a)
// задание 2
let array = [3,0,5]

function func(arr, callBack){
    let res = true
    for(let i = 0; i<= arr.length; i++){
        if(callBack(arr[i])){
            return res = false        
        }
    }
    return res = true
}

a = func(array, (elem) => elem % 2 == 0)
console.log(a)