const cards = document.querySelector('.cards')

const inp1 = document.querySelector('#inp1')
const inp2 = document.querySelector('#inp2')
const inpImg = document.querySelector('#inp-img')

const btn = document.querySelector('#btn')

// console.log(inpImg.value);

btn.addEventListener('click', () => {
    console.log(inp1, inp2, inpImg);
    console.log(inp1.value, inp2.value, inpImg.value);
    cards.innerHTML += `<div class='card'><div class='round' style='background-color: crimson;'></div><h1>${inp1.value}<h1><h2>${inp2.value}</h2></div>`
})