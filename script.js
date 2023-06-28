document.getElementById('btnSwitch').addEventListener('click',()=>{
    
    
    if (document.documentElement.getAttribute('data-bs-theme') == 'dark') {
        document.documentElement.setAttribute('data-bs-theme','light')
    }
    else {
        document.documentElement.setAttribute('data-bs-theme','dark')
    }
})

function setActive(element){
    // element.classList.add("active");
    var nav = document.getElementsByClassName('nav-link');
    for (var i = 0; i < nav.length; i++){
        if(i == element){
            nav[i].classList.add("active");
        }
        else{
            nav[i].classList.remove("active");
        }
    }
    console.log(nav);
}