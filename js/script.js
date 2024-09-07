// navbar add classlist active
const navbarNav = document.querySelector('.navbar-nav');

document.querySelector('#hamburger_nav').onclick = () => {
    navbarNav.classList.toggle('active');
};


// navbar remove classlist active
const hamburger = document.querySelector('#hamburger_nav');

document.addEventListener('click', function (a) {
    if(!hamburger.contains(a.target) && !navbarNav.contains(a.target)) {
        navbarNav.classList.remove('active');
    }
});


