function func(n){
    let arr = []
    for(let i = n; i >= 1; i--){
        arr.push([i, (n-i < i ? n-i : i-1)])
    }
    return arr
}
console.log(func(5))


function func2(n){
    let arr = []
    for(let i = n; i >= 1; i--){
        let proArr = []
        for(let j = i-1; j > 0; j--){
            console.log(j)
            proArr.push(j)
        }
        arr.push([i, proArr])
    }
    return arr
}
console.log(func2(5))

// function func3(n){
//     let arr = []
//     for(let i = n; i >= 1; i--){
//         let proArr = []
//         for(let j = 0; j < n; j--){
//             let check = 0
//             while(check != i){
//                 ++check

//             }
//             proArr.push(j)
//         }
//         arr.push([i, proArr])
//     }
//     return arr
// }
function func3(n){
    let arr = [[n]]
    for(let i = n; i > 1; i--){
        let proArr = []
        for(let j = i-1; j > 0; j--){
            let res = j
            let counter = []
            // while(res < n){
            //     res++
            //     counter.push()
            // }
            for(let o = 1; o < n; o++){
                // counter.push(i)
                while(res < n){
                    res+=o
                    counter.push(o)
                }
            }
            arr.push([j, counter])
        }
        // arr.push(proArr)
    }
    return arr
}

console.log(func3(5))


// console.log(func4(5))
