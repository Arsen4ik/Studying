// class Car {
//   private _state: boolean;
//   private _color: string;
//   private _power: number;

//   constructor(); // - nothing
//   constructor(color: string, power: number); // - both
//   constructor(color?: string, power?: number){ // - just work!
//     this._power = power || 90;
//     this._color = color || 'white';
//     this._state = false;
//   }


//   switchButton() {
//     if (this.state == false) {
//       console.log('двигатель запустился');
//       this._state = true;
//     } else {
//       console.log('двигатель заглох')
//       this._state = false
//     }
//   }

//   get state(){ return this._state}
//   get color(){ return this._power}
//   set color(val){ this._power = val}

//   get power(){ return this._color}

// }
// let car1: Car = new Car('red', 110)

// console.log(car1.power)
// console.log(car1.color)

// car1.switchButton()
// car1.switchButton()

// let car2: Car = new Car()

// console.log(car2.state)


// class Line {
//   public start: number;
//   public end: number;
//   constructor(start, end){
//     this.start = start;
//     this.end = end;
//   }
// }
// let obj1: Line = new Line(3, 8)
// console.log(obj1)
// let obj2: Line = new Line(9, 9)
// console.log(obj2)

// function func(a: object,b: object){
//   let res: string = "они не пересекаются";
//   if(a.start >= b.start || a.end >= b.start){
//     res = "они пересекаются";
//   }
//   return res
// }
// console.log(func(obj1, obj2))

class Person {
    FIO: string;
    weight: number;
    age: number;
    rank: number;
    constructor(FIO, weight, age, rank) {
        this.FIO = FIO;
        this.weight = (weight >= 0 && weight <= 120 ? weight : -1);
        this.age = (age >= 0 && age <= 100 ? age : -1);
        this.rank = (rank >= 1 && rank <= 5 ? rank : 1);
    }
    get FIO2() { return this.FIO }
    set FIOchange(val) { this.FIO = val }


}
let person1 = new Person('faz ars ad', 60, 17, 6)
console.log(person1)
let person2 = new Person('faz-ars_ad', 65, 18, 3)
console.log(person2)
console.log(person2.FIO2)
person2.FIOchange = 'a-b-c'
console.log(person2.FIO2)
