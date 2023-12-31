function readFromConsole() {
    return 'зачитали из консоли'
}
function readFromFile() {
    return 'зачитали из консоли'
}
function writeToConsole(message: string) {
    console.log(`вывели в консоль ${message}`)
}
function writeToFile(message: string) {
    if (fromFile) {
        message = readFromFile()
    } else {
        message = readFromConsole()
    }
}


function main(fromFile: boolean) {

}
main(true)