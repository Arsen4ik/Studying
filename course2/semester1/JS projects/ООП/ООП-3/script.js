
// свойства аксессоры set() и get()

// свойство get() - читает св-ва объекта

// let obj = {
//     name: 'Al',
//     age: 30,
//     get logName() {return `${obj.name} возраст ${obj.age}`}
// }

// console.log(obj)


// let obj = {
//     name: 'Al',
//     age: 30,
//     get logName() {return `${obj.name} возраст ${obj.age}`}
// }

// console.log(obj)
// console.log(obj.logName)

// console.log(obj.logName = 'fff')
// obj.name = 'ars'
// console.log(obj.logName)

// задача 1

// let obj = {
//     arr: [1,2,3, '4', true],
//     get lastEl() {return `the last elem is: ${this.arr[this.arr.length-1]}`}
// }
// console.log(obj)
// console.log(obj.lastEl)

// class OBJ {
//     constructor(obj){
//         this.obj = obj
//     }
//     getElem(){
//         return this.obj[this.obj.length-1]
//     }
// }
// let res1 = new OBJ([1,2,3])
// console.log(res1)
// console.log(res1.getElem())

// set() - меняет значение свойства объекта

// let obj = {
//     name: 'Ars',
//     set setNanme(value){
//         obj.name = value
//     }
// }
// obj.setNanme = 'Arsen'
// console.log(obj)


//// пример
// let nums = {
//     array: [1,2,3,4],
//     get lastValue(){
//         return +nums.array[nums.array.length-1] + +nums.array[nums.array.length-2]
//     },
//     set change(str){
//         let newArr = str.split(' ')
//         nums.array = newArr
//     }
// }
// console.log(nums.lastValue)
// console.log(nums.array)

// nums.change = '2 4 6 7'
// console.log(nums.array)
// console.log(nums.lastValue)


// let phone = {
//     number: '+77777777',
//     get isValid(){
//         return this.number[0] === '+'
//     },
//     set setNumber(arr){
//         this.number = arr.join('')
//     }
// }
// console.log(phone)
// console.log(phone.isValid)

// phone.setNumber = [8,2,3,4,5]
// console.log(phone)
// console.log(phone.isValid)


// class phone {
//     constructor(num){
//         this.num = num
//     }
//     get isValid(){
//         return this.num[0] === '+'
//         // this.num.startWith('+')
//     }
//     set setNumber(arr){
//         return this.num = arr.join('')
//     }
// }
// let res = new phone('+77777777')
// console.log(res)
// console.log(res.isValid)
// res.setNumber = [1,4,7,8]
// console.log(res.setNumber)
// console.log(res)