
// ===========================toggle style switcher================

const styleSwitcherToggle = document.querySelector(".style-switcher-toggler");
styleSwitcherToggle.addEventListener("click", () =>{
    document.querySelector(".style-switcher").classList.toggle("open");

})

// hide style -switcher on scroll

window.addEventListener("scroll" , () => {
    if(document.querySelector(".style-switcher").classList.contains("open"))
 {
     document.querySelector(".style-switcher").classList.remove("open");   

    }
})

//========theme colors==============

const alternateStyles = document.querySelectorAll(".alternate-style");
function setActiveStyle(color){
    alternateStyles.forEach((style) =>{
        if(color === style.getAttribute("title")){
           style.removeAttribute("disabled");
        }

        else{
             style.setAttribute("disabled" ,"true");
        }
    })
      
}