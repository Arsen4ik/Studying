
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
// }
// let stack1 = new Stack([1,5,9])
// console.log(stack1)

// stack1.Push(111)
// console.log(stack1)
// stack1.Pop()
// console.log(stack1)

// console.log(stack1.Peek())
// console.log(stack1.IsEmpty())
// console.log(stack1.Size())


// function Reverse(str){
//     let newArr = []
//     for(let i = str.length-1; i >= 0; i--){
//         newArr.push(str[i])
//     }
//     return newArr.join('')
// }
// console.log(Reverse('ass we can'))


// function CallStack(str){
//     let brRoundS = 0
//     let brRoundE = 0
//     let brSquareS = 0
//     let brSquareE = 0
//     let brFigureS = 0
//     let brFigureE = 0

//     for(let i = 0; i < str.length; i++){
//         console.log(i)
//         str[i] == '(' ? ++brRoundS : brRoundS;
//         str[i] == ')' ? ++brRoundE : brRoundE;

//         str[i] == '[' ? ++brSquareS : brSquareS;
//         str[i] == ']' ? ++brSquareE : brSquareE;

//         str[i] == '{' ? ++brFigureS : brFigureS;
//         str[i] == '}' ? ++brFigureE : brFigureE;
//     }
//     return (brRoundS == brRoundE && brSquareS == brSquareE && brFigureS == brFigureE) ? 'good' : 'bad'
// }
// console.log(CallStack('()[{]}{}'))

// ///////

// function CallStack(str){
//     let brRoundS = 0
//     let brRoundE = 0
//     let brSquareS = 0
//     let brSquareE = 0
//     let brFigureS = 0
//     let brFigureE = 0

//     // for(let i = 0; i < str.length; i++){
//     //     console.log(i)
//     //     str[i] == '(' ? ++brRoundS : brRoundS;
//     //     str[i] == ')' ? ++brRoundE : brRoundE;

//     //     str[i] == '[' ? ++brSquareS : brSquareS;
//     //     str[i] == ']' ? ++brSquareE : brSquareE;

//     //     str[i] == '{' ? ++brFigureS : brFigureS;
//     //     str[i] == '}' ? ++brFigureE : brFigureE;
//     // }
//     // return (brRoundS == brRoundE && brSquareS == brSquareE && brFigureS == brFigureE) ? 'good' : 'bad'



//     for(let i = 0; i <= str.length; i++){
//         if(str[i] == '(' || str[i] == '[' || str[i] == '{'){
//         let arr = []
//         let checker = ''

//         if(str[i] == '('){
//             checker = ')'
//         } else if(str[i] == '[') {
//             checker = ']'
//         } else {
//             checker = '}'
//         }
//             console.log(checker)
//             let ind = str.indexOf(checker, i+1)
//             console.log(ind)
//             if(ind == -1) {
//                 console.log('-1!')
//                 return false
//             }
//                 console.log(str[i])
//                 console.log(i)
//                 arr = str.slice(i, ind+1).split('')
//                 console.log(arr)
//                 console.log(arr.length)

//                 brRoundS = 0
//                 brRoundE = 0
//                 brSquareS = 0
//                 brSquareE = 0
//                 brFigureS = 0
//                 brFigureE = 0
//                 for(let j = 0; j < arr.length; j++){
//                 console.log(`this ${i}: ${j} ${arr} - ${arr[j]}`)



//                     // console.log(arr[j])
//                     arr[j] == '(' ? ++brRoundS : brRoundS;
//                     arr[j] == ')' ? ++brRoundE : brRoundE;
            
//                     arr[j] == '[' ? ++brSquareS : brSquareS;
//                     arr[j] == ']' ? ++brSquareE : brSquareE;
            
//                     arr[j] == '{' ? ++brFigureS : brFigureS;
//                     arr[j] == '}' ? ++brFigureE : brFigureE;

//                 }
//                 console.log(brRoundS)
//                 console.log(brRoundE)
//                 console.log(brSquareS)
//                 console.log(brSquareE)
//                 console.log(brFigureS)
//                 console.log(brFigureE)

//                 if(brRoundS !== brRoundE || brSquareS !== brSquareE || brFigureS !== brFigureE){
//                     console.log(checker)
//                     return false
//                 }

//             }
//     }
//     return true
// }

// let string = '[[]]([]{})'
// console.log(CallStack(string))

// // console.log(string.slice(string[2], string.indexOf(')')))
// console.log(string)



let arr = []
let check = ['}', ')', ']']
let res = true
function func2(str){
    console.log(str.length)
    if(str.length % 2 == 0){
    res = true
    for(let i = 0; i < str.length; i++){
        console.log(str[i])
        if(check.includes(str[i])){
            console.log(str[i])
            if(str[i] == ')' && arr[arr.length-1] == '(' || str[i] == '}' && arr[arr.length-1] == '{' || str[i] == ']' && arr[arr.length-1] == '['){
            console.log(arr)
                
                arr.pop()
            console.log(arr)

            } else {
                res = false
                break
            }
        } else {
            arr.push(str[i])
            console.log(arr)

        }
    }
    res = arr.length = 0 ? false : true
    console.log(arr.length)
    } else {
        console.log(arr.length)
        res = false
    }
    return res
}
console.log(func2('{[]}'))