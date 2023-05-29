let nav = document.querySelector('.menu-nav')
let btn = document.querySelector('.btn-menu-mobile')
let menuitens = document.querySelectorAll('.btn-menu')
let btMenuOpen = document.querySelector('.menu-open')
let btMenuClose = document.querySelector('.menu-close')

function toggle(){
    if(nav.classList.contains('showmenu')){
        CloseMenu()

    } else {
        nav.classList.add('showmenu')
        btMenuOpen.style.display = 'none'
        btMenuClose.style.display = 'flex'
    }
}


function CloseMenu (){
    nav.classList.remove('showmenu')
    btMenuOpen.style.display = 'block'
    btMenuClose.style.display = 'none'
}


function AddEventsMenu (item){
    item.addEventListener('click', CloseMenu)
}



btn.addEventListener('click',toggle)
menuitens.forEach(AddEventsMenu)



