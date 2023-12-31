class Car {
    state: boolean;
    color: string;
    power: number;

    constructor(); // - nothing
    constructor(color: string, power: number); // - both
    constructor(color?: string, power?: number) { // - just work!
        this.power = power || 90;
        this.color = color || 'white';
        this.state = false;
    }


    switchButton() {
        if (this.state == false) {
            console.log('двигатель запустился');
            this.state = true;
        } else {
            console.log('двигатель заглох')
            this.state = false
        }
    }
}
let car1: Car = new Car('red', 110)

console.log(car1.power)
console.log(car1.color)

car1.switchButton()
car1.switchButton()

let car2: Car = new Car()

console.log(car2)
