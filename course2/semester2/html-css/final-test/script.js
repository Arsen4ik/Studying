let btn = document.querySelector('.header-img')
let sideBar = document.querySelector('.side-bar')
let closeSideBar = document.querySelector('.close-side-bar')
let aboutSoubleSide1 = document.querySelector('.about-double-side1')
let aboutSoubleSide2 = document.querySelector('.about-double-side2')



let isNavbarMenu = false
btn.addEventListener('click', () => {
    if(!isNavbarMenu){
        sideBar.style.left = 0
        isNavbarMenu = true
    } else {
        sideBar.style.left = '-200px'
        isNavbarMenu = false
    }
})
closeSideBar.addEventListener('click', () => {
    // sideBar.className = "side-bar-none"
    // sideBar.style.display = 'none'
    // sideBar.style.padding = 0
    sideBar.style.left = '-200px'
    isNavbarMenu = false
})

setTimeout(() => {
    aboutSoubleSide2.style.right = 0
    aboutSoubleSide1.style.left = '-100vw'
}, 3000)
setInterval(() => {
    aboutSoubleSide1.style.left = 0
    aboutSoubleSide2.style.right = '-100vw'

}, 6000)
setTimeout(() => {
    setInterval(() => {
        aboutSoubleSide2.style.right = 0
        aboutSoubleSide1.style.left = '-100vw'
    }, 6000)
}, 3000)