let menuLinks = document.querySelectorAll('nav ul li');
let scrollDownArrow = document.querySelector('header .scroll-down-arrow');
let showMenuBar = document.querySelector('header nav .menu-bar');
let menuList = document.querySelector('header nav ul');
let portfolioSec = document.querySelector('.portfolio-sec');
let portfolioFirstTextImg = document.querySelector('.portfolio-sec .img-grid .project .text');
let staticSec = document.querySelector('.statics-sec');
let staticNumber = document.querySelectorAll('.statics-sec .stat .number');
let bgVideo = document.querySelector('.video-sec video');
let scrollUparrow = document.querySelector('.scroll-up-arrow');

// ------------------window onload-----------------
window.onload = () => {
    loadBG(); // load header bg first
    getyear(); // get copyrights year
}

// ------------Menu scroll to section----------------
menuLinks.forEach((e) => {
    e.onclick = (el) => {
        el.preventDefault();
        document.querySelector(e.dataset.section).scrollIntoView({
            behavior: 'smooth'
        });
    }
});

// --------------Scroll down arrow in header--------------
scrollDownArrow.onclick = () => {
    document.querySelector(scrollDownArrow.dataset.section).scrollIntoView({
        behavior: 'smooth'
    });
}

// -------------Show menu onclick menubar icon-------------
showMenuBar.onclick = (e) => {
    e.stopPropagation();
    menuList.classList.toggle('active');
}

document.addEventListener('click', (e) => {
    if (e.target != showMenuBar && menuList) {
        menuList.classList.remove('active');
    }
});

// ------------Show text of portfolio first img------------- 
document.addEventListener('scroll', () => {
    if (window.scrollY > portfolioSec.offsetTop) {
        portfolioFirstTextImg.classList.add('active');
    }
})

// ------------Create statics counter-------------------
let count = true;
document.addEventListener('scroll', () => {
    if (window.scrollY > staticSec.offsetTop -200) {
        if (count == true) {
            staticNumber.forEach((e) => {
                let counter = setInterval(() => {
                    e.textContent++;
                    if (e.textContent == e.dataset.number) {
                        clearInterval(counter);
                    }
                }, 20);
            });
        }
        count = false;
    }
});

// ----------- Testimonials slider ------------
var swiper = new Swiper(".mySwiper", {
    slidesPerView: 1,
    spaceBetween: 30,
    loop: true,
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
});

// ------------Scroll up arrow & show background video-----------------
document.addEventListener('scroll', () => {
    if (window.scrollY > 600) {
        scrollUparrow.style.right = '0';
        bgVideo.style.visibility = 'visible';
    } else {
        scrollUparrow.style.right = '-40px';
    }
});

scrollUparrow.onclick = () => {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    })
}

/*  window onload function
    load header bg first
*/
function loadBG() {
    document.querySelector('header').style.backgroundImage = 'url(assets/landing.jpg)';
}

/*  window onload function
    get copyrights year
*/
function getyear() {
    let date = new Date();
    document.querySelector('footer .setyear').textContent = date.getFullYear();
}