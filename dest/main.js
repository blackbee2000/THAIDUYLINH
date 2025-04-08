console.log("THAIDUYLINH")

// Loading


setTimeout(() => {
    init();
}, 2000);

// Run init
function init() {
    let body = document.querySelector("body");
    let headerStart = document.querySelector("header");

    body.classList.remove("activeStart");
    headerStart.classList.remove("activeStart");
    body.classList.add("activeStart");
    headerStart.classList.add("activeStart");
}

// Cursor
let cursor = document.querySelector(".cursor")
document.addEventListener("mousemove", (e) => {
    gsap.to(cursor, 0.2, {x: e.clientX, y: e.clientY})
})
let cursorImageFollow = document.querySelector(".cursor-image-follow")
document.addEventListener("mousemove", (e) => {
    gsap.to(cursorImageFollow, 0.2, {x: e.clientX, y: e.clientY})
})

// Click button menu
function onClickMenu() {
    /// Button hambuger
    var btn = document.querySelector(".btn_menu")
    btn.classList.toggle("active")

    /// Logo
    var header = document.querySelector("header")
    header.classList.toggle("activeMenu")
    document.querySelector("body").classList.toggle("activeMenu")

    /// Nav
    var nav = document.querySelector("nav")
    nav.classList.toggle("active")
}

// Hover gsap button


// Draw signature

// 
// Hover custom cursor
// 
// Logo
let logo = document.querySelector(".logo")
logo.addEventListener("mouseover", (e) => {
    cursor.classList.add("activeLogo")
})
logo.addEventListener("mouseout", (e) =>{
    cursor.classList.remove("activeLogo")
})
// Button hambuger
let btnMenu = document.querySelector(".btn_menu")
console.log(btnMenu)
btnMenu.addEventListener("mouseover", (e) => {
    cursor.classList.add("activeBtnMenu")
})
btnMenu.addEventListener("mouseout", (e) =>{
    cursor.classList.remove("activeBtnMenu")
})
// Image works
let imgWork = document.querySelectorAll(".works-content-img")
for(let i = 0; i < imgWork.length; i++){
    imgWork[i].addEventListener("mouseover", (e) => {
        cursor.classList.add("activeImageWorks")
    })

    imgWork[i].addEventListener("mouseout", (e) => {
        cursor.classList.remove("activeImageWorks")
    })
}
// Contact gmail
let gmail = document.querySelector(".contact_gmail")
gmail.addEventListener("mouseover", (e) => {
    cursor.classList.add("activeGmail")
})
gmail.addEventListener("mouseout", (e) =>{
    cursor.classList.remove("activeGmail")
})
// Contact phone
let phone = document.querySelector(".contact_phone")
phone.addEventListener("mouseover", (e) => {
    cursor.classList.add("activeBtnMenu")
})
phone.addEventListener("mouseout", (e) =>{
    cursor.classList.remove("activeBtnMenu")
})
// Menu
let menus = document.querySelectorAll(".menu")
for(let i = 0; i < menus.length; i++){
    menus[i].addEventListener("mouseover", (e) => {
        cursor.classList.add("activeMenuItem")
    })

    menus[i].addEventListener("mouseout", (e) => {
        cursor.classList.remove("activeMenuItem")
    })
}
// Title works
let titleWorks = document.querySelectorAll(".work-title")
for(let i = 0; i < titleWorks.length; i++){
    titleWorks[i].addEventListener("mouseover", (e) => {
        cursor.classList.add("activeTitleWorks")
    })

    titleWorks[i].addEventListener("mouseout", (e) => {
        cursor.classList.remove("activeTitleWorks")
    })
}
// Button visit
let btnVisits = document.querySelectorAll(".work-btn-visit")
for(let i = 0; i < btnVisits.length; i++){
    btnVisits[i].addEventListener("mouseover", (e) => {
        cursor.classList.add("activeBtnVisitWorks")
    })

    btnVisits[i].addEventListener("mouseout", (e) => {
        cursor.classList.remove("activeBtnVisitWorks")
    })
}
// Title position
let titlePosition = document.querySelector(".position_title")
let bigTitlePosition = document.querySelector(".position_bigTitle")
titlePosition.addEventListener("mouseover", (e) => {
    cursor.classList.add("activeImageFollow")
    cursorImageFollow.classList.add("activeCursorImageFollow")
})
titlePosition.addEventListener("mouseout", (e) =>{
    cursor.classList.remove("activeImageFollow")
    cursorImageFollow.classList.remove("activeCursorImageFollow")
})
bigTitlePosition.addEventListener("mouseover", (e) => {
    cursor.classList.add("activeImageFollow")
    cursorImageFollow.classList.add("activeCursorImageFollow")
})
bigTitlePosition.addEventListener("mouseout", (e) =>{
    cursor.classList.remove("activeImageFollow")
    cursorImageFollow.classList.remove("activeCursorImageFollow")
})

// Click go to top
function onToTop() {
    window.scrollTo({top: 0, behavior: 'smooth'});
}


// Library
AOS.init();


