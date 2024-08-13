
// ===========================typing animation==========

var typed = new Typed(".typing" ,{
    strings:["Web Designer","Web Developer","Full Stack Developer"],
    typedSpeed:100,
    BackSpeed:60,
    loop:true
})
//=============project part card=====================
document.addEventListener('DOMContentLoaded', () => {
    const portfolioItems = document.querySelectorAll('.portfolio-item-inner');

    portfolioItems.forEach(item => {
        item.addEventListener('click', () => {
            item.classList.toggle('flipped');
        });
    });
});

// ====================================Aside========================


const nav = document.querySelector(".nav"),
    navList = nav.querySelector("li"),
    totalNavList = navList.length,
    allSection = document.querySelectorAll(".section"),
    totalSection = allSection.length;
    for(let i=0; i<totalNavList; i++){

        const a = navList[i].querySelector("a");
        a.addEventListner("click",function()
        {
        //     for(let i=0; i<totalSection; i++){
        //     allSection[i].classList.remove("back-section");
        // }
        removeBackSection();
            for(let j=0; j<totalNavList; j++){

                if(navList[j].querySelector("a").classList.contains("active")){
                      addBackSection(j);
                    // allSection[j].classList.add("back-section");
                }
                navList[j].querySelector("a").classList.remove("active");
            
            }

            this.classList.add("active")
            showSection(this);
            if(window.innerWidth <1200){
                asideSectionTogglerBtn();
            }

        })
    }

    function addBackSection(num){
        allSection[num].classList.add("back-section");
    }
    function removeBackSection(){
          for(let i=0; i<totalSection; i++){
            allSection[i].classList.remove("back-section");
         }
    }
    function showSection(element){

        for(let i=0; i<totalSection; i++){
            allSection[i].classList.remove("active");
        }
      const target =  element.getAttribute("href").split("#")[1];
      document.querySelector("#" + target).classList.add("active")
    }
    function updateNav(element){
        for(let i=0; i<totalNavList; i++){
            navList[i].querySelector("a").classList.remove("active");
            const target =  element.getAttribute("href").split("#")[1];
            if(target === navList[i].querySelector("a").getAttribute("href").split("#")[1]){
                navList[i].querySelector("a").classList.add("active");
            }
        }
    }

    document.querySelector(".hire-me").addEventListener("click",function(){
        const sectionIndex = this.getAttribute("data-section-index");
        console.log(sectionIndex)
        showSection(this);
        updateNav(this);
        removeBackSection();
        addBackSection(sectionIndex);
    })

    const navTogglerBtn = document.querySelector(".nav-toggler"),
     aside = document.querySelector(".aside");
     navTogglerBtn.addEventListener("click",() =>{
        asideSectionTogglerBtn();
     })

     function asideSectionTogglerBtn(){
        aside.classList.toggle("open");
        navTogglerBtn.classList.toggle("open");
        for(let i=0; i<totalSection; i++)
            {
          allSection[i].classList.toggle("open");
        }
     }
//===set massage======//
document.getElementById("alertButton").addEventListener("click", function() {
    alert("Message sent successfully!");
});

    //  ======================contact set massage=================

     document.getElementById('contact-form').addEventListener('button', function(event) {
    event.preventDefault(); // Prevent the default form submission behavior

    // Get form values
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const subject = document.getElementById('subject').value;
    const message = document.getElementById('message').value;

    // Validate form values if needed
    if (!name || !email || !subject || !message) {
        alert('Please fill in all fields.');
        return;
    }

    // Create a data object to send
    const formData = {
        name: name,
        email: email,
        subject: subject,
        message: message
    };

    // Send the form data using Fetch API
    fetch('/send-message', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(formData)
    })
    .then(response => response.json())
    .then(data => {
        alert('Message sent successfully!');
    })
    .catch(error => {
        console.error('Error:', error);
        alert('There was an error sending your message.');
    });
});

document.getElementById('alertButton').addEventListener('click', function() {
    alert('Massage send successfully!');
});


//sklis//
let slider = document.querySelector('.skills-slider');
let isDown = false;
let startX;
let scrollLeft;

slider.addEventListener('mousedown', (e) => {
    isDown = true;
    slider.classList.add('active');
    startX = e.pageX - slider.offsetLeft;
    scrollLeft = slider.scrollLeft;
});

slider.addEventListener('mouseleave', () => {
    isDown = false;
    slider.classList.remove('active');
});

slider.addEventListener('mouseup', () => {
    isDown = false;
    slider.classList.remove('active');
});

slider.addEventListener('mousemove', (e) => {
    if (!isDown) return;
    e.preventDefault();
    const x = e.pageX - slider.offsetLeft;
    const walk = (x - startX) * 3; // Scroll speed
    slider.scrollLeft = scrollLeft - walk;
});


