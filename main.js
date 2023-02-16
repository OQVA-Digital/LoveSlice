





/* LOADING BG + DOCUMENT.READYSTATE */

/* const loadingBg = document.getElementById('loading_bg')

document.onreadystatechange = function () {
    if (document.readyState == "interactive" || document.readyState == "complete") {
        loadingBg.style.opacity = 0;
        loadingBg.style.visibility = 'hidden';
        setTimeout(() => {
            menuBt.style.transform = 'translateY(0) rotate(0deg)'
        }, 200);
    }
} */





/* HAMBURGUER MENU */

const hambt = document.querySelector('.hamburger_bt')
const nav = document.querySelector('header nav')

let showingNav = false;

function toggleNav() {
    if(showingNav == false) {
        showingNav = true;
        nav.classList.add('showing_nav')
    } else {
        showingNav = false;
        nav.classList.remove('showing_nav')
    }
}

hambt.addEventListener('click', toggleNav)

document.body.onscroll = function() {
    if(showingNav == true) {
        toggleNav()
    }
}








        // PIZZA CAROUSEL
        
        const pizzas = document.querySelectorAll('.pizza_carousel .pizza')
        const introSec = document.querySelector('.intro_sec')
        
        let mobileOrder;
        let increment = 1;

        
        setTimeout(() => {
            for(i=0;i<pizzas.length;i++) {

                pizzas[i].addEventListener('click', function() {
                    if(this.className.replace(/\D/g, "") <= 1) {
                        increment++
                        for(i=0;i<pizzas.length;i++) {
                            mobileOrder = i;
                            pizzas[mobileOrder].className = `pizza p${mobileOrder + increment}`
                        }
                    } else if(this.className.replace(/\D/g, "") > 1) {
                        increment--
                        for(i=0;i<pizzas.length;i++) {
                            mobileOrder = i;
                            pizzas[mobileOrder].className = `pizza p${mobileOrder + increment}`
                        }
                    }
                })
                
                mobileOrder = i;
                pizzas[mobileOrder].className = `pizza p${mobileOrder + 1}`

                mobileOrder++
            }
            pizzas[7].click()
            pizzas[7].click()
            pizzas[7].click()
        }, 70);


        
        let touchstartX = 0
        let touchendX = 0

        let touchstartY = 0
        let touchendY = 0
            
        function checkDirection() {

                if((touchendX + 30) < touchstartX && touchendY < (touchstartY + 100) && touchendY > (touchstartY - 70)) {
                    if(increment != -6) {
                    
                        increment--

                        for(i=0;i<pizzas.length;i++) {
                            mobileOrder = i;
                            pizzas[mobileOrder].className = `pizza p${mobileOrder + increment}`
                        }
                    } else {
                        
                    }
                }
            
                if(touchendX > (touchstartX + 30) && touchendY > (touchstartY - 50) && touchendY < (touchstartY + 50)) {
                    if(increment != 1) {

                        increment++

                        for(i=0;i<pizzas.length;i++) {
                            mobileOrder = i;
                            pizzas[mobileOrder].className = `pizza p${mobileOrder + increment}`
                        }
                    } else {
                        
                    }
                }

        }

        introSec.addEventListener('touchstart', e => {
            touchstartX = e.changedTouches[0].screenX
            touchstartY = e.changedTouches[0].screenY
        })

        introSec.addEventListener('touchend', e => {
            touchendX = e.changedTouches[0].screenX
            touchendY = e.changedTouches[0].screenY
            checkDirection()
        })