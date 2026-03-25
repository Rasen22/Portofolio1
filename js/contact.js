// Contact form submission feedback
const contactForm = document.getElementById('contactForm');
const toast = document.getElementById('toast');

if (contactForm && toast) {
    contactForm.addEventListener('submit', (e) => {
        e.preventDefault();

        toast.classList.add('show');
        contactForm.reset();

        setTimeout(() => {
            toast.classList.remove('show');
        }, 4000);
    });
}

// Fade-in animation on scroll
const fadeElements = document.querySelectorAll('.fade-in');

const fadeObserver = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
        }
    });
}, { threshold: 0.1, rootMargin: '0px 0px -50px 0px' });

fadeElements.forEach((el) => fadeObserver.observe(el));
