const tailwindConfig = {
    theme: {
        extend: {
            colors: {
                cream: '#FFFBF0',
                'off-white': '#F9FAFB',
                'dark-slate': '#334155',
                'muted-gold': '#D4AF37',
                'sage-green': '#84A98C',
                'sage-light': '#A8C4B0',
            },
            fontFamily: {
                heading: ['Playfair Display', 'serif'],
                body: ['Inter', 'sans-serif'],
            },
        },
    },
};

if (typeof window !== 'undefined') {
    window.tailwind = window.tailwind || {};
    window.tailwind.config = tailwindConfig;
}

if (typeof module !== 'undefined' && module.exports) {
    module.exports = tailwindConfig;
}
