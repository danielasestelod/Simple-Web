"use strict";
class MenuHamburguesa{
    listenerAbrir(){
        document.getElementById("menu_hamburguesa").addEventListener("click",()=>{
            document.getElementById("opciones_menu_hamburguesa").classList.remove("hidden");
        });
    }
    //puedes usar toggle o add igual que en la función de arriba
    listenerCerrar(){
        document.getElementById("icono_x").addEventListener("click",()=>{
            document.getElementById("opciones_menu_hamburguesa").classList.toggle("hidden");
        });
    }
    
}

export default MenuHamburguesa;
    

