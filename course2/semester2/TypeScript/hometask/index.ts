// class Student {
//   name: string;
//   constructor(name: string){
//     this.name = name
//   }
// }
// class Group {
//   name: string;
//   private students: Student[] = [];
//   constructor(name: string){
//     this.name = name
//   }
//   addStudent(student: Student): void {
//     this.students.push(student);
//   }
// }

// let group = new Group('2Р2')
// const arsen = new Student('Арсен')
// const timur = new Student('Тимур')
// group.addStudent(arsen)
// group.addStudent(timur)
// console.log(group)
// group = new Group('')
// console.log(group)


// class Room {
//   area: number;
//   name: string;
//   constructor(area: number){
//     this.area = area
//   }
// }

// class Flat {
//   private rooms: Room[] = []

//   constructor(roomAreas: number[]){
//     for(let area of roomAreas){
//       this.rooms.push(new Room(area))
//     }
//   }
// }
// let flat = new Flat([18, 14, 22])
// console.log(flat)


// //

class Author {
    private name: string;
    private email: string;
    constructor(name: string, email: string) {
        this.name = name
        this.email = email
    }
    toString(): string {
        return `${this.name} - ${this.email}`
    }
    get getName() {
        return this.name
    }
    get getEmail() {
        return this.email
    }
    set setEmail(value: string) {
        this.email = value
    }
}


class Book {
    private title: string;
    private author: Author;
    private price: number;
    constructor(title: string, autor: Author, price: number) {
        this.title = title
        this.author = autor
        this.price = price
    }
    toString(): string {
        return `${this.title} - ${this.author} - ${this.price}`
    }
    get getTitle() {
        return this.title
    }
    get getAuthor() {
        return this.author
    }
    get getPrice() {
        return this.price
    }
    set setPrice(value: number) {
        this.price = value
    }
}

const john: Author = new Author("John Smith", "john@smith.com")
console.log(john)
const book: Book = new Book("TypeScript", john, 2450)
console.log(book)
book.price = 2399
console.log(book)
console.log(book.title)
console.log(book.author)
console.log(book.author.name)
console.log(book.author.email)

console.log(book.toString())
console.log(book.getAuthor)