// Animaciones al hacer scroll
const observer = new IntersectionObserver((entries, obs) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add("show");
            obs.unobserve(entry.target); // deja de observar después de animar
        }
    });
});

// Seleccionamos lo que debe animarse
const elements = document.querySelectorAll(".feature-card, .screen");

elements.forEach(el => observer.observe(el));
