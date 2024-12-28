let navtoggler=document.querySelector(".nav-toggler")
navtoggler.addEventListener("click",makeAcross);

function makeAcross(){
    navtoggler.classList.toggle("active");
    let nav=document.querySelector(".nav");
    nav.classList.toggle("open");

    if(nav.classList.contains("open"))
    {
        nav.style.maxHeight=nav.scrollHeight+"px";
    }
    else
    {
        nav.removeAttribute("style");
    }
}