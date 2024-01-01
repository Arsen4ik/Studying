// задание 1

function func1(n){
    if(n % 7 == 0){
        console.log(true)
    } else {
        console.log(false)
    }
}
func1(49)

// задание 2

let array = [1,2,3,4]

function func2(arr, n){
    let res = []
    for(let i = 0; i < arr.length; i++){
        res[i] = arr[i]*n
    }
    return res
}

let result = func2(array,3)
console.log(result)

// задание 3

let array = ['10','Строка','5g','15','05']

function func3(arr){
    let res = 0
    for(let i = 0; i < arr.length; i++){
        if(!isNaN(+arr[i])){
            res += (+arr[i])
        }
    }
    return res
}
let result = func3(array)
console.log(result)

// задание 4

let array = [1,3,5,7,9]

function func4(arr){
    let res = []
    for(let i = arr.length-1; i >= 0; i--){
        res.push(arr[i])
        // console.log(res[i])
    }
    return res
}

let result = func4(array)
console.log(result)

// задание 5

let array = [1,4,235,7]

function func5(arr, call){
    for(let i = 0; i <= arr.length; i++){
        if(call(arr[i])){
            return true
        }
    }
    return false
}

let result = func5(array, ((el) => el%5 == 0))
console.log(result)