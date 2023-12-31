// const xs = [1,2,3,4,5]

// let newXs = xs.slice(0,2)
// console.log(newXs)

// xs.slice(0,2)
// console.log(xs)
// xs.splice(0,2)
// console.log(xs)
// let minimum = 21
// fucntion checkAge(age: number){
//   return age >= minimum
// }

// fucntion checkAge2(age: number){
//   let minimum = 21
//   return age >= minimum
// }

// fucntion checkAge3(age: number, minimum: number){
//   return age >= minimum
// }

// type Fruit = string
// type Discount = number

// class ShoppingCart {
//   private _items: Fruit[]
//   private discount: Discount
//   private discountedItem: Fruit
//   //private discountedItemAdded: boolean
//   constructor(){
//     this._items = []
//     this.discount = 5
//     this.discountedItemAdded = false
//     this.discountedItem = 'kiwi';
//   }
//   private normalizeItem(item: Fruit): Fruit {
//     return item.toLowerCase()
//   }
//   addItem(item: Fruit): Fruit[] {
//     item = this.normalizeItem(item)
//     this._items.push(item)
//     return item
//     // if(item == this.discountedItem){
//     //   this.discountedItemAdded = true
//     // }
//   }
//   get items(): Fruit[] {
//     return this._items.slice()
//   }
//   getDiscount(): Discount {
//     // return this.discountedItemAdded ? this.discount : 0
//     if(this._items.indexOf(this.discountedItem) != -1){
//       return this.discount
//     } else {
//       return 0
//     }
//   }
//   removeItem(items: Fruit[], item: Fruit): void {
//     item = this.normalizeItem(item)
//     this._items.splice(items.indexOf(item), 1)
//   return items
//   }
// }
// const card = new ShoppingCart()
// card.addItem('Apple')
// console.log(card.getDiscount())
// card.addItem('Lemon')
// console.log(card.getDiscount())
// card.addItem('Kiwi')
// card.addItem('Kiwi')

// console.log(card.getDiscount())

// console.log(card.items)

// card.removeItem('Lemon')
// console.log(card.items)
// card.removeItem('kiwi')


// console.log(card.items)
// console.log(card.getDiscount())


type Time = number;

function totalTime(lapTimes: Time[]): Time {
    lapTimes.shift(); // первый, разогревающий круг, не учитываем
    return lapTimes.reduce((a, b) => a + b);
}

function avgTime(lapTimes: Time[]): Time {
    let time: number = total;
    let laps: number = lapTimes.length;
    return Math.round((time / laps) * 100) / 100;
}

let lapTimes: Time[] = [];
lapTimes.push(31.0);
lapTimes.push(200.9);
lapTimes.push(21.1);
lapTimes.push(21.3);
let total = totalTime(lapTimes)
console.log("Общее время:", total);
console.log("Среднее время:", avgTime(lapTimes));