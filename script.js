const f_arrow = document.querySelector(".f-down");
const c_arrow = document.querySelector(".c-down");
const features = document.querySelector(".features");
const company = document.querySelector(".company");
const f_menu = document.querySelector(".f-menu");
const c_menu = document.querySelector(".c-menu");
const show = document.querySelector(".menu");
const close = document.querySelector(".close");
const wrap = document.querySelector(".wrapper");
const bg = document.querySelector(".black");


let count_1 = 0;
features.addEventListener('click', function onClick(e) {
    count_1 ++;
    if (count_1 %2 == 0) {
        if(window.innerWidth <= 375){
            features.style.marginTop= "0%";
            f_arrow.style.height = "30%";
        }
        features.style.color = "hsl(0, 0%, 41%)";
        f_menu.style.display = "none";
        f_arrow.src = "images/icon-arrow-down.svg";
    } else {
        if(window.innerWidth < 375){
            features.style.marginTop= "-65%";
            f_arrow.style.height = "5%";
        }
        features.style.color = "hsl(0, 0%, 8%)";
        f_menu.style.display = "block";
        f_arrow.src = "images/icon-arrow-up.svg";
    } 
});

let count_2 = 0;
company.addEventListener('click', function onClick(e) {
    count_2 ++;
    if (count_2 %2 == 0) {
        if(window.innerWidth < 375){
            company.style.marginTop= "0%";
            c_arrow.style.height = "30%";
        }
        company.style.color = "hsl(0, 0%, 41%)";
        c_menu.style.display = "none";
        c_arrow.src = "images/icon-arrow-down.svg";
    } else {
        if(window.innerWidth < 375){
            company.style.marginTop= "-55%";
            c_arrow.style.height = "5%";
        }
        company.style.color = "hsl(0, 0%, 8%)";
        c_menu.style.display = "block";
        c_arrow.src = "images/icon-arrow-up.svg";
    } 
});

show.addEventListener("click", function onClick(e) {
    wrap.style.display = "block";
    bg.style.display = "block";
});

close.addEventListener("click", function onClick(e) {
    wrap.style.display = "none";    
    bg.style.display = "none";

});





