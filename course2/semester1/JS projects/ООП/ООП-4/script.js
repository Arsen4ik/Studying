class users {
    constructor(Fname, Lname, rate, days){
        this.Fname = Fname
        this.Lname = Lname
        this.rate = rate
        this.days = days
    }
    get getSalary(){
        return this.rate * this.days
    }
    set setRate(newRate){
        this.rate = newRate
    }
    set setDays(newDays){
        this.days = newDays
    }
}

let obj1 = new users('Ars', 'Faz', 777, 1001)
console.log(obj1)

console.log(obj1.getSalary)

obj1.setRate = 555
obj1.setDays = 2000

console.log(obj1)
console.log(obj1.getSalary)


// приватные свойства

class humans {
    constructor(name, age){
        this.name = name
        this.age = age
    }
    #privateprops = 10

    #privateMethod(){
        console.log('hello')
    }

    methods(){
        console.log(this.#privateprops)
    }
}
let res = new humans('ars', 17)
console.log(res)
res.methods()

// modified

class users {
    constructor(Fname, Lname, rate, days){
        this.Fname = Fname
        this.Lname = Lname
        this.rate = rate
        this.days = days
    }

    #coef = 0.72

    get getSalary(){
        return this.rate * this.days * this.#coef
    }
    set setRate(newRate){
        this.rate = newRate
    }
    set setDays(newDays){
        this.days = newDays
    }
    set changeCoef(newCoef){
        this.#coef = newCoef
    }
}

let obj1 = new users('Ars', 'Faz', 777, 1001)
console.log(obj1)

console.log(obj1.getSalary)

obj1.setRate = 555
obj1.setDays = 2000

console.log(obj1)
console.log(obj1.getSalary)

obj1.changeCoef = 0.8

console.log(obj1)
console.log(obj1.getSalary)
