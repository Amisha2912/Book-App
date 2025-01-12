let toggle =document.querySelector(".dark-mode");
let toggleBtn=document.querySelector(".toggle-btn");

//------for Dark-Mode--------
window.addEventListener('load', function () {
    if (localStorage.getItem('theme') === 'dark') {
        document.body.classList.add('addDarkMode');
        toggleBtn.classList.add('active');
    } else {
        document.body.classList.remove('addDarkMode');
        toggleBtn.classList.remove('active');
    }
});

toggle.addEventListener('click', function () {
    document.body.classList.toggle('addDarkMode');

    if (document.body.classList.contains('addDarkMode')) {
        toggleBtn.classList.add('active');
        localStorage.setItem('theme', 'dark'); // Save preference
    } else {
        toggleBtn.classList.remove('active');
        localStorage.setItem('theme', 'light'); // Save preference
    }
});