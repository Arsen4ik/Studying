// class FileRead {
//   name: string
//   constructor(name: string){
//     this.name = name
//   }
//   read(){
//     return `читаем из файла ${this.name}`;
//   }
// }
// class KeyboardRead {
//   readLine(){
//     return 'прочитали с клавиатуры'
//   }
// }
// class SendToConsole {
//   send(msg: string){
//     console.log(`послали сообщение ${msg}`)
//   }
// }
// class Processing {
//   read: FileRead
//   send: SendToConsole
//   constructor(read: FileRead, send: SendToConsole){
//     this.read = read
//     this.send = send
//   }
//   process(){
//     let msg = this.read.read()
//     this.send.send(msg)
//   }
// }

// const f = new FileRead('...')
// const c = new SendToConsole()
// const p = new Processing(f,c)
// p.process()

interface IReader {
    read(): string;
}
interface IWritter {
    write(msg: string): void;
}
class ConsoleReader implements IReader {
    read(): string {
        return 'прочитали что-то из консоли'
    }
}
class ConsoleWriter implements IWritter {
    write(msg: string): void {
        console.log(`напечатали в консоль __${msg}__`)
    }
}
class NetWriter implements IWritter {
    write(msg: string): void {
        console.log(`__послали по сети__ ${msg}`)
    }
}
class FileReader implements IReader {
    read() {
        return 'зачитали что-то из файла'
    }
}
class Processing {
    private static reader: IReader
    private static writer: IWriter
    static init(reader: IReader, writer: IWriter) {
        Processing.reader = reader
        Processing.writer = writer
    }
    static process() {
        let msg = Processing.reader.read()
        Processing.writer.write(msg)
    }
}
// const from_console = new ConsoleReader()
// const to_console = new ConsoleWriter()
Processing.init(new ConsoleReader(), new ConsoleWriter())
Processing.process()


// const from_file = new FileReader()
Processing.init(new FileReader(), new ConsoleWriter())
Processing.process()


// const to_net = new NetWriter()
Processing.init(new FileReader(), new NetWriter())
Processing.process()

///////
interface IDB {
    connect(): number
}
class MySqlDb implements IDb {
    connect() {
        return 1
    }
}
class PasswordReminder {
    private db: IDb
    private connection: number
    constructor(db: IDb) {
        this.db = db
        this.connection = this.db.connect()
    }
}