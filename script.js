document.addEventListener("DOMContentLoaded", () => {

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {

                // Aparición lenta y suave
                entry.target.style.transition = "opacity 0.6s ease, transform 0.6s ease";
                entry.target.classList.add("show");

            } else {

                // Ocultación más rápida
                entry.target.style.transition = "opacity 0.3s ease, transform 0.3s ease";
                entry.target.classList.remove("show");

            }
        });
    }, {
        rootMargin: "-20% 0px"
    });

    const elements = document.querySelectorAll(".feature-card, .screen");
    elements.forEach(el => observer.observe(el));

});
