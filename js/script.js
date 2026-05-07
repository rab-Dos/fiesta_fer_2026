document.addEventListener('DOMContentLoaded', () => {
    // 1. Splash Screen Logic
    const splash = document.getElementById('splash-screen');
    const mainContent = document.getElementById('main-content');
    
    setTimeout(() => {
        splash.classList.add('hidden');
        mainContent.classList.remove('hidden');
        document.body.classList.remove('no-scroll');
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

    // 4. Section Navigation Up/Down
    const sections = ['intro', 'evento', 'ubicacion', 'galeria', 'despedida'];
    let currentSectionIndex = 0;
    const btnUp = document.getElementById('nav-up');
    const btnDown = document.getElementById('nav-down');
    const backToTopBtn = document.getElementById('back-to-top');

    function updateNavButtons() {
        btnUp.disabled = currentSectionIndex === 0;
        btnDown.disabled = currentSectionIndex === sections.length - 1;
        
        if (currentSectionIndex > 0) {
            backToTopBtn.classList.add('visible');
        } else {
            backToTopBtn.classList.remove('visible');
        }
    }

    function scrollToSection(index) {
        if (index >= 0 && index < sections.length) {
            currentSectionIndex = index;
            document.getElementById(sections[currentSectionIndex]).scrollIntoView({ behavior: 'smooth' });
            updateNavButtons();
        }
    }

    btnUp.addEventListener('click', () => scrollToSection(currentSectionIndex - 1));
    btnDown.addEventListener('click', () => scrollToSection(currentSectionIndex + 1));
    backToTopBtn.addEventListener('click', () => scrollToSection(0));

    // Opcional: Actualizar el índice al hacer scroll manual
    window.addEventListener('scroll', () => {
        let scrollPosition = window.scrollY + window.innerHeight / 2;
        sections.forEach((id, index) => {
            const section = document.getElementById(id);
            if (section) {
                const sectionTop = section.offsetTop;
                const sectionHeight = section.offsetHeight;
                if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
                    currentSectionIndex = index;
                    updateNavButtons();
                }
            }
        });
    });

    updateNavButtons();
});

