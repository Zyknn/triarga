/*
 * This code was written by Azuan — with love, bugs, and late-night heartbreaks.
 * Supported by XiezuMedia, who believed in the chaos.
 *
 * © 2025 Zykuan & XiezuMedia. All rights reserved.
 * Feel free to use or cherish it, like a good ex...
 * But remove this watermark? That’s like forgetting who loved you first.
 * And trust me — we notice.
 *
 * Don’t ghost the author.
 * www.instagram.com/zuanxfnd
 */

const mobileToggle = document.querySelector('.mobile-toggle');
const nav = document.querySelector('nav');

if (mobileToggle) {
    mobileToggle.addEventListener('click', () => {
        mobileToggle.classList.toggle('active');
        nav.classList.toggle('active');

        const openIcon = mobileToggle.querySelector('.open-icon');
        const closeIcon = mobileToggle.querySelector('.close-icon');

        if (nav.classList.contains('active')) {
            openIcon.style.opacity = '0';
            closeIcon.style.opacity = '1';
        } else {
            openIcon.style.opacity = '1';
            closeIcon.style.opacity = '0';
        }

        const menuItems = document.querySelectorAll('#menu li');
        menuItems.forEach((item, index) => {
            if (nav.classList.contains('active')) {
                setTimeout(() => {
                    item.style.opacity = '1';
                    item.style.transform = 'translateX(0)';
                }, 100 + index * 50);
            } else {
                item.style.opacity = '0';
                item.style.transform = 'translateX(50px)';
            }
        });
    });

    const menuOverlay = document.querySelector('.menu-overlay');
    if (menuOverlay) {
        menuOverlay.addEventListener('click', () => {
            mobileToggle.classList.remove('active');
            nav.classList.remove('active');

            const openIcon = mobileToggle.querySelector('.open-icon');
            const closeIcon = mobileToggle.querySelector('.close-icon');
            openIcon.style.opacity = '1';
            closeIcon.style.opacity = '0';

            const menuItems = document.querySelectorAll('#menu li');
            menuItems.forEach(item => {
                item.style.opacity = '0';
                item.style.transform = 'translateX(50px)';
            });
        });
    }
}

const header = document.getElementById('header');
if (header) {
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            header.classList.add('scrolled');
        } else {
            header.classList.remove('scrolled');
        }
    });
}

const revealElements = document.querySelectorAll(
    '.reveal, .fade-in, .slide-up, .slide-in-left, .slide-in-right, .scale-in, .stagger-item, .glass, .department-card'
);

const observerOptions = {
    threshold: 0.15,
};

const revealObserver = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('active');
            observer.unobserve(entry.target);
        }
    });
}, observerOptions);

revealElements.forEach(el => {
    revealObserver.observe(el);
});

document.querySelectorAll('.glow-on-hover').forEach(element => {
    element.addEventListener('mousemove', e => {
        const rect = element.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;

        element.style.setProperty('--x', `${x}px`);
        element.style.setProperty('--y', `${y}px`);
    });
});

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();

        const targetId = this.getAttribute('href');
        const targetElement = document.querySelector(targetId);

        if (targetElement) {
            window.scrollTo({
                top: targetElement.offsetTop - 80,
                behavior: 'smooth'
            });
        }
    });
});

document.querySelectorAll('.parallax').forEach(el => {
    window.addEventListener('scroll', () => {
        const scrollY = window.scrollY;
        el.style.transform = `translateY(${scrollY * 0.1}px)`;
    });
});
