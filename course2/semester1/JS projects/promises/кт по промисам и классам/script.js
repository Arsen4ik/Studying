// // num 1

// class Email {
//     constructor(email){
//         this.email = email
//     }
//     get isValid(){
//         return (this.email.includes('*', '#', '$', '%', '^')) || (this.email.slice(this.email.indexOf('.')+1, this.email[this.email.length]).length>3)
//     }
//     set setEmail(arr){
//         this.email = arr.join('')
//     }

// }
// let res1 = new Email('newEmail@gmail.com')
// console.log(res1)
// console.log(res1.isValid)

// res1.setEmail = ['ars','@ya.','su']

// console.log(res1)
// console.log(res1.isValid)
// //
// let res2 = new Email('newEmail@gmail.ahaha')
// console.log(res2)
// console.log(res2.isValid)

// res2.setEmail = ['ars*3','@ya.','su']

// console.log(res2)
// console.log(res2.isValid)

// // num 2

// class Contact {
//     constructor(phone){
//         this.phone = phone
//     }
//     get whatPhone(){
//         if((this.phone[0] == '+' && this.phone.length == 13) || (this.phone[0] !== '+' && this.phone.length == 12)){
//             return 'мобильный'
//         } else if((this.phone[0] == '+' && this.phone.length == 19) || (this.phone[0] !== '+' && this.phone.length == 18)){
//             return 'городской'
//         } else if(!this.phone.includes('+')){
//             return 'неизвестный'
//         }
//     }
// }
// let res3 = new Contact('+123456789123456789')
// console.log(res3)
// console.log(res3.whatPhone)

// num 3

// let url = "https://jsonplaceholder.typicode.com/comments"; 
// fetch(url) 
// .then(res => res.json()) 
// .then(data => { 
//     let newArray = data.filter(elem => elem.email.length > 20) 
//     console.log(newArray) 
// })

// num 4

let usersUrl = 'https://jsonplaceholder.typicode.com/users' 
let commentsUrl = 'https://jsonplaceholder.typicode.com/comments' 

async function getCommentByUser(nick) {
        let usersRes = await fetch(usersUrl) 
        let usersData = await usersRes.json() 
    
        let commentsRes = await fetch(commentsUrl) 
        let commentsData = await commentsRes.json() 
    
        let userComments = commentsData.filter(elem => elem.id == usersData.find(elem => elem.username == nick).id) 
        console.log(userComments) 
    } 
    getCommentByUser("Samantha")

