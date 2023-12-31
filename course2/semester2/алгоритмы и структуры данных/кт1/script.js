let array = [1,1,1,2,3,4,4,5,6,7,7,8,8]
console.log(array)

function func(arr, n){
  let middle = Math.round(arr.length/2)
  // console.log(`${middle}: ${arr[middle]}`)
  let start = arr.findIndex((el) => el == n)
  let end = arr.findIndex((el) => el > n)-1
    
    if(arr[0] == n){
      start = 0
    } else if(arr[arr.length-1] == n){ 
      end = arr.length-1
    } else if(arr[middle] !== n) {
      let counter = 0;
      let newArr = arr
      let result0 = newArr;
      let result = [];
      while(newArr.length > 1 && counter < 25){
        middle = Math.round(newArr.length/2)
        if (n >= newArr[middle]){
          newArr = newArr.slice(middle)
        } else if(n <= newArr[middle]){
          newArr = newArr.slice(0,middle)
        }
        // console.log(newArr)
        
        if((result0[0] !== n || result0[result0.length-1] !== n) && (newArr[0] == n || newArr[newArr.length-1] == n)){
          result = result0
          break
        }
        result0 = newArr
        counter++
      }
      
  // console.log('массив, с которым будем работать:')
  // console.log(result)
      
  start = arr.indexOf(result[result.indexOf(n)])
  end = arr.findIndex((el) => el > n)-1
    }
  return (`наш диапозон: ${start}-${end}`)
}
console.log(func(array, 8))