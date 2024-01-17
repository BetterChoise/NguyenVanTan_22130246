$(document).rea

const header_menu = document.querySelector(".header_menu");
        const about = document.querySelector(".About");
        const home = document.querySelector(".Home");
        const labs = document.querySelector(".Labs");  
        const contact = document.querySelector(".Contact");      
        let menu_item = document.querySelectorAll(".menu_item");
        let htmlElement = document.documentElement;
        let bodyElement = document.body;

        let height = Math.max(
                                htmlElement.clientHeight, htmlElement.scrollHeight, htmlElement.offsetHeight,
                                bodyElement.scrollHeight, bodyElement.offsetHeight);

        let lastScrollY = window.scrollY;
        window.addEventListener("scroll", () =>{
            if(lastScrollY < window.scrollY){
                header_menu.classList.add("hide");
            }
            else{
                header_menu.classList.remove("hide");
            }
            lastScrollY = window.scrollY;
            if(lastScrollY > 665){
                menu_item.forEach(item =>{
                    item.classList.remove("item-active");
                });
                about.classList.add("item-active");
                header_menu.classList.add("menu-active");
            }
            if(lastScrollY <665){
                menu_item.forEach(item =>{
                    item.classList.remove("item-active");
                });
                home.classList.add("item-active");
                header_menu.classList.remove("menu-active");
            }

            if(lastScrollY >1465){
                menu_item.forEach(item =>{
                    item.classList.remove("item-active");
                });
                labs.classList.add("item-active");
            }
            if(lastScrollY > 2200){
                menu_item.forEach(item =>{
                    item.classList.remove("item-active");
                });
                contact.classList.add("item-active");
            }
            
        })

