// обычный метод
function getRandomNumber(num){
    return Math.round(Math.random()*num)
}
console.log(getRandomNumber(100))
// метод анонимной функции
let getRandomNumber2 = function(num){
    return Math.round(Math.random()*num)
}
console.log(getRandomNumber2(100))
// метод стрелочной функции
let getRandomNumber3 = (num) => Math.round(Math.random()*num)

console.log(getRandomNumber3(100))