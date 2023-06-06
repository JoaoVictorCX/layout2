let cardsList = document.querySelectorAll (".card")

function addEventstoCard(card){
    card.addEventListener("mouseover", function(){
        card.classList.add("card-active")
    })
    card.addEventListener("mouseleave", function(){
        card.classList.remove("card-active")
    })
    
}


cardsList.forEach(addEventstoCard)