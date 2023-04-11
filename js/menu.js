let nav = document.querySelector('.menu-nav')
let btn = document.querySelector('.btn-menu-mobile')
let menuitens = document.querySelectorAll('.btn-menu')

function toggle(){
    if(nav.classList.contains('showmenu')){
        CloseMenu()
    } else {
        nav.classList.add('showmenu')
    }
}

function CloseMenu (){
    nav.classList.remove('showmenu')
}

function AddEventsMenu (item){
    item.addEventListener('click', CloseMenu)
}

btn.addEventListener('click',toggle)
menuitens.forEach(AddEventsMenu)

