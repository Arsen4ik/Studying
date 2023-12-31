// class Person {
//   FIO: string;
//   weight: number;
//   age: number;
//   rank: number;
//   constructor(FIO, weight, age, rank){
//     this.FIO = FIO;
//     this.weight = (weight >= 0 && weight <= 120 ? weight : -1);
//     this.age = (age >= 0 && age <= 100 ? age : -1);
//     this.rank = (rank >= 1 && rank <= 5 ? rank : 1);
//   }
//   get FIO2(){ return this.FIO}
//   set FIOchange(val){this.FIO = val}


// }
// let person1 = new Person('faz ars ad', 60, 17, 6)
// console.log(person1)
// let person2 = new Person('faz-ars_ad', 65, 18, 3)
// console.log(person2)
// console.log(person2.FIO2)
// person2.FIOchange = 'a-b-c'
// console.log(person2.FIO2)

class Shape {
    width: number;
    color: string;
    constructor() {
        console.log('C-tor Shape')
    }
}

class Line extends Shape {
    x1: number
    y1: number
    x2: number
    y2: number
    constructor() {
        super()
        console.log('C-tor Line')
    }
}

class Rectangle extends Shape {
    x1: number
    y1: number
    x2: number
    y2: number
}

class Triangle extends Shape {
    x1: number
    y1: number
    x2: number
    y2: number
    x3: number
    y3: number
}

const line: Line = new Line()
line.x1 = line.y1 = 10
line.x2 = line.y2 = 20
line.color = 'red'
line.width = 3

// const shape: Shape = line
// console.log(shape.color, shape)

const shapes: Shape[] = []
shapes[0] = new Line()
shapes[1] = new Rectangle()
shapes[2] = new Line()
shapes[3] = new Triangle()
shapes[0].color = 'white'
shapes[0].x2 = 5
const line2 = <Line>shapes[0]
console.log(line2.x2, line2.color)
console.log(line2)
line2.width = 34
line2.rrr = 12
console.log(line2)

// if(shapes[3] instanceof Triangle){
// let line3 = <Triangle>shapes[3]
// line3.x3 = 4
// line3.color = 'black'
// }
// console.log(line3.x3, line3.color)

