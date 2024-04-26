// Theme change

themeButton = document.querySelector('.theme-btn');

themeButton.onclick = function(){
    themeButton.classList.toggle('light-mode-on');
    document.body.classList.toggle('light-theme');

    if (localStorage.getItem("theme") == "dark"){
        localStorage.setItem("theme", "light");
    }
    else{
        localStorage.setItem("theme", "dark")
    }
}

if(localStorage.getItem("theme")== 'dark'){
    themeButton.classList.remove('light-mode-on');
    document.body.classList.remove('light-theme');
}
else if (localStorage.getItem("theme") == 'light'){
    themeButton.classList.add("light-mode-on");
    document.body.classList.add('light-theme')
}
else{
    localStorage.setItem("theme", "dark")
}
// close menu

// Project link
projectLinks = document.querySelectorAll('.link');

projectLinks.onclick = function(){
    alert('button was clicked')
}

// width
document.querySelector('.show-menu').onclick = () => {
    // Close menu when menutoggler button was clicked
    document.querySelector('.menu-toggler').onclick = ()=>{
        document.querySelector('.left-side').classList.remove('opened')
    }
    document.querySelector('.left-side').classList.add('opened')

    // Close menu when an item was clicked
    document.addEventListener("click", (e) => {
        if(e.target.closest(".nav-item")){
            document.querySelector('.left-side').classList.remove('opened')
        }
    })
}
