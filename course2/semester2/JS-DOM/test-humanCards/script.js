let users = [{"id":1,"firstname":"Dean","lastname":"Herzog","email":"nnicolas@strosin.org","phone":"+9730215997761","birthday":"1933-08-13","gender":"male","address":{"id":0,"street":"61096 Jacques Park","streetName":"Jeramy Crossing","buildingNumber":"36035","city":"Juliusmouth","zipcode":"75358","country":"Sri Lanka","county_code":"MG","latitude":71.382901,"longitude":-94.67802},"website":"http:\/\/feeney.net","image":"http:\/\/placeimg.com\/640\/480\/people"},{"id":2,"firstname":"Simone","lastname":"McKenzie","email":"huels.harry@schuster.com","phone":"+1487827492761","birthday":"1992-11-17","gender":"female","address":{"id":0,"street":"7843 Eloisa Spurs","streetName":"Swaniawski Center","buildingNumber":"218","city":"East Adalberto","zipcode":"27563","country":"Timor-Leste","county_code":"KI","latitude":-78.328559,"longitude":-16.276249},"website":"http:\/\/stracke.org","image":"http:\/\/placeimg.com\/640\/480\/people"},{"id":3,"firstname":"Astrid","lastname":"Runolfsson","email":"turcotte.tressa@hotmail.com","phone":"+9039941585708","birthday":"2013-05-17","gender":"female","address":{"id":0,"street":"2091 Lyric Square","streetName":"Bruen Vista","buildingNumber":"919","city":"Maximillianbury","zipcode":"84327","country":"Saint Helena","county_code":"CC","latitude":50.991318,"longitude":148.411302},"website":"http:\/\/welch.net","image":"http:\/\/placeimg.com\/640\/480\/people"},{"id":4,"firstname":"Luz","lastname":"Fadel","email":"dessie86@hotmail.com","phone":"+2061954460703","birthday":"1968-07-04","gender":"female","address":{"id":0,"street":"67827 Pattie Loaf Suite 183","streetName":"Nikolaus Rapids","buildingNumber":"7198","city":"Clydemouth","zipcode":"09274","country":"Grenada","county_code":"TG","latitude":-15.066956,"longitude":-81.12869},"website":"http:\/\/ferry.biz","image":"http:\/\/placeimg.com\/640\/480\/people"},{"id":5,"firstname":"Alvina","lastname":"Brekke","email":"carter.edwin@gmail.com","phone":"+5100444690092","birthday":"1945-12-14","gender":"female","address":{"id":0,"street":"28524 Quinton Forks","streetName":"Garret Brooks","buildingNumber":"1376","city":"New Melvinashire","zipcode":"19965-7329","country":"Togo","county_code":"KH","latitude":-88.828598,"longitude":70.669653},"website":"http:\/\/kling.com","image":"http:\/\/placeimg.com\/640\/480\/people"},{"id":6,"firstname":"Joshuah","lastname":"Nitzsche","email":"barrett.hane@zulauf.com","phone":"+3402480240202","birthday":"2016-05-18","gender":"male","address":{"id":0,"street":"9402 Herta Creek","streetName":"Cyril Stream","buildingNumber":"2896","city":"Sipeston","zipcode":"73335","country":"Guam","county_code":"GR","latitude":58.697523,"longitude":-16.537931},"website":"http:\/\/wiegand.org","image":"http:\/\/placeimg.com\/640\/480\/people"},{"id":7,"firstname":"Jalyn","lastname":"Feest","email":"josiane88@hotmail.com","phone":"+8138622382449","birthday":"1983-08-11","gender":"female","address":{"id":0,"street":"831 Hermann Crossing Apt. 120","streetName":"Sporer Trail","buildingNumber":"28125","city":"South Tessie","zipcode":"36544-4852","country":"Palau","county_code":"TR","latitude":40.530856,"longitude":27.169783},"website":"http:\/\/schoen.com","image":"http:\/\/placeimg.com\/640\/480\/people"},{"id":8,"firstname":"Kaden","lastname":"Terry","email":"oconner.demarcus@gmail.com","phone":"+5568035991892","birthday":"1941-04-14","gender":"male","address":{"id":0,"street":"84898 Hilpert Village","streetName":"Rusty Dam","buildingNumber":"58487","city":"Glennaberg","zipcode":"66243","country":"Guadeloupe","county_code":"GI","latitude":65.893555,"longitude":-114.268701},"website":"http:\/\/runte.com","image":"http:\/\/placeimg.com\/640\/480\/people"},{"id":9,"firstname":"Margot","lastname":"Legros","email":"janis26@hotmail.com","phone":"+7394860445742","birthday":"1980-05-10","gender":"female","address":{"id":0,"street":"3947 Ebert Court","streetName":"Augustine Springs","buildingNumber":"6416","city":"New Rigobertostad","zipcode":"54789","country":"Ireland","county_code":"PR","latitude":39.688564,"longitude":112.039891},"website":"http:\/\/cronin.com","image":"http:\/\/placeimg.com\/640\/480\/people"},{"id":10,"firstname":"Nola","lastname":"Dare","email":"mzieme@kirlin.com","phone":"+2013337667826","birthday":"1957-12-28","gender":"female","address":{"id":0,"street":"915 Raphaelle Prairie","streetName":"Jefferey Walk","buildingNumber":"44487","city":"Annamouth","zipcode":"79910-7418","country":"France","county_code":"BA","latitude":23.420822,"longitude":-133.763383},"website":"http:\/\/zieme.info","image":"http:\/\/placeimg.com\/640\/480\/people"},{"id":11,"firstname":"Jarrod","lastname":"Ullrich","email":"jaeden.bartell@gmail.com","phone":"+7961624736093","birthday":"1970-03-14","gender":"male","address":{"id":0,"street":"624 Rogers Trafficway","streetName":"Estefania Locks","buildingNumber":"91670","city":"Lake Gudrunstad","zipcode":"39814","country":"Albania","county_code":"MK","latitude":-65.7475,"longitude":-61.247463},"website":"http:\/\/price.com","image":"http:\/\/placeimg.com\/640\/480\/people"},{"id":12,"firstname":"Eriberto","lastname":"O'Connell","email":"xolson@gmail.com","phone":"+9156333075154","birthday":"1981-10-19","gender":"male","address":{"id":0,"street":"69673 Monahan Harbor Apt. 642","streetName":"Mayert Motorway","buildingNumber":"526","city":"Konopelskimouth","zipcode":"07298-1185","country":"Bolivia","county_code":"GG","latitude":-4.211924,"longitude":-20.220164},"website":"http:\/\/funk.com","image":"http:\/\/placeimg.com\/640\/480\/people"}]

// console.log(users)
// console.log(users.length)

class Persons {
    constructor(obj){
        this.id = obj.id
        this.firstname = obj.firstname
        this.lastname = obj.lastname
        this.email = obj.email
        this.phone = obj.phone
        this.age = new Date().getFullYear() - new Date(obj.birthday).getFullYear()
        this.gender = obj.gender
        this.address = obj.address
        this.bg = getColor(30)
        this.cl = getColor(100)
    }
}

let data = [];
for(let i = 0; i < users.length; i++){
    let human = users[i] 
    // let adres = Object.entries(users[i].address)
    // console.log(adres)
    data.push(new Persons(human))
}
// console.log(data)

let html = ""

for(let val of data){
    html += `
    <div class="card" style="background-color: ${val.bg}; color: ${val.cl}">
    <div class="num1">
    <div><div>${val.id}</div></div>
    <div>${val.firstname} ${val.lastname}</div>
    <div>${val.age} y.o.</div>
    </div>
    <div class="num2">
    <div class="datas">
    <p>${val.email}</p>
    <p>${val.phone}</p>
    <p>${val.gender}</p>
    </div>
    <div class="adres">
    <p>${val.address.buildingNumber}-${val.address.city}-${val.address.country}</p>
    </div>
    <div class="img"></div>
    </div>
    </div>
    `
    // console.log(val.address)
}
document.body.innerHTML += html