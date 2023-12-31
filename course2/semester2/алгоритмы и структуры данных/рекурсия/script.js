function func(n){
    if(n <= 1){
        return n
    } else {
        return func(n-1)+func(n-2)
    }
}
console.log(func(1))

// task1

function func1(n){
    if(n <= 1){
        return 1
    } else {
        return n * func1(n-1)
    }
}
console.log(func1(3))

// task2

function func2(a, n){
    if(n < 1){
        return 1
    } else {
        return a * func2(a, n-1)
    }
}
console.log(func2(3,3))

// task 3

let counter = 1
function func3(a, n){
    if(counter == n){
        return a
    } else {
        ++counter
        return a * func3(a, n)
    }
}
console.log(func3(2,3))

// task 4

// function func4(n, m){
//     while(m !== n){
//         if(m > n){
//             m -= n
//         } else {
//             n -= m
//         }
//     }
//     return m
// }
// console.log(func4(25, 10))

function func4(m, n){
    return m == n ? m : (m > n ? func4(m-n, n) : func4(m, n-m))
}
console.log(func4(15, 3))

// task5


// function func5(string, letter){
//     let res = 0
//     let str = string.split('')
//     for(let i = 0; i < str.length; i++){
//         str[i] == letter ? ++res : res;
//     }
//     return res
// }
// console.log(func5('hello world o 1', 'o'))

let res = 0
function rec(string, letter){
    // console.log('новая итерация')
    string = Array.from(string)
    // console.log(typeof string)    
    // console.log(string)
    string[string.length-1] == letter ? ++res : res;
    // console.log(res)
    // console.log(string.pop())
    string.pop()
  // console.log(string)
    return (string.length == 0 ? res : rec(string, letter))
}
console.log(rec('hello world o 1', 'o'))

// task 6

function func6(arr){
    return (arr.length == 1 ? arr.pop() : arr.pop() + func6(arr))

}
let array = [1,3,5,7,4]
console.log(func6(array))

// task 7

function result(number){
    let newArr2 = []
    let newArr3 = []
    
    function func7_1(num){
        if(num < 0){
            return newArr2
        } else {
            newArr2.push(Math.pow(2, num))
            return func7_1(num-1)
        }
    }
    let res = func7_1(number).slice(1)
    // console.log(res)
    
    function func7_2(arr){
        if(arr.length == 0){
            return newArr3
        } else {
            let step = arr.shift()
            if(number >= step){
                newArr3.push(1)
                number -= step
              } else {
                newArr3.push(0)
              }
            return func7_2(arr)
        }
    }
    return parseInt(func7_2(res).join(''))
}
console.log(result(9))


/// task-0

let counter = 0
function rec(string){
    string = Array.from(string)

    if(counter == 0 && ((!Number(string[string.length-1]) || string[string.length-1] == '-'))){
        return false
    }

    if((string[string.length-1] == '-' && string[string.length-2] == '-')
    || (string[string.length-1] == '-' && string[string.length-2] == '+')
    || (string[string.length-1] == '+' && string[string.length-2] == '-')
    || (string[string.length-1] == '+' && string[string.length-2] == '+')){
        return false
    }

    if(Number(string[string.length-1])){
        console.log(string[string.length-1])
        ++counter
    }
    string.pop()
  if(string.length == 0 ){
      return true
  } else {
    return (string[string.length-1] == '+' || string[string.length-1] == '-' || Number(string[string.length-1])) ?  rec(string) : false;
  }
}
console.log(rec('171+456-8'))