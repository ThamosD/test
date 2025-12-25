// Mobile Navigation Toggle
const menuToggle = document.getElementById('menuToggle');
const navMenu = document.getElementById('navMenu');

menuToggle.addEventListener('click', () => {
    navMenu.classList.toggle('active');
    menuToggle.querySelector('i').classList.toggle('fa-bars');
    menuToggle.querySelector('i').classList.toggle('fa-times');
});

// Close mobile menu when clicking a link
document.querySelectorAll('.nav-menu a').forEach(link => {
    link.addEventListener('click', () => {
        navMenu.classList.remove('active');
        menuToggle.querySelector('i').classList.add('fa-bars');
        menuToggle.querySelector('i').classList.remove('fa-times');
    });
});

// Subscription Form
const subscribeForm = document.getElementById('subscribeForm');
if (subscribeForm) {
    subscribeForm.addEventListener('submit', function(e) {
        e.preventDefault();
        const email = this.querySelector('input[type="email"]').value;
        
        // In a real app, you would send this to a server
        alert(`Thank you for subscribing with: ${email}\nYou'll hear from us soon!`);
        this.reset();
    });
}

// Scroll Animation (Simple)
const observerOptions = {
    threshold: 0.1
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('animate');
        }
    });
}, observerOptions);

// Observe elements you want to animate
document.querySelectorAll('.menu-card, .about-grid').forEach(el => {
    observer.observe(el);
});

// Simple Order Online Modal
const orderButtons = document.querySelectorAll('.btn-order, .btn-secondary[href="#order"]');
orderButtons.forEach(button => {
    button.addEventListener('click', (e) => {
        if (button.getAttribute('href') === '#order') {
            e.preventDefault();
            alert('Order online feature coming soon!\nFor now, call us at (555) 123-4567 for pickup orders.');
        }
    });
});

// Update copyright year automatically
document.addEventListener('DOMContentLoaded', () => {
    const yearSpan = document.querySelector('.footer-bottom p:first-child');
    if (yearSpan) {
        yearSpan.innerHTML = yearSpan.innerHTML.replace('2023', new Date().getFullYear());
    }
});