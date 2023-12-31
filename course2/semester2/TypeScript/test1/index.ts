// console.log("Привет, студенты!")

// const NAME: string = "John";
// let flag: boolean;
// let count: number;

// flag = true;
// count = 42;
// // flag = 1;
// // count = "23";

// let numbers: number[];
// let names: Array<string>;

// numbers = [1,2,3]
// names = ['a', 'b']
// console.log(names)

// function add(a: number, b: number): number{
//   return a+b;
// }

// type UserId = number | string
// function foo(id: UserId): void{
//   console.log(id)
// }
// foo("fh")

// function comp(a: string, b: string): -1|0|1{
//   return a === b ? 0 : a > b ? 1 : -1
// }
// console.log(comp('d', 'f'))

// //
// type Distance = number
// type Point = {x: number, y: number}
// function move(from: Point, length: Distance): Point{
//   return {x: from.x + length, y: from.y}
// }
// console.log(move({3,8}, 12))

// type Callable = (s: string|number) => void
// function printID(print: Callable, id: UserId): void{
//   print(id)
// }
// printID(console.log, 1234)


// кт1

// function readFromKeyboard():string {
//   return "Считали с клавиатуры"
// }

// function printToTerminal(message: string):void {
//   console.log(`Напечатали в терминал: ${message}`)
// }

// function readFromFile():string {
//   return "Зачитали что-то из файла"
// }

// function printToFile(message: string):void {
//   console.log(`Отправили в файл: ${message}`)
// }

// function printToNetwork(message: string):void {
//   console.log(`Отправили данные по сети: ${message}`)
// }

// function readFromNetwork():string {
//   return "Взяли из интернета"
// }

// function main(from: string, to: string){
// 	let message = ""
// 	if(from=="keyboard"){
// 		message = readFromKeyboard()
// 	}
//   	if(from=="file"){
// 		message = readFromFile()
// 	}
//   	if(from=="network"){
// 		message = readFromNetwork()
// 	}
// 	if(to=="terminal"){
// 		printToTerminal(message)
// 	}
//   if(to=="file"){
// 		printToFile(message)
// 	}
//   if(to=="network"){
// 		printToNetwork(message)
// 	}
// }

// // №1
// main("keyboard", "terminal")
// // №2
// main("file", "terminal")
// // №3
// main("keyboard", "network")
// // №4
// main("file", "network")
// // №5
// main("keyboard", "file")
// // №6
// main("network", "terminal")
// // №7
// main("network", "file")