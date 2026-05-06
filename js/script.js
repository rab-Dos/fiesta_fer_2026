document.addEventListener('DOMContentLoaded', () => {
    // 1. Splash Screen Logic
    const splash = document.getElementById('splash-screen');
    const mainContent = document.getElementById('main-content');
    
    setTimeout(() => {
        splash.classList.add('hidden');
        mainContent.classList.remove('hidden');
        // Quitar del DOM después de la transición
        setTimeout(() => splash.style.display = 'none', 1000);
    }, 3000);

    // 2. Hamburger Menu
    const hamburger = document.getElementById('hamburger');
    const navLinks = document.getElementById('nav-links');

    hamburger.addEventListener('click', () => {
        navLinks.classList.toggle('active');
    });

    // Cerrar menú al hacer clic en un link (mobile)
    navLinks.querySelectorAll('a').forEach(link => {
        link.addEventListener('click', () => {
            navLinks.classList.remove('active');
        });
    });

    // 3. Countdown Clock
    const countdownDisplay = document.getElementById('countdown-nav');
    const eventDate = new Date('May 23, 2026 15:30:00').getTime();

    const updateCountdown = setInterval(() => {
        const now = new Date().getTime();
        const distance = eventDate - now;

        if (distance < 0) {
            clearInterval(updateCountdown);
            countdownDisplay.innerHTML = "✨ ¡La fiesta ha iniciado! ✨";
            return;
        }

        const days = Math.floor(distance / (1000 * 60 * 60 * 24));
        const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((distance % (1000 * 60)) / 1000);

        countdownDisplay.innerHTML = `Faltan: ${days}d ${hours}h ${minutes}m ${seconds}s`;
    }, 1000);

    // 4. Back to Top Button
    const backToTopBtn = document.getElementById('back-to-top');

    window.addEventListener('scroll', () => {
        if (window.pageYOffset > 300) {
            backToTopBtn.style.display = 'block';
        } else {
            backToTopBtn.style.display = 'none';
        }
    });

    backToTopBtn.addEventListener('click', () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    });
});

