// SLIDESHOW

let slideIndex = 0
showSlides()

function showSlides() {
let i
let slides = document.getElementsByClassName("mySlides")
let dots = document.getElementsByClassName("dot")
for (i = 0; i < slides.length; i++) {
slides[i].style.display = "none"; 
}
slideIndex++
if (slideIndex > slides.length) {slideIndex = 1}    
for (i = 0; i < dots.length; i++) {
dots[i].className = dots[i].className.replace(" active", "")
}
slides[slideIndex-1].style.display = "block"; 
dots[slideIndex-1].className += " active"
setTimeout(showSlides, 2000)
}

// TOTOP

const toTop=document.querySelector(".totop-btn")
window.addEventListener("scroll",() => {
    if(window.pageYOffset > 100) {
        toTop.classList.add("show")
    } else {
        toTop.classList.remove("show")
    }
})