
// let arrays = [

//     '89840959944 exampleonemain@mail.ru',

//     '+79840959933 forreason@yandex.net',

//     'somemail@mail.ru',

//     '89840959900 example@gmil.ru',

//     '+79840959911',

//     'grandthere@mail.ru',

//     'jetpackfor@gmail.ru',

//     '89840959922 some@yandex.com',

// ]

// // let arr1 = []
// // let arr2 = []
// // for(let i = 0; i < arrays.length; i++){
// //     if(arrays[i].startsWith('+7') || arrays[i].startsWith('8')){
// //         // arr1[i] = arrays[i].slice(arrays[i][0], ' ')
// //         if(arrays[i].includes(' ')){
// //         arr1.push(arrays[i].substring(arrays[i][0], arrays.indexOf(' ')))
// //         arr2.push(arrays[i].substring(arrays.indexOf(' '), arrays[i][arrays.length]))
// //         // let space = 0
// //         // for(let j = 0; j < arrays[i]; j++){
// //         //     if(arrays[i][j] == ' '){
// //         //         space = 1
// //         //     }

// //         //     if(space == 0){
// //         //         arr1[i][j].push(arrays[i][j])
// //         //     } else {
// //         //         arr2[i][j].push(arrays[i][j])
// //         //     }
// //         // }
// //         } else {
// //         arr1.push(arrays[i])
// //         }
// //     } else {
// //         arr2.push(arrays[i])
// //     }
// // }
// // console.log(arr1)
// // console.log(arr2)


// let phones = []
// let emails = []

// for(let i = 0; i < arrays.length; i++){
//     if(arrays[i].includes(' ') && arrays[i].includes('@')){
//         phones[phones.length] = arrays[i].substring(0, arrays[i].indexOf(' '))
//         emails[emails.length] = arrays[i].substring(arrays[i].indexOf(' ')+1)
//     } else if(!arrays[i].includes(' ') && arrays[i].includes('@')){
//         emails[emails.length] = arrays[i]
//     } else if(!arrays[i].includes('@')){
//         phones[phones.length] = arrays[i]
//     }
// }
// console.log(phones)
// console.log(emails)



let words = ['стакан','молоко','табуретка','вода']

let func = function(arr){
    let result = []
//     for(let i = 0; i < arr.length; i++){
//         result.push(arr[i][0].toUpperCase() + arr[i].substring(arr.indexOf(arr[1]), arr[i].length))
//     }
//     return result
    // for(let i = 0; i < arr.length; i++){
    //     result[result.length] = arr[i][0].toUpperCase() + arr[i].slice(1)
    // }
        for(let i = 0; i < arr.length; i++){
    result[i] = arr[i].replace(arr[i][0], arr[i][0].toUpperCase())
    }
    return result
}
console.log(func(words))


