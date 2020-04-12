let btnMenu = document.querySelector('.btn-menu');
let menu = document.querySelector('.list-container');
let containerMenu = document.querySelector('.menu');
let activador = true;

//Menu navegacion//
btnMenu.addEventListener('click', ()=> {

    document.querySelector('.btn-menu i').classList.toggle('fa-times');

    if(activador){

        menu.style.left = "0";
        menu.style.transition = "0.5s";

        activador = false;

    }else{
        activador=false;

        menu.style.left = "-100%";
        menu.style.transition = "0.5s";

        activador=true;
    }

});

let enlaces= document.querySelectorAll('lists li a');

//Intercalar clase Activo//
enlaces.forEach( (Element) => {

    Element.addEventListener('click', (event)=>{

        enlaces.forEach((link)=>{

            link.classList.remove('activo');
        });

        event.target.classList.add('activo');

    });
});

//Mostrar y ocultar menu//
let prevScrollPos= window.pageYOffset;
let goTop= document.querySelector('.go-top');
    window.onscroll = ()=>{
        
        let currentScrollPos= window.pageYOffset;


        if(prevScrollPos > currentScrollPos){

            containerMenu.style.top = "0";
            containerMenu.style.transition = "0.3s";
        }else{

            containerMenu.style.top = "-60px";
            containerMenu.style.transition= "0.3s";
        }

        prevScrollPos=currentScrollPos;


     
     let arriba = window.pageYOffset;

        if(arriba<=600) {
            containerMenu.style.borderBottom = "none";

            goTop.style.right = "-100%";
        }else{
            containerMenu.style.borderBottom = "5px solid #207dff";

            goTop.style.right = "0";
            goTop.style.transition="0.3s";
        }   
}

goTop.addEventListener('click', ()=>{
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
});

let verAbajo = document.querySelector('#abajo');

verAbajo.addEventListener('click',() => {
    document.body.scrollTop = 600;
    document.documentElement.scrollTop = 600;
});

