function logHello(name, lastName){
    console.log(`Wenamecheinasumma ${name} ${lastName}`)
}
logHello('ares', 'fedorra')

//

let value = 4
let total = 80

function func(v, t) {
    console.log(`${v * 100 / t}%`)
}
func(value, total)

//

let a = 4
let b = 2
let sign = '/'

function func(a, b, s) {
    if(sign == '+'){
        console.log(a + b) 
    } else if(sign == '-'){
        console.log(a - b)
    } else if(sign == '/'){
        if(b == 0){
            console.log('b не должно быть равно нулю')
        } else {
        console.log(a / b)
        }
    } else if(sign == '*'){
        console.log(a * b)
    } else {
        console.log('у вас где-то ошибка')
    }
}
func(a, b, sign)