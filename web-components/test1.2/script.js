const head = document.getElementById('head')
const color = document.getElementById('color')
const txt = document.getElementById('txt')

const btn = document.getElementById('btn')

const avatars = document.getElementById('avatars')

btn.addEventListener('click', () => {
    avatars.innerHTML += (new NewAvatar(color.value, txt.value, head.value).tag)
})

class Avatar {
    static count = 1
    bg = 'aliceblue'
    texts = 'no data'
    header = 'no information'
    cnt = Avatar.count
    constructor(){
        Avatar.count++
    }
}

class NewAvatar extends Avatar {
    constructor(Nbg, Ntext, Nheader){
        super()
        this.bg = Nbg === '#000000' ? this.bg : Nbg
        this.texts = Ntext || this. texts
        this.header = Nheader || this.header
        this.tag = `<div class="avatar" style="background-color: ${this.bg};">
        <div class="avatar_logo"></div>
        <h1>${this.header}</h1><p>${this.texts}</p><p>кол-во аватаров: ${this.cnt}</p>
        </div>`
    }
}