document.addEventListener("DOMContentLoaded", () => {

    const observer = new IntersectionObserver((entries, obs) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add("show");
                obs.unobserve(entry.target);
            }
        });
    }, {
        rootMargin: "-20% 0px" // espera a que entren más a pantalla
    });

    const elements = document.querySelectorAll(".feature-card, .screen");
    elements.forEach(el => observer.observe(el));

});
