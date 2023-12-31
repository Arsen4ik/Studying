class Shape {
    private _id: number
    width: number;
    color: string;
    constructor() {
        console.log('C-tor Shape')
        this.id = 1
    }
    set id(value: number) {
        this._id = value
    }
    get id() {
        return this._id
    }
    // protected setProp(width: number, color: string): void {
    //   this.width = width
    //   this.color = color
    // }
    draw(): void {
        console.log('этот метод надо переопределить')
    }
}

class Line extends Shape {
    x1: number
    y1: number
    x2: number
    y2: number
    constructor() {
        super()
        // console.log('C-tor Line with id = ', this.id)
        // this.setProp(3, 'red')
    }
    draw(): void {
        console.log('рисуем линию')
    }
}

class Rectangle extends Shape {
    x1: number
    y1: number
    x2: number
    y2: number
    draw(): void {
        console.log('рисуем прямоугольник')
    }
}

class Triangle extends Shape {
    x1: number
    y1: number
    x2: number
    y2: number
    x3: number
    y3: number
    draw(): void {
        super.draw();
        console.log('рисуем треугольник')
    }
    foo() {
        this.draw()
        super.draw()
    }
}

// const line: Line = new Line()
// // console.log(line.id)
// line.x1 = line.y1 = 10
// line.x2 = line.y2 = 20
// line.color = 'red'
// line.width = 3
// line.draw()


// const rect: Line = new Rectangle()
// rect.draw()
// const shape: Shape = line
// console.log(shape.color, shape)

const shapes: Shape[] = []
shapes[0] = new Line()
shapes[1] = new Rectangle()
shapes[2] = new Line()
shapes[3] = new Triangle()
shapes[4] = new Triangle()
shapes[5] = new Line()
shapes[6] = new Rectangle()

for (let shape of shapes) {
    shape.draw()
}

// shapes[0].color = 'white'
// shapes[0].x2 = 5
// const line2 = <Line>shapes[0]
// console.log(line2.x2, line2.color)
// if(shapes[3] instanceof Triangle){
// let line3 = <Triangle>shapes[3]
// line3.x3 = 4
// line3.color = 'black'
// }
// console.log(line3.x3, line3.color)