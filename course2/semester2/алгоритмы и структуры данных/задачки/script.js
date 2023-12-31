
// class Stack {
//     stack = []
//     constructor(arr){
//         this.stack = arr
//     }
//     Push(item){
//         this.stack.push(item)
//     }
//     Pop(){
//         this.stack.pop()
//     }
//     Peek(){
//         return this.stack[this.stack.length-1]
//     }
//     IsEmpty(){
//         return this.stack.length == 0 ? 'it is empty' : 'it is not empty'
//     }
//     Size(){
//         return this.stack.length
//     }

//     func(){ 
//         // console.log(this.stack)
//         return this.func2(this.stack)
//     }
//     func2(str){
//         let arr = []
//         let check = ['}', ')', ']']
//             let res = true
//             for(let i = 0; i < str.length; i++){
//                 console.log(str[i])
//                 if(check.includes(str[i])){
//                     console.log(str[i])
//                     if(str[i] == ')' && arr[arr.length-1] == '(' || str[i] == '}' && arr[arr.length-1] == '{' || str[i] == ']' && arr[arr.length-1] == '['){
//                     console.log(arr)
                        
//                         arr.pop()
//                     console.log(arr)
        
//                     } else {
//                         res = false
//                         break
//                     }
//                 } else {
//                     arr.push(str[i])
//                     console.log(arr)
        
//                 }
//             }
//             res = arr.length > 0 ? false : true
//             return res
//         }
// }
// let stack1 = new Stack(['{', '(', ')', '}'])
// console.log(stack1)

// stack1.Push(']')
// console.log(stack1)
// console.log(stack1.func())

// stack1.Pop()
// console.log(stack1)

// console.log(stack1.Peek())
// console.log(stack1.IsEmpty())
// console.log(stack1.Size())

// console.log(stack1.func())

// let arr = []
// let check = ['}', ')', ']']
// function func2(str){
//     let res = true
//     for(let i = 0; i < str.length; i++){
//         console.log(str[i])
//         if(check.includes(str[i])){
//             console.log(str[i])
//             if(str[i] == ')' && arr[arr.length-1] == '(' || str[i] == '}' && arr[arr.length-1] == '{' || str[i] == ']' && arr[arr.length-1] == '['){
//             console.log(arr)
                
//                 arr.pop()
//             console.log(arr)

//             } else {
//                 res = false
//                 break
//             }
//         } else {
//             arr.push(str[i])
//             console.log(arr)

//         }
//     }
//     res = arr.length > 0 ? false : true
//     return res
// }
// console.log(func2('{()}'))


class Stack {
    stack000 = []
    constructor(arr){
        this.stack = arr
    }
    Push(item){
        this.stack.push(item)
    }
    Pop(){
        this.stack.pop()
    }
    Peek(){
        return this.stack[this.stack.length-1]
    }
    IsEmpty(){
        return this.stack.length == 0 ? 'it is empty' : 'it is not empty'
    }
    Size(){
        return this.stack.length
    }
}
let stack = new Stack([])

let newArr = []
function func(arr){
    stack.stack000.push(arr[0])

    for(let i = 1; i < arr.length; i++){
        // console.log(arr[i])
        // console.log(arr[i-1])
        if(arr[i] < arr[i-1]){
            stack.stack000.push(arr[i])
            // console.log(stack)

        } else {
            newArr.push(stack.stack000.pop())
            stack.stack000.push(arr[i])
        }
    // console.log(stack)
    // console.log(newArr)


    }
    // let small = 100000
    // for(let i of stack) {
    //     small > stack[i] ? small = stack[i] : small
    // }
    for(let i = stack.stack000.length-1; i >= 0; i--){
        newArr.push(stack.stack000[i])
    }
    return newArr
}
console.log(func([4,1,3,2]))