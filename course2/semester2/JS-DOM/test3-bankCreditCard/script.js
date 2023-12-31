let input1 = document.querySelector('.input1')
let input2 = document.querySelector('.input2')
let input3 = document.querySelector('.input3')
let input4 = document.querySelector('.input4')
let input5 = document.querySelector('.input5')

let newCard = document.querySelector('.newCard')
let el1 = document.querySelector('.el1')
let el2 = document.querySelector('.el2')
let el3 = document.querySelector('.el3')
let el4 = document.querySelector('.el4')
let el5 = document.querySelector('.el5')

let cards = document.querySelector('.cards')


let addCard = document.querySelector(".addCard");
let img;
input1.addEventListener("change", (e) => {
    el1.textContent = e.target.value;
    img = el1.textContent
    if(img == 'Сбер'){
        img = 'https://esa-res.online.sberbank.ru/ESA/common/r-2.4/img/image_sber.png'
    } else if(img == 'Альфа банк'){
        img = 'https://cdn-st1.rtr-vesti.ru/vh/pictures/xw/316/565/8.jpg'
    } else if(img == 'ВТБ'){
        img = 'https://region.center/source/Orel/IRA/VTB-1.jpg'
    } else if(img == 'Тинькофф'){
        img = 'https://3dnews.ru/assets/external/illustrations/2021/06/09/1041608/1.png'
    } else if(img == 'МИР'){
        img = 'https://bankirsha.com/files/pic/1525410206_mir.jpg'
    } else {
        img = 'https://maintransport.ru/assets/images/articles/Visa.svg.png'
    }
    newCard.style.backgroundImage = `url(${img})`
})
console.log(img)

input2.addEventListener('input', (e) => {
    el2.textContent = e.target.value
})
input3.addEventListener('input', (e) => {
    el3.textContent = e.target.value
})
input4.addEventListener('input', (e) => {
    el4.textContent = e.target.value
})
input5.addEventListener('input', (e) => {
    el5.textContent = e.target.value
})

form = document.forms.addCard

form.addEventListener('reset', () => {
    newCard.style.backgroundImage = `none`
    el1.textContent = ''
    el2.textContent = ''
    el3.textContent = ''
    el4.textContent = ''
    el5.textContent = ''
    
})

form.addEventListener('submit', e => {
    e.preventDefault()
    let arr = []
    for(let i = 0; i < form.elements.length; i++){
        let el = form.elements[i].value
        arr.push(el)
    }
    cards.innerHTML += `
    <div class="newCard" style="background-image: url(${img});">
    <div class="el1">${arr[0]}</div>
    <div class="el2">${arr[1]}</div>
    <div class="el3">${arr[2]}</div>
    <div class="el4">${arr[3]}</div>
    <div class="el5">${arr[4]}</div>
    </div>
    `

    el1.textContent = e.target.value
    el2.textContent = e.target.value
    el3.textContent = e.target.value
    el4.textContent = e.target.value
    el5.textContent = e.target.value
    newCard.style.backgroundImage = `none`
})