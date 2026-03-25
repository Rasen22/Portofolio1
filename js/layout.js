const fallbackPartials = {
    header: `
<nav id="navbar" class="fixed top-0 left-0 right-0 z-50 glass-nav">
    <div class="max-w-6xl mx-auto px-6 py-4">
        <div class="flex items-center justify-between">
            <a href="index.html" class="font-heading text-xl font-semibold text-dark-slate hover:text-muted-gold transition-colors">
                Laili S.
            </a>
            <div class="hidden md:flex items-center space-x-8">
                <a href="index.html" data-nav-link="home" class="nav-link text-dark-slate hover:text-muted-gold transition-colors font-medium">Home</a>
                <a href="about.html" data-nav-link="about" class="nav-link text-dark-slate hover:text-muted-gold transition-colors font-medium">About</a>
                <a href="experience.html" data-nav-link="experience" class="nav-link text-dark-slate hover:text-muted-gold transition-colors font-medium">Experience</a>
                <a href="contact.html" data-nav-link="contact" class="nav-link text-dark-slate hover:text-muted-gold transition-colors font-medium">Contact</a>
            </div>
            <button id="menuBtn" class="md:hidden text-dark-slate hover:text-muted-gold transition-colors" aria-label="Buka menu navigasi">
                <i class="fas fa-bars text-xl"></i>
            </button>
        </div>
    </div>
</nav>
<div id="mobileMenu" class="mobile-menu fixed inset-y-0 right-0 w-64 bg-cream shadow-2xl z-50 md:hidden">
    <div class="p-6">
        <button id="closeMenuBtn" class="absolute top-4 right-4 text-dark-slate hover:text-muted-gold" aria-label="Tutup menu navigasi">
            <i class="fas fa-times text-xl"></i>
        </button>
        <div class="mt-12 flex flex-col space-y-6">
            <a href="index.html" data-nav-mobile="home" class="text-dark-slate hover:text-muted-gold transition-colors font-medium text-lg">Home</a>
            <a href="about.html" data-nav-mobile="about" class="text-dark-slate hover:text-muted-gold transition-colors font-medium text-lg">About</a>
            <a href="experience.html" data-nav-mobile="experience" class="text-dark-slate hover:text-muted-gold transition-colors font-medium text-lg">Experience</a>
            <a href="contact.html" data-nav-mobile="contact" class="text-dark-slate hover:text-muted-gold transition-colors font-medium text-lg">Contact</a>
        </div>
    </div>
</div>
<div id="menuBackdrop" class="fixed inset-0 bg-black/30 backdrop-blur-sm z-40 hidden md:hidden"></div>
`,
    footer: `
<footer class="py-10 bg-[#334155]">
    <div class="max-w-6xl mx-auto px-6">
        <div class="grid sm:grid-cols-2 lg:grid-cols-4 gap-3 mb-8">
            <div class="bg-white/5 border border-white/10 rounded-xl px-4 py-3">
                <p class="text-xs uppercase tracking-wide text-white/60">Lokasi</p>
                <p class="text-sm text-white/90">Dukuh, Jakarta Timur</p>
            </div>
            <div class="bg-white/5 border border-white/10 rounded-xl px-4 py-3">
                <p class="text-xs uppercase tracking-wide text-white/60">Email</p>
                <p class="text-sm text-white/90 break-all">lailisalsabila22@gmail.com</p>
            </div>
            <div class="bg-white/5 border border-white/10 rounded-xl px-4 py-3">
                <p class="text-xs uppercase tracking-wide text-white/60">Pendidikan</p>
                <p class="text-sm text-white/90">Universitas Nasional</p>
            </div>
            <div class="bg-white/5 border border-white/10 rounded-xl px-4 py-3">
                <p class="text-xs uppercase tracking-wide text-white/60">Periode</p>
                <p class="text-sm text-white/90">2023 - 2027</p>
            </div>
        </div>

        <div class="flex flex-col md:flex-row items-center justify-between gap-4">
            <p class="text-white/70 text-sm text-center md:text-left">
                &copy; 2026 Laili Salsabila. Dibuat dengan <i class="fas fa-heart text-red-400 mx-1"></i> hati.
            </p>
            <div class="flex items-center gap-3">
                <a href="https://www.instagram.com/lailisalsabilaa?igsh=c2NycGFva3dhbXNs" target="_blank" rel="noopener noreferrer" class="w-10 h-10 rounded-full border border-white/20 bg-white/5 text-white/80 hover:text-[#D4AF37] hover:border-[#D4AF37]/60 hover:bg-white/10 transition-colors flex items-center justify-center" aria-label="Instagram">
                    <i class="fab fa-instagram"></i>
                </a>
                <a href="https://www.tiktok.com/@la_sal73?_r=1&_t=ZS-94z0CnRqhpU" target="_blank" rel="noopener noreferrer" class="w-10 h-10 rounded-full border border-white/20 bg-white/5 text-white/80 hover:text-[#D4AF37] hover:border-[#D4AF37]/60 hover:bg-white/10 transition-colors flex items-center justify-center" aria-label="TikTok">
                    <i class="fab fa-tiktok"></i>
                </a>
                <a href="https://www.linkedin.com/in/laili-salsabila-169a4b342?utm_source=share_via&utm_content=profile&utm_medium=member_android" target="_blank" rel="noopener noreferrer" class="w-10 h-10 rounded-full border border-white/20 bg-white/5 text-white/80 hover:text-[#D4AF37] hover:border-[#D4AF37]/60 hover:bg-white/10 transition-colors flex items-center justify-center" aria-label="LinkedIn">
                    <i class="fab fa-linkedin-in"></i>
                </a>
                <a href="https://wa.me/6282258247274" target="_blank" rel="noopener noreferrer" class="w-10 h-10 rounded-full border border-white/20 bg-white/5 text-white/80 hover:text-[#D4AF37] hover:border-[#D4AF37]/60 hover:bg-white/10 transition-colors flex items-center justify-center" aria-label="WhatsApp">
                    <i class="fab fa-whatsapp"></i>
                </a>
            </div>
        </div>
    </div>
</footer>
`,
};

async function loadPartial(targetId, partialPath, fallbackHtml) {
    const target = document.getElementById(targetId);
    if (!target) {
        return null;
    }

    try {
        const response = await fetch(partialPath);
        if (!response.ok) {
            throw new Error(`Gagal memuat ${partialPath}`);
        }

        target.innerHTML = await response.text();
        return target;
    } catch (error) {
        if (fallbackHtml) {
            target.innerHTML = fallbackHtml;
            return target;
        }

        throw error;
    }
}

function setActiveNavigation(pageName) {
    document.querySelectorAll('[data-nav-link]').forEach((link) => {
        const isActive = link.getAttribute('data-nav-link') === pageName;
        link.classList.toggle('active', isActive);
    });

    document.querySelectorAll('[data-nav-mobile]').forEach((link) => {
        const isActive = link.getAttribute('data-nav-mobile') === pageName;

        if (isActive) {
            link.classList.remove('text-dark-slate', 'hover:text-muted-gold');
            link.classList.add('text-muted-gold');
        } else {
            link.classList.remove('text-muted-gold');
            link.classList.add('text-dark-slate', 'hover:text-muted-gold');
        }
    });

    document.querySelectorAll('[data-footer-link]').forEach((link) => {
        const isActive = link.getAttribute('data-footer-link') === pageName;

        if (isActive) {
            link.classList.remove('text-white/70', 'hover:text-muted-gold');
            link.classList.add('text-muted-gold');
        } else {
            link.classList.remove('text-muted-gold');
            link.classList.add('text-white/70', 'hover:text-muted-gold');
        }
    });
}

function initMobileMenu() {
    const menuBtn = document.getElementById('menuBtn');
    const closeMenuBtn = document.getElementById('closeMenuBtn');
    const mobileMenu = document.getElementById('mobileMenu');
    const menuBackdrop = document.getElementById('menuBackdrop');

    if (!menuBtn || !closeMenuBtn || !mobileMenu || !menuBackdrop) {
        return;
    }

    const openMenu = () => {
        mobileMenu.classList.add('open');
        menuBackdrop.classList.remove('hidden');
        document.body.style.overflow = 'hidden';
    };

    const closeMenu = () => {
        mobileMenu.classList.remove('open');
        menuBackdrop.classList.add('hidden');
        document.body.style.overflow = '';
    };

    menuBtn.addEventListener('click', openMenu);
    closeMenuBtn.addEventListener('click', closeMenu);
    menuBackdrop.addEventListener('click', closeMenu);

    document.querySelectorAll('[data-nav-mobile]').forEach((link) => {
        link.addEventListener('click', closeMenu);
    });
}

async function initLayout() {
    try {
        await Promise.all([
            loadPartial('siteHeader', 'components/header.html', fallbackPartials.header),
            loadPartial('siteFooter', 'components/footer.html', fallbackPartials.footer),
        ]);

        const pageName = document.body.getAttribute('data-page') || 'home';
        setActiveNavigation(pageName);
        initMobileMenu();
    } catch (error) {
        console.error(error);
    }
}

initLayout();
