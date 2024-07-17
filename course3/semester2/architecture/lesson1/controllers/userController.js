// exports.addUser = (_, res) => {
//     res.send('добавление пользователя')
// }

// exports.getUsers = (_, res) => {
//     res.send('список пользователей')
// }


// exports.addUser = function (request, response) {
//     response.send("Добавление пользователя");
// };
// exports.getUsers = function (request, response) {
//     response.send("Список пользователей");
// };



// const User = require('../models/user.js')

// exports.addUser = (_, res) => {
//     res.render("create.hbs")
// }
// exports.getUsers = (_, res) => {
//     res.render('users.hbs', {
//         users: User.getAll()
//     })
// }

// exports.postUser = (req, res) => {
//     const username = req.body.name;
//     const userage = req.body.age;
//     const user = new User(username, userage)
//     user.save()
//     res.redirect('users')
// }


const User = require("../models/user.js");

exports.addUser = function (request, response) {
    response.render("create.hbs");
};
exports.getUsers = function (request, response) {
    response.render("users.hbs", {
        users: User.getAll()
    });
};
exports.postUser = function (request, response) {
    const username = request.body.name;
    const userage = request.body.age;
    const user = new User(username, userage);
    user.save();
    response.redirect("/users");
};