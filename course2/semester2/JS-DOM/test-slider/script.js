
    let pointer = document.querySelector('.pointer');
    let section = document.querySelector('section');
    let divs = document.querySelectorAll('section > div')
    divs = Array.from(divs)

    // let hm = document.querySelector('.hm');
    // let hm2 = document.querySelector('.hm2');

    mgL = getComputedStyle(section).marginLeft;
    mgL = mgL.slice(0, getComputedStyle(section).marginLeft.length-2)
    pointer.style.marginLeft = mgL - 5 + 'px'

    SecWidth = getComputedStyle(section).width;
    SecWidth = SecWidth.slice(0, getComputedStyle(section).width.length-2)


    pointer.addEventListener('mousedown', (event) => {
        event.preventDefault();
        document.addEventListener('mousemove', onMouseMove);
        function onMouseMove(e){
            let cnt = e.clientX - mgL;

            // hm.innerHTML = cnt
            // hm2.innerHTML = e.clientX
            
            divs.forEach(el => {
                el.style.backgroundColor = 'crimson'
            })
            divs[0].style.backgroundColor = 'forestgreen'
            document.body.firstChild.nextSibling.style.color = 'crimson'
            for(let i = 2; i <= Math.floor(divs.length/2)*2; i+=2){
                divs[i].style.height = '14px'
            }
                let checker = 90
                for(let i = 2; i <= Math.floor(divs.length/2)*2; i+=2){
                    if(cnt > checker){
                        divs[i].style.backgroundColor = 'forestgreen'
                        divs[i].style.height = '20px'
                        divs[i-1].style.backgroundColor = 'forestgreen'
                        checker += 76
                    } else {
                        break
                    }
                }
                if(cnt > Math.floor(SecWidth)-32){
                    document.body.firstChild.nextSibling.style.color = 'forestgreen'
                }
            if(e.clientX < mgL){
                pointer.style.marginLeft = mgL + 'px'
                return;
            } else if (e.clientX > window.innerWidth-mgL-42) {
                console.log(window.innerWidth-mgL)
                pointer.style.marginRight = window.innerWidth-mgL-8 + 'px'
                return;
            }
            pointer.style.marginLeft = e.clientX-20 + 'px';   
        }
        document.addEventListener('mouseup', () => {
            document.removeEventListener('mousemove', onMouseMove);
        })
    })