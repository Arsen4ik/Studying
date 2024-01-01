// // регулярные выражения
// let string = 'world hello'
// let reg = /hello/

// let result = string.match(reg)
// console.log(result[0])

// \w - буквы (лат) и цифры
// \W - не буквы и не цифры
// \d - только цифры(0-9)
// \D - не цифры
// \s - пробел
// \S - не пробел
// [...] - пользовательский набор символов
// . - любой символ
// [.] - екао

// let string = '4 world! hell5o'
// let reg = /\w\D[ ]/

// let result = string.match(reg)
// console.log(result[0])
// console.log(result)

// использованте квантификаторов
// {n} - кол повт
// {n,m} - кол повт от n до m
// {n,} - кол от n до много
// {0,} - либо не наличие либо много
// * - аналог {0,}
// {0,1} - либо 0, либо 1
// ? аналог {0,1}

// ^ - обозначает начало строки
// $ - обозначает конец строки

// let string = 'fhelloworl445deeedddm'
// let reg = /^\w+$/
// let result = string.match(reg)
// console.log(result)


//// 

// let phones = [

    //     '123.123.123',
    
    //     '453.567.985',
    
    //     '23.33.22.34',
    
    //     '567.986.423',
    
    //     '123456.4533',
    
    //     '567.90987.5',
    
    //     '12.3323.321',
    
    //     '1234.566777',
    
    //     '655.432.342'
    
    // ]
    
    
    
    // let result = function(arr){
    //     let newArr = []
    //     for(let i = 0; i < arr.length; i++){
    //         let reg = /\d{3}[.]\d{3}[.]\d{3}/
    //         if(arr[i] == arr[i].match(reg)){
    //             newArr.push(arr[i])
    //         }
    //     }
    //     return newArr
    // }
    
    // console.log(result(phones))