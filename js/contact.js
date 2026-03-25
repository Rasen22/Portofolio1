// Contact form submission to WhatsApp with a structured template
const contactForm = document.getElementById('contactForm');
const whatsappNumber = '6282258247274';

if (contactForm) {
    contactForm.addEventListener('submit', (e) => {
        e.preventDefault();

        const formData = new FormData(contactForm);
        const fullName = (formData.get('name') || '').toString().trim();
        const email = (formData.get('email') || '').toString().trim();
        const subject = (formData.get('subject') || '').toString().trim() || '-';
        const message = (formData.get('message') || '').toString().trim();

        const template = [
            `Nama Lengkap: ${fullName}`,
            `Email: ${email}`,
            `Subject: ${subject}`,
            `Pesan: ${message}`
        ].join('\n');

        const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(template)}`;
        const openedTab = window.open(whatsappUrl, '_blank');

        if (!openedTab) {
            window.location.href = whatsappUrl;
        }

        contactForm.reset();
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
