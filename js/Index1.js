const toTop=document.querySelector(".totop-btn")
window.addEventListener("scroll",() => {
    if(window.pageYOffset > 100) {
        toTop.classList.add("show")
    } else {
        toTop.classList.remove("show")
    }
})


const navBtns = document.querySelectorAll('.js-none')
const modal = document.querySelector('.js-modal')
const modalClose = document.querySelector('.js-modal-close')
const modalContainer = document.querySelector('.js-modal-container')

function showUpgrade () {
    modal.classList.add('open')
}

function hideUpgrade () {
    modal.classList.remove('open')
}

for (const navBtn of navBtns) {
    navBtn.addEventListener('click', showUpgrade)
}

modalClose.addEventListener('click', hideUpgrade)
modal.addEventListener('click', hideUpgrade)
modalContainer.addEventListener('click', function (event) {
    event.stopPropagation()
})
