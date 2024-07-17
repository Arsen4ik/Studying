// export const index = (_, res) => {
//     res.send('главная страница')
// }

// export const about = (_, res) => {
//     res.send('о сайте')
// }
// exports.index = (_, res) => {
//     res.send('главная страница')
// }

// exports.about = (_, res) => {
//     res.send('о сайте')
// }


// exports.index = function (request, response) {
//     response.send("Главная страница");
// };
// exports.about = function (request, response) {
//     response.send("О сайте");
// };

exports.index = function (request, response) {
    response.send("Главная страница");
};
exports.about = function (request, response) {
    response.send("О сайте");
};