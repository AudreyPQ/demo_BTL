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



const navBtns_1 = document.querySelectorAll('.js-none_1')
const modal_1 = document.querySelector('.js-modal_1')
const modalClose_1 = document.querySelector('.js-modal-close_1')
const modalContainer_1 = document.querySelector('.js-modal-container_1')

function showUpgrade1 () {
    modal_1.classList.add('open')
}

function hideUpgrade1 () {
    modal_1.classList.remove('open')
}

for (const navBtn1 of navBtns_1) {
    navBtn1.addEventListener('click', showUpgrade1)
}

modalClose_1.addEventListener('click', hideUpgrade1)
modal_1.addEventListener('click', hideUpgrade1)
modalContainer_1.addEventListener('click', function (event) {
    event.stopPropagation()
})


const modalClose_2 = document.querySelector('.js-modal-close_2')
modalClose_2.addEventListener('click', hideUpgrade2)
function hideUpgrade2 () {
    modal_1.classList.remove('open')
}



// document.getElementById('Btn').addEventListener('click', function(){
//     var year =document.getElementById("year").value;
//     var course =document.getElementById("course").value;
//     var grade =document.getElementById("grade").value;

    
     
//     var items = document.getElementsByClassName("IT2103")

//     for(var i = 0; i < items.length; i++)
//     {
//         var IT03 = items[i].getElementsByTagName("td")[5]
//         if(grade == IT03.innerText)
//         {
//         document.getElementsByTagName("thead").style.display = "block";
//         items[i].style.display = "block";
//         }
//     }
// })


const toTop=document.querySelector(".totop-btn")
window.addEventListener("scroll",() => {
    if(window.pageYOffset > 100) {
        toTop.classList.add("show")
    } else {
        toTop.classList.remove("show")
    }
})

