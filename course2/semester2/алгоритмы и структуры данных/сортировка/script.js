// function func(arr){
//     for(let i = 0; i < arr.length; i++){
//         console.log(i)
//         for(let j = 0; j < arr.length-i-1; j++){
//             console.log(j)
//             console.log(arr[j])
//             let b = arr[j]
//             arr[j] = arr[j+1]
//             arr[j+1] = b
//         }
//     }
//     return arr
// }
// let array = [3,67,32,2,8]
// console.log(func(array))

function func2(arr){
    let start = 0;
    let end = arr.length-1;
    for(let o = 0; o <= Math.round(array.length/2); o++)
    for(let i = start; i < end; i++){
        if(arr[i] > arr[i+1]){
            let reserve = arr[i]
            arr[i] = arr[i+1]
            arr[i+1] = reserve
        }
    }
    end--
    for(let i = end; i >= start; i--){
        if(arr[i] < arr[i-1]){
            let reserve = arr[i]
            arr[i] = arr[i-1]
            arr[i-1] = reserve
        }
    }
    start++
    console.log(start)
    console.log(end)
    return arr
}
let array = [3,67,32,2,8,5,12,3455,6]
console.log(Math.round(array.length/2))
console.log(func2(array))


////


let array2 = [3,67,32,4,1,5,12,6,]
function func3(arr){
    let cnt = Math.floor(Math.log2(arr.length))
    console.log(Math.floor(Math.log2(arr.length)))
    let step = arr.length/2
    console.log(step)
    let key = false
    let firstEl;
    for(let o = 0; o <= cnt; o++){
        console.log(o)

        if(key){
            // console.log(i)
            // step = 1
            // console.log(step)
            firstEl = arr.shift()
        }
        for(let i = step; i < arr.length; i += step){

            // console.log(arr[i-step])
            //     console.log(arr[i])
            if(arr[i] < arr[i-step]){
                let reserve = arr[i]
                arr[i] = arr[i-step]
                arr[i-step] = reserve
            }
            // if(key){
            //     step = 2
            // }
        }
        console.log(step)
        console.log(arr)
        if(step == 2 && !key){
            key = true;
            // let key2  = true
            // console.log(key)
            // step += 1
            continue
        }
        if(step == 2 && key){
            key = false
            arr.unshift(firstEl)
        }
        console.log(key)
        // if(key){
        //     console.log(step)
        //     step -= 1
        // }
        step = Math.floor(step /= 2)
    }
    return arr
}
console.log(func3(array2)) 



/////////

function createArr(n){
    let arr = []
    // for(let i = 0; i < n; i++){
    //     arr.push(Math.floor(Math.random()*100))
    // }
    // for(let i = 0; i < n; i+=3){
    //     arr.push(i)
    // }
    for(let i = n; i > 0; i-=3){
        arr.push(i)
    }
    return arr
}
// заплонение массива
let array = createArr(100000)
console.log(array)


const ShellSort = arr => {
    const l = arr.length;
    let gap = Math.floor(l / 2);
    while (gap >= 1) {
        for (let i = gap; i < l; i++) {
            const current = arr[i];
            let j = i;
            while (j > 0 && arr[j - gap] > current) {
                arr[j] = arr[j - gap];
                j -= gap;
            }
            arr[j] = current;
        }
        gap = Math.floor(gap / 2);
    }
    return arr;
};
function bubbleSortConcept1(arr) {
    for (let j = arr.length - 1; j > 0; j--) {
      for (let i = 0; i < j; i++) {
        if (arr[i] > arr[i + 1]) {
          let temp = arr[i];
          arr[i] = arr[i + 1];
          arr[i + 1] = temp;
        }
      }
    }
    return arr
  }
//   console.log(ShellSort(array))
//   console.log(bubbleSortConcept1(array))