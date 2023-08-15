let Menu= document.getElementsByClassName("menu")[0];
let Menu_item= document.getElementsByClassName("menu-item")[0];

Menu.addEventListener("click", ()=>{
    if(Menu_item.style.bottom=="50px"){
        Menu_item.style.bottom="-580px"
    }
    else{
        Menu_item.style.bottom="50px"
    }
})

let icons1= document.getElementsByClassName("icons1")[0];

icons1.addEventListener("click",()=>{
    window.open("https://www.google.com");
})

