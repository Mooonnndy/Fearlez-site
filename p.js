document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver(function(entries) {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
        }
    });
}, observerOptions);

document.querySelectorAll('.fade-in').forEach(element => {
    observer.observe(element);
});

const playButton = document.querySelector('.play-button');
playButton?.addEventListener('click', function(e) {
    e.preventDefault();
    this.textContent = 'Opening Spotify... 🎵';
    setTimeout(() => {
        window.open('https://open.spotify.com/album/5bwS2utqJ5IxwEHx2BCAJZ?si=wHsHD_IHS_OFwRaSbSdV0A', '_blank');
        this.textContent = 'Play on Spotify';
    }, 500);
});


window.addEventListener('scroll', function() {
    const sections = document.querySelectorAll('section');
    const navLinks = document.querySelectorAll('nav a');
    
    let current = '';
    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        if (pageYOffset >= (sectionTop - 200)) {
            current = section.getAttribute('id');
        }
    });

    navLinks.forEach(link => {
        link.style.color = '#ffffff';
        if (link.getAttribute('href') === '#' + current) {
            link.style.color = '#d4af37';
        }
    });
});

window.addEventListener('load', function() {
    document.body.style.opacity = '0';
    document.body.style.transition = 'opacity 0.8s ease';
    setTimeout(() => {
        document.body.style.opacity = '1';
    }, 100);
});

document.querySelector('.hero h1').addEventListener('dblclick', function() {
    this.style.animation = 'none';
    setTimeout(() => {
        this.style.animation = 'glow 0.5s ease-in-out infinite alternate';
        this.style.color = '#d4af37';
    }, 100);
    
    setTimeout(() => {
        this.style.color = '#ffffff';
        this.style.animation = 'glow 2s ease-in-out infinite alternate';
    }, 3000);
});

document.querySelectorAll('.social-link').forEach(link => {
    link.addEventListener('mouseenter', function() {
        console.log('🔊 Hover sound effect would play here');
    });
});

document.querySelectorAll('.member-card').forEach(card => {
    card.addEventListener('mouseenter', function() {
        this.style.transform = 'translateY(-10px) scale(1.02)';
    });
    
    card.addEventListener('mouseleave', function() {
        this.style.transform = 'translateY(0) scale(1)';
    });
});

function scrollToTop() {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
}



console.log(`
🎸 FEARLEZ OFFICIAL WEBSITE 🎸
================================
SILENT!!

Developer Commands:
- scrollToTop() - Scroll ke atas
- Dobel klik pada judul untuk easter egg

Built with ❤️ for Fearlez fans
`);

const currentYear = new Date().getFullYear();
console.log(`© ${currentYear} FEARLEZ OFFICIAL WEBSITE`);