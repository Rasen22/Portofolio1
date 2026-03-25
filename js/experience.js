// Modal controls
function openModal(modalId) {
    const modal = document.getElementById(modalId);
    if (!modal) {
        return;
    }

    modal.classList.add('active');
    document.body.style.overflow = 'hidden';
}

function closeModal(modalId) {
    const modal = document.getElementById(modalId);
    if (!modal) {
        return;
    }

    modal.classList.remove('active');
    document.body.style.overflow = '';
}

// Close all modals with Escape
document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
        closeModal('internshipModal');
        closeModal('organizationModal');
    }
});

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
