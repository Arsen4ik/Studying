// abstract class Car {
//   abstract start(): void
//   abstract stop(): void
//   abstract go(): void
//   method(){
    
//   }
// }
// class Opel extends Car {
//   start(): void {
//     console.log('opel zapustilsya')
//     // return 'opel zapustilsya'
//   }
//   stop(): void {
//     console.log('opel ostanovilsya')
//   }
//   go(): void {
//     console.log('opel poehal')
//   }
// }
// class Toyota extends Car {
//     start(): void {
//     console.log('toyota zapustilas')
//   }
//   stop(): void {
//     console.log('toyota ostanovilas')
//   }
//   go(): void {
//     console.log('toyota poehala')
//   }
// }


// let opel = new Opel()
// let toyota = new Toyota()

// function checkCar(car: Car){
//   console.log('checking zapusk', car.start())
//   console.log('checking stopping', car.stop())
// }
// checkCar(opel)
// checkCar(toyota)


// abstract class Geometry {
//   width: number
//   color: string
//   abstract draw(): void
// }

// class Line extends Geometry {
//   x1: number
//   y1: number
//   constructor(width, color){
//     super()
//     this.width = width
//     this.color = color
//   }
//   draw(): void{
//     console.log(`линия имеет параметры: ${this.color}, ${this.width}`)
//   }
// }

// class Rect extends Geometry {
//   x1: number
//   y1: number
//   x2: number
//   y2: number
//   constructor(width, color){
//     super()
//     this.width = width
//     this.color = color
//   }
//   draw(): void{
//     console.log(`прямоугольник имеет параметры: ${this.color}, ${this.width}`)
//   }
// }

// class Ellipse extends Geometry {
//   x1: number
//   y1: number
//   x2: number
//   y2: number
//   constructor(width, color){
//     super()
//     this.width = width
//     this.color = color
//   }
//   draw(): void{
//     console.log(`эллипс имеет параметры: ${this.color}, ${this.width}`)
//   }
// }

// const shapes: Geometry[] = [];
// shapes[0] = new Line(10, 'green')
// shapes[1] = new Rect(3, 'red')
// shapes[2] = new Ellipse(5, 'brown')

// for(let i = 0; i < shapes.length; i++){
//   // console.log(i)
//   shapes[i].draw()
// }

// abstract class Recipes {
//   name: string;
//   type: string;
//   abstract showIngredients(): void;
//   abstract showRecipe(): void;
// }

// class Salad extends Recipes {
//   ingridients: string;
//   recipe: string;
//   constructor(ingridients, recipe){
//     super()
//     this.ingridients = ingridients
//     this.recipe = recipe
//   }
//   showIngredients(): void{
//     console.log(`ingridients: ${this.ingridients}`)
//   }
//   showRecipe(): void{
//     console.log(`recipe: ${this.recipe}`)
//   }
// }
// class Pizza extends Recipes {
//   ingridients: string;
//   recipe: string;
//   constructor(ingridients, recipe){
//     super()
//     this.ingridients = ingridients
//     this.recipe = recipe
//   }
//   showIngredients(): void{
//     console.log(`ingridients: ${this.ingridients}`)
//   }
//   showRecipe(): void{
//     console.log(`recipe: ${this.recipe}`)
//   }
// }
// class Porridge extends Recipes {
//   ingridients: string;
//   recipe: string;
//   constructor(ingridients, recipe){
//     super()
//     this.ingridients = ingridients
//     this.recipe = recipe
//   }
//     showIngredients(): void{
//     console.log(`ingridients: ${this.ingridients}`)
//   }
//   showRecipe(): void{
//     console.log(`recipe: ${this.recipe}`)
//   }
// }

// const food: Recipes[] = [];
// food[0] = new Salad('banana-apple', 'cutting')
// food[1] = new Pizza('cabbage-tomato-carrot', 'frying')
// food[2] = new Porridge('pamela', 'eating')

// for(let i = 0; i < food.length; i++){
//   // console.log(i)
//   food[i].showIngredients()
//   food[i].showRecipe()
// }
// 

// class Bird {
//   fly(){
//     console.log('полетели')
//     return true
//   }
// }
// function flying(bird: Bird){
//   let isOk: boolesn = bird.fly()
//   if(isOk){
//     console.log('все хорошо')
//   }
// }

// const crow = new Bird()

// flying(crow)

// class Eagle extends Bird {
//   fly(){
//     console.log('полетели со скоростью')
//   }
// }
// const eagle = new Eagle()
// flying(eagle)

// class Rectangle {
//   constructor(w: number, h: number){
//     this.width = w
//     this.height = h
//   }
//   getWidth(){return this.width}
//   getHeight(){return this.height}
//   setWidth(v: number){this.width = v}
//   setHeight(v: number){this.height = v}
//   getArea(): number {
//     return this.height * this.width
//   }
// }

// class Square extends Rectangle {
//   constructor(size: number){
//     super(size, size)
//   }
//   setWidth(v: number){
//     super.setWidth(v)
//     super.setHeight(v)
//   }
//   setHeight(v: number){
//     super.setWidth(v)
//     super.setHeight(v)
//   }
// }
// class Test {
//   private static getAreaTest(shape: Rectangle): void{
//     let width = shape.getWidth()
//     shape.setHeight(10)
//     // let width = shape.getWidth()
//     console.log(`ожидаем ${width*10}. фактически ${shape.getArea()}`)
//   }
//   static run(): void {
//     const r = new Rectangle(2,3)
//     Test.getAreaTest(r)
//     const s = new Square(5)
//     Test.getAreaTest(s)
//   }
// }
// Test.run()



