
// let array = [1,3,5,9,90]
// console.log(Math.floor(array.length/2))

// function func(arr, n){
//     let newArr = arr
//     let i = Math.floor(newArr.length/2)

//     while(newArr.length !== 1){
//         if(arr[i] < n){
//             newArr = newArr.splice(0, i)
//             console.log(newArr)
//         } else if (arr[i] > n){
//             newArr = newArr.splice(i, newArr.length)
//             console.log(newArr)
//         }
//     }
//     // return i
// }

// console.log(func(array, 1))

// let array = [1,3,5,9,90, 1000]
// console.log(Math.floor(array.length/2))

// function func(arr, n){
//     let newArr = arr
//     let i = Math.floor(newArr.length/2)

//     while(newArr.length == 1){
//         if (n > arr[i]-1){
//           newArr = newArr.splice(i)
//         } else if(n < arr[i]){
//             newArr = newArr.splice(0, i)
//         }   
//     }
//     // console.log(newArr)
//     return 4
// }

// console.log(func(array, 1))

let array = [1,3,5,7,9,11,13,15,17,19,21,23,25,27,29,31]
console.log(array)

function func(arr, n){
    let newArr = arr
    while(newArr.length > 1){
        let middle = Math.round(newArr.length/2)
        console.log(middle)
        if (n >= newArr[middle]){
          newArr = newArr.slice(middle)
        } else if(n <= newArr[middle]){
            newArr = newArr.slice(0,middle)
        }
      console.log(newArr)
    }
    
  console.log("индекс искомого нами числа:")
  return (newArr[0] == n ? arr.findIndex((res) => res == newArr[0]) : "данное число отсутствует в исходном массиве")
}
console.log(func(array, 27))