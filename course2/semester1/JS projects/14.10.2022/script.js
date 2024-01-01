let sum = (num) => num + 100
console.log(sum(4))


let some = function quad(num){
    return num ** 2
   }
   
   console.log(some(4))


   let handler = () => console.log('g')
   console.log(handler(10))

   sum(5,10)

   let sum = (ar1,ar2) => console.log(ar1+ar2)
   
   console.log(sum)

   function func(arr){
    return arr[0]
}
console.log(func([1,2,3]))


function handler(array, callback){
    let newArray = []
    for (let i = 0; i < array. length; i++){
    if (callback(array)){
    return true
    }
    return false
    }
}