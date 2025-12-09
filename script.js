document.addEventListener("DOMContentLoaded", () => {

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {

            if (entry.isIntersecting) {
                entry.target.classList.add("show");   // aparece suave
            } else {
                entry.target.classList.remove("show"); // se esconde más rápido
            }

        });
    }, {
        rootMargin: "-20% 0px"
    });

    // Ahora observa cualquier elemento que tenga la clase "reveal"
    const elements = document.querySelectorAll(".reveal");
    elements.forEach(el => observer.observe(el));

});
