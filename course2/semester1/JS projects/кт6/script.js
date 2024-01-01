let users = [
    {id: 1, name: 'Alex', lastname: 'Wilyam', age: 20},
    {id: 2, name: 'Steven', lastname: 'King', age: 34} 
   ]
    
let id = 3

function addUser(name, Lname, age){
    let idObj = {id}
    let newObj = {name, Lname, age}
    return ++id, Object.assign(idObj, newObj)
}

// function addUser(name, lastname, age){
//     max_id = Math.max(...users.map(elem => elem.id))
//     users.push({id: max_id+1, name, lastname, age})
// }

function updateUser(id, name, Lname, age){
    let ind = users.findIndex((el) => id === el.id)
    return users[ind] = {id: id, name: name, Lname: Lname, age: age}
    // return users[ind] = {id, name, Lname, age}
}

function deleteUserId(id){
    let ind = users.findIndex((el) => id === el.id)
    users.splice(ind, 1)
}

users.push(addUser('aa', 'ff', 4))
users.push(addUser('bb', 'ss', 45))

updateUser(3, 'AA', 'FF', 5)

deleteUserId(2)


console.log(users)