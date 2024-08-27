let hamburger = document.querySelector('#hamburger');
let menu = document.querySelector('#menu');
let moon = document.querySelector('#moon');
let body = document.querySelector('body');


document.getElementById('hamburger').addEventListener('click', function() {
    const menu = document.getElementById('menu');

    // Toggle the menu visibility
    if (menu.classList.contains('opacity-0')) {
        // Menu is closed, open it
        menu.classList.remove('-translate-y-full', 'opacity-0');
        menu.classList.add('translate-y-0', 'opacity-100');
    } else {
        // Menu is open, close it
        menu.classList.add('-translate-y-full', 'opacity-0');
        menu.classList.remove('translate-y-0', 'opacity-100');
    }
});


moon.addEventListener("click", () => {
    body.classList.toggle("dark");
});

document.getElementById('hamburger').addEventListener('click', function() {
    const menu = document.getElementById('menu');
    const line1 = document.getElementById('line1');
    const line2 = document.getElementById('line2');
    const line3 = document.getElementById('line3');

    if (menu.classList.contains('hidden')) {
        menu.classList.remove('hidden', '-translate-y-full', 'opacity-0');
        menu.classList.add('translate-y-0', 'opacity-100');

        line1.classList.add('rotate-45', 'translate-y-2');
        line2.classList.add('opacity-0');
        line3.classList.add('-rotate-45', '-translate-y-2');
    } else {
        menu.classList.add('-translate-y-full', 'opacity-0');
        menu.classList.remove('translate-y-0', 'opacity-100');

        line1.classList.remove('rotate-45', 'translate-y-2');
        line2.classList.remove('opacity-0');
        line3.classList.remove('-rotate-45', '-translate-y-2');

        setTimeout(() => {
            menu.classList.add('hidden');
        }, 500); // Match the duration of the transition
    }
});

// Close the menu when clicking outside
document.addEventListener('click', function(event) {
    const menu = document.getElementById('menu');
    const hamburger = document.getElementById('hamburger');

    if (!menu.contains(event.target) && !hamburger.contains(event.target)) {
        if (!menu.classList.contains('hidden')) {
            menu.classList.add('-translate-y-full', 'opacity-0');
            menu.classList.remove('translate-y-0', 'opacity-100');

            document.getElementById('line1').classList.remove('rotate-45', 'translate-y-2');
            document.getElementById('line2').classList.remove('opacity-0');
            document.getElementById('line3').classList.remove('-rotate-45', '-translate-y-2');

            setTimeout(() => {
                menu.classList.add('hidden');
            }, 500); // Match the duration of the transition
        }
    }
});