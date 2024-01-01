
// date = new Date()

// старый способ задания классов

// function createGoods(name, flag){
//     return {
//         title: name,
//         isSale: flag,
//         log: () => console.log((flag) ? 'товар в наличии' : "товара нету")
//     }
// }

// let obj1 = createGoods('bycicle', true)
// let obj2 = createGoods('car', false)
// let obj3 = createGoods('helycopter', true)

// console.log(obj1)
// console.log(obj2)
// console.log(obj3)

// obj1.log()
// obj2.log()
// obj3.log()

// // задача 1
// function numbers(num){
//     return {
//         num: num,
//         pow: () => console.log(num**2),
//         sqrt: () => console.log(Math.sqrt(num))
//     }
// }

// let obj1 = numbers(3)
// let obj2 = numbers(4)
// console.log(obj1)
// console.log(obj2)
// obj1.pow()
// obj2.pow()
// obj1.sqrt()
// obj2.sqrt()


// новый способ определения класса (шаблонизатора)
// использование class

class Goods {
    constructor(name, flag){
        this.title = name
        this.isSale = flag
    }
    log(){
        console.log((this.isSale) ? 'товар в наличии' : "товара нету")
    }
}

let obj = new Goods('велосипед', true)
let obj2 = new Goods('велосипед!!!', false)

console.log(obj)
obj.log()
console.log(obj2)
obj2.log()