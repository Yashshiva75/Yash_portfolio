let hamburger = document.querySelector('#hamburger');
let menu = document.querySelector('#menu');
let moon = document.querySelector('#moon');
let body = document.querySelector('body');


hamburger.addEventListener("click", () => {
    menu.classList.toggle("hidden");
    hamburger.classList.toggle("bg-white");

});
moon.addEventListener("click", () => {
    body.classList.toggle("dark");
});