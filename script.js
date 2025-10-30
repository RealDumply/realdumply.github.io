// Simple smooth scroll and animation placeholder
document.addEventListener("DOMContentLoaded", () => {
    const sections = document.querySelectorAll("section");
    const options = {
        threshold: 0.1
    };
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if(entry.isIntersecting) {
                entry.target.classList.add("visible");
            }
        });
    }, options);

    sections.forEach(section => {
        observer.observe(section);
    });
});
