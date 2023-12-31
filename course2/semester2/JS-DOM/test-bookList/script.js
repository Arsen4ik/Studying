let btn = document.querySelectorAll('button')
// console.log(btn)

btn.forEach(e => {
    e.sign = true
    e.addEventListener('click', () => {
        // console.log(e.parentElement.nextElementSibling)
        // console.log(e.sign)
        if(e.sign){
            // console.log(e.firstChild)
            e.parentElement.nextElementSibling.style.display = "none"
            e.firstChild.src = "./images/plus-1469-svgrepo-com.svg"
            e.sign = false
        } else {
            e.parentElement.nextElementSibling.style.display = "inline"
            e.firstChild.src = "./images/minus-1468-svgrepo-com.svg"
            e.sign = true
        }
    })
})