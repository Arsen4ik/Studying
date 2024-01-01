// задание 1


function func(arr){
    let res = 0
    for(let i = 0; i < arr.length; i++){
        res += arr[i]
    }
    console.log(res)
}
let array = [1,2,3,4,5]
func(array)

//  задание 2


// function func2(a){
//     let res = 0
//     for(let i = 0; i < a; i+=5){
//         res += i
//     }
//     console.log(res)
// }

// func2(19)
function func2(a){
    let res = 0
    for(let i = 1; i <= a; i++){
        if(i % 5 == 0){
        res += i
        }
    }
    console.log(res)
}

func2(19)

// задание 3


function func3(arr){
    let num = 0
    let countNum = 0


    for(let i = 0; i < arr.length; i++){
        if(typeof arr[i] == 'number'){
            num += array[i]
            countNum++
        }
    }
    console.log(num / countNum)
}

array = [1,2,'r',3,4,5,true]
func3(array)

// задание 4

// function func4(arr){
//     let res = []
//     for(let i = 0; i < arr.length; i++){
//         if(typeof arr[i] !== 'number'){
//             res += arr[i] += ' '
//         }
//     }
//     console.log(res)
// }
// let array = [1,true,2,'text', 2, null, -100, undefined]
// func4(array)
function func4(arr){
    let res = []
    for(let i = 0; i < arr.length; i++){
        if(typeof arr[i] !== 'number'){
            res[res.length] = arr[i]
        }
    }
    console.log(res)
}
let array = [1,true,2,'.!.', 2, null, -100, undefined]
func4(array)