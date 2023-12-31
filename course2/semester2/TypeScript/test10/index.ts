// class Car {
//   public model: string;
//   public power: number;
//   private static cnt: number = 0;
//   constructor(model: string, power: number){
//     this.model = model;
//     this.power = power;
//     Car.cnt++
//   }
//   public static countCar(){
//     return Car.cnt
//   }
// }
// const car1 = new Car('super', 110)
// console.log(car1.model)
// const car2 = new Car('normal', 90)
// console.log(car2.model)
// const car3 = new Car('small', 60)
// console.log(car3.model)
// console.log(Car.countCar())




type Fruit = string
type Discount = number

class ShoppingCart {
    private _items: Fruit[]
    private discount: Discount
    private discountedItem: Fruit
    //private discountedItemAdded: boolean
    constructor() {
        this._items = []
        this.discount = 5
        this.discountedItemAdded = false
        this.discountedItem = 'kiwi';
    }
    private normalizeItem(item: Fruit): Fruit {
        return item.toLowerCase()
    }
    addItem(item: Fruit): Fruit[] {
        item = this.normalizeItem(item)
        this._items.push(item)
        return item
        // if(item == this.discountedItem){
        //   this.discountedItemAdded = true
        // }
    }
    get items(): Fruit[] {
        return this._items.slice()
    }
    getDiscount(): Discount {
        // return this.discountedItemAdded ? this.discount : 0
        if (this._items.indexOf(this.discountedItem) != -1) {
            return this.discount
        } else {
            return 0
        }
    }
    removeItem(items: Fruit[], item: Fruit): void {
        item = this.normalizeItem(item)
        this._items.splice(items.indexOf(item), 1)
        return items
    }
}
const card = new ShoppingCart()
card.addItem('Apple')
console.log(card.getDiscount())
card.addItem('Lemon')
console.log(card.getDiscount())
card.addItem('Kiwi')
card.addItem('Kiwi')

console.log(card.getDiscount())

console.log(card.items)

card.removeItem('Lemon')
console.log(card.items)
card.removeItem('kiwi')


console.log(card.items)
console.log(card.getDiscount())

