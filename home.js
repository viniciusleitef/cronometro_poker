let sidebar_menu = document.getElementById("sidebar_menu")
let clicou = false


function mostrarMenu(){
    if(!clicou){
        sidebar_menu.style.display = "block"
        clicou = true
    }else{
        sidebar_menu.style.display = "none"
        clicou = false
    }
}