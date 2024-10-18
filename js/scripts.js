// Loading Screen
window.addEventListener('load', function() {
    const loader = document.getElementById('loader');
    loader.style.display = 'none';
});

// Navigation Background Change on Scroll
window.addEventListener('scroll', function() {
    const nav = document.querySelector('nav');
    if (window.scrollY > 50) {
        nav.classList.add('scrolled');
    } else {
        nav.classList.remove('scrolled');
    }

    // Active Link Switching
    let currentPosition = window.scrollY + 200;
    const sections = document.querySelectorAll('section[id]');
    const navLinks = document.querySelectorAll('nav ul li a');

    sections.forEach(section => {
        if (currentPosition >= section.offsetTop && currentPosition < section.offsetTop + section.offsetHeight) {
            navLinks.forEach(link => {
                link.classList.remove('active');
                if (link.getAttribute('href') === `#${section.id}`) {
                    link.classList.add('active');
                }
            });
        }
    });

    // Back to Top Button Visibility
    const backToTop = document.getElementById('back-to-top');
    if (window.scrollY > 300) {
        backToTop.style.display = 'block';
    } else {
        backToTop.style.display = 'none';
    }
});

// News Ticker
const newsItems = [
    'Agent S.M.A recognized for outstanding service.',
    'New intelligence initiative launched.',
    'International collaboration strengthens global security.'
];

let newsIndex = 0;
const newsElement = document.getElementById('news');

function updateNewsTicker() {
    newsElement.textContent = newsItems[newsIndex];
    newsIndex = (newsIndex + 1) % newsItems.length;
}

updateNewsTicker();
setInterval(updateNewsTicker, 7000);

// Mobile Navigation Toggle
const navToggle = document.querySelector('.nav-toggle');
const navMenu = document.querySelector('nav ul');

navToggle.addEventListener('click', function() {
    navMenu.classList.toggle('show');
});

// Progress Bar Animation on Scroll
const progressBars = document.querySelectorAll('.progress');

function showProgress() {
    const skillsSection = document.querySelector('.skills');
    const skillsPosition = skillsSection.getBoundingClientRect().top;
    const screenPosition = window.innerHeight / 1.2;

    if (skillsPosition < screenPosition) {
        progressBars.forEach(bar => {
            const progressValue = bar.parentElement.parentElement.getAttribute('data-progress');
            bar.style.width = progressValue;
        });
    }
}

window.addEventListener('scroll', showProgress);
