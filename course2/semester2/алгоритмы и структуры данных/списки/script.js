// class Animal {
//     // static number = 0
//     constructor(data, next=null){
//         // this.number = Animal.number++
//         this.data = data
//         this.next = next
//     }

// }
// let el4 = new Animal('tail')
// let el3 = new Animal('legs', el4)
// let el2 = new Animal('body')
// let el1 = new Animal('head', el2)


// class Functions {
//     data = null
//     next = null
//     insert(el){
//         this.data = el
//         // this.next = 
//     }
// }
// let cnsq = new Functions()
// cnsq.insert('body')
// cnsq.insert('head')
// console.log(cnsq)


// function func(el, num){
//     let element = 1
//     // console.log(el.next)
//     while(el.next !== null){
//         console.log(el.data)
//         if(element == num){
//             return el.data
//         }
//         el = el.next
//         element++
//     }
// }
// console.log(func(el1, 3))



////////////////////



// class Animal {
//     static number = null
//     constructor(data, next=null){
//         this.data = data
//         this.next = next
//         Animal.number = this
//     }
// }

// let el1 = new Animal('head')
// new Animal('body', el1)

// class Methods {
//     insert(data, next){
//         this.data = data
//         this.next = next
//         Animal.number = this
//     }
//     append(data){
//         this.data = data
//         this.next = null
//         let el = Animal.number.next
//         // console.log(Animal.number.next)
//         do {
//             el = el.next
//             // console.log(el.data)
//             if(el.next == null){
//                 el.next = this
//                 // console.log(el.data)
//                 break
//             }
//             // console.log(el)
//         } while(el.next !== null)
//     }
//     remove(element){
//         let el = Animal.number

//         if(element !== el.data){
//             while(el.next.data !== element){
//                 el = el.next
//             } 
//             el.next = el.next.next
//         } else {
//             Animal.number = Animal.number.next
//         }
//     }
//     removeIdx(idx){
//         // idx
//         let el = Animal.number
//         let cnt = 1
//         if(idx == cnt){
//             Animal.number = Animal.number.next
//             // console.log('hello')
//         } else {
//             idx--
//             while(cnt < idx){
//                 el = el.next
//                 cnt++
//                 console.log(el.data)
//             }
//             el.next = el.next.next
//         }
       
//     }
//     find(element){
//         let el = Animal.number
//         while(el.data !== element){
//             // console.log(el.data)
//             el = el.next
//         }
//         console.log(el)
//     }
//     Iterate(){
//         let el = Animal.number
//         while(el.next !== null){
//             console.log(el.data)
//             el = el.next
//         }
//         console.log(el.data)
//     }
// }


// console.log(Animal.number)


// new Methods().insert('legs', Animal.number)
// new Methods().insert('tail', Animal.number)

// // console.log(Animal.number)

// new Methods().append('hair')
// new Methods().append('horn')

// // console.log(Animal.number)

// // new Methods().remove('tail')
// // new Methods().remove('hair')

// // console.log(Animal.number)

// // new Methods().removeIdx(3)
// // new Methods().removeIdx(1)

// // console.log(Animal.number)

// // new Methods().find('hair')

// // console.log(Animal.number)

// // new Methods().Iterate()

// console.log(Animal.number)




class Animal {
    static number = null
    constructor(data, next=null){
        this.data = data
        this.next = next
        Animal.number = this
    }
}

let el1 = new Animal('head')
new Animal('body', el1)

class Methods {
    insert(data, next){
        this.data = data
        this.next = next
        Animal.number = this
    }
    append(data){
        this.data = data
        this.next = null
        let el = Animal.number.next
        // console.log(Animal.number.next)
        do {
            el = el.next
            // console.log(el.data)
            if(el.next == null){
                el.next = this
                // console.log(el.data)
                break
            }
            // console.log(el)
        } while(el.next !== null)
    }
    remove(){
        let el = Animal.number
        while(el.next.next !== null){
            el = el.next
        }
        el.next = null
    }
    delete(){
        console.log(Animal.number.data)
        Animal.number = Animal.number.next
    }
    size(){
        let cnt = 1
        let el = Animal.number
        while(el.next !== null){
            el = el.next
            cnt++
        }
        return cnt
    }
    // remove(element){
    //     let el = Animal.number

    //     if(element !== el.data){
    //         while(el.next.data !== element){
    //             el = el.next
    //         } 
    //         el.next = el.next.next
    //     } else {
    //         Animal.number = Animal.number.next
    //     }
    // }
    // removeIdx(idx){
    //     // idx
    //     let el = Animal.number
    //     let cnt = 1
    //     if(idx == cnt){
    //         Animal.number = Animal.number.next
    //         // console.log('hello')
    //     } else {
    //         idx--
    //         while(cnt < idx){
    //             el = el.next
    //             cnt++
    //             console.log(el.data)
    //         }
    //         el.next = el.next.next
    //     }
       
    // }
    find(element){
        let el = Animal.number
        while(el.data !== element){
            // console.log(el.data)
            el = el.next
        }
        console.log(el)
    }
    Iterate(){
        let el = Animal.number
        while(el.next !== null){
            console.log(el.data)
            el = el.next
        }
        console.log(el.data)
    }
}


console.log(Animal.number)


new Methods().insert('legs', Animal.number)
new Methods().insert('tail', Animal.number)

// console.log(Animal.number)

new Methods().append('hair')
new Methods().append('horn')

// console.log(Animal.number)

// new Methods().remove('tail')
// new Methods().remove('hair')

// console.log(Animal.number)

// new Methods().removeIdx(3)
// new Methods().removeIdx(1)

// console.log(Animal.number)

// new Methods().find('hair')

// console.log(Animal.number)

new Methods().Iterate()

console.log(new Methods().size())

console.log(Animal.number)

new Methods().delete()
new Methods().delete()

console.log(Animal.number)

new Methods().remove()
new Methods().remove()

console.log(Animal.number)

console.log(new Methods().size())


function func(n, arr){
    let newArr = arr
    while(newArr.length > 2){
        if(newArr.length < n){
            n -= newArr.length
            console.log(n)
        }
        console.log(newArr.slice(n))
        console.log(newArr.slice(0, n-1))
        let arr1 = newArr.slice(n)
        let arr2 = newArr.slice(0, n-1)
        newArr = arr1.concat(arr2)
        console.log(newArr)
    }
    return newArr[0]
}
array = ['Петя', 'Лена', 'Гена', 'Витя', 'Саша']
console.log(func(4, array))