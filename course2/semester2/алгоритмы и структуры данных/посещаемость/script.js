// let Line2 = [[10,12], [14,17], [17,22], [111, 123]]
// let Line1 = [[11,14], [20,21], [1000, 10000]]

// function func(line1, line2){
//     let pairs = 0
//     let small = 0
//     let big = 0
    
//     if(line1.length >= line2.length){
//         pairs = line1.length
//         small = line2
//         big = line1
//     } else {
//         pairs = line2.length
//         small = line1
//         big = line2
//     }

//     console.log(pairs)
//     console.log(small)
//     console.log(big)

//     let res = []
//     let reserve = 0
//     for(let i = 0; i < pairs; i++){
//         if(i >= small.length){
//             res.push(big[i])
//         } else {
//             console.log(line1[i][1])
//             console.log(line2[i][1])
//             console.log(reserve)
//             if(reserve[1] <= line1[i][1] && reserve[1] <= line2[i][1]){
//                 res.push(reserve)
//                 let checker = reserve[1]
//                 reserve = 0
//                 // continue
//                 if(line1[i][0] < checker){
//                     if(line2[i][0] < checker){
//                         continue
//                     } else {
//                         res.push(line2[i])
//                         continue
//                     }
//                 } 
//             }
//             if(line1[i][1] < line2[i][1]){
//                 res.push(line1[i])
//                 if(reserve[0] > line1[i][1]){
//                 } else if(line2[i][0] >= line1[i][1]){
//                     console.log('+')
//                     reserve = line2[i]
//                 }
                
//             } else {
//                 res.push(line2[i])
//                 if(reserve[0] > line2[i][1]){
//                 } else if(line1[i][0] >= line2[i][1]){
//                     console.log('+')
//                     reserve = line1[i]
//                 }
//             }
//         }
//     }
//     if(reserve !== 0){
//         if(res[res.length-1][1] < reserve[0]){
//             res.push(reserve)
//         }
//     }
//     return res
// }
// console.log(func(Line1, Line2))


let Line1 = [[10,12], [14,17], [17,22], [111, 123]]
let Line2 = [[11,14], [20,21], [124, 133]]

function func(line1, line2){
    let pairs = 0
    let small = 0
    let big = 0
    
    if(line1.length >= line2.length){
        pairs = line1.length
        small = line2
        big = line1
    } else {
        pairs = line2.length
        small = line1
        big = line2
    }

    console.log(pairs)
    console.log(small)
    console.log(big)

    let res = []
    let reserve = 0
    let checker = 0
    for(let i = 0; i < pairs; i++){
        if(i >= small.length){
            console.log(i)
            res.push(big[i])
            console.log(res)
        } else {
            console.log(line1[i][1])
            console.log(line2[i][1])
            console.log(reserve)
            if(reserve[1] <= line1[i][1] && reserve[1] <= line2[i][1]){
                res.push(reserve)
                checker = reserve
                reserve = 0
                // continue
                if(line1[i][0] < checker[0]){
                    if(line2[i][0] < checker[0]){
                        continue
                    } else {
                        console.log(line2[i])
                        res.push(line2[i])
                        continue
                    }
                } 
            }
            console.log(checker)
            if(line1[i][1] <= line2[i][1] && (checker == 0 || (line1[i][1] <= checker[0] || line1[i][0] >= checker[1]))){
                res.push(line1[i])
                console.log(line1[i])
                if(reserve[0] > line1[i][1]){
                } else if(line2[i][0] >= line1[i][1]){
                    console.log('+')
                    reserve = line2[i]
                }
                 
            } else if(checker == 0 || (line2[i][1] < checker[0] || line2[i][0] > checker[1])) {
                res.push(line2[i])
                console.log(line2[i])

                if(reserve[0] > line2[i][1]){
                } else if(line1[i][0] >= line2[i][1]){
                    console.log(reserve)
                    reserve = line1[i]
                    console.log(reserve)
                }
            }
        }
    }
    if(reserve !== 0){
        if(res[res.length-1][1] < reserve[0]){
            res.push(reserve)
        }
    }
    return res
}
console.log(func(Line1, Line2))