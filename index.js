// Typed.js effect on the Name
new Typed('.typed', {
    strings: ['Pro NaLaik Admi', 'Burger Boi', 'Zaleel o Khuwar', 'Munna Shapatar'],
    typeSpeed: 100,
    backSpeed: 100,
    backDelay: 1000,
    loop: true,
    cursorChar: '_'
});


// ScrollReveal for sections
ScrollReveal().reveal('.hero-text', {
    delay: 200,
    duration: 1000,
    distance: '50px',
    origin: 'left'
});
ScrollReveal().reveal('.hero-image', {
    delay: 400,
    duration: 1000,
    distance: '10px',
    origin: 'right'
});
ScrollReveal().reveal('.Skills', {
    delay: 300,
    duration: 1200,
    distance: '110px',
    origin: 'bottom'
});

// AOS init
AOS.init({
    duration: 1200,
    once: true,
});

// VanillaTilt on hero image
VanillaTilt.init(document.querySelector(".hero-image img"), {
    max: 15,
    speed: 400,
    glare: true,
    "max-glare": 0.5
});
