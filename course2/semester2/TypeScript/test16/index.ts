// class Logger {
//   private constructor(){}
//   private static instance: Logger|null = null;
//   public static getInstance(){
//     if(Logger.instance == null){
//       Logger.instance = new Logger
//     }
//     return Logger.instance
//   }
//   log(msg: string){console.log(msg)}
// }
// const log = Logger.getInstance()
// log.log('1')
// log.log('2')

// const logger = Logger.getInstance()
// logger.log('3')

///

class Pie {
    pie: string
    constructor() {
        this.pie = 'это пирог'
    }
    serve() {
        console.log(this.pie)
    }
    eat() {
        console.log('откусили кусок')
    }
}
const pie = new Pie()
pie.serve()
pie.eat()

abstract class PieDecorator {
    pie: Pie
    constructor(pie: Pie) {
        this.pie = pie
    }
    serve() {
        this.pie.serve()
        console.log('с ', this.topping());
    }
    eat() {
        this.pie.eat()
        console.log('и чуток ', this.topping())
    }
    abstract topping(): string
}

class StrawberryPie extends PieDecorator {
    topping() {
        return 'земляника'
    }
}
class BlackberryPie extends PieDecorator {
    topping() {
        return 'черника'
    }
}
const spie = new StrawberryPie(new Pie())
spie.serve()
spie.eat()
const bpie = new BlackberryPie(new Pie())
bpie.serve()
bpie.eat()

////

interface Book {
    display(): void
}
class Ebook implements Book {
    display() { console.log('this is an Ebook') }
}
class PrintBook implements Book {
    display() { console.log('this is an Ebook') }
}
abstract class EbookDecorator implements Book {
    constructor(book: Pie) {
        this.book = book
    }
    display() {
        this.book.display()
    }
}
class Epub extends EbookDecorator {
    setBackground() { }
    display() {
        this.book.display()
        this.setBachground()
        console.log('...')
    }
}
const epub = new Epub(new Ebook())
epub.display()