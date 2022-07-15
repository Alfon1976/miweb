
addEventListener('DOMContentLoaded' , () => {

var boton_menu = document.querySelector('.boton_menu')
if(boton_menu){

    boton_menu.addEventListener('click' , () =>{
    
    var desplegable = document.querySelector('.menu_elemento')

    desplegable.classList.toggle('desplegar')
    
    })

}


})
