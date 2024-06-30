// script.js

// Cherry blossom animation and hover effect
document.addEventListener("DOMContentLoaded", function() {
    const blossoms = document.querySelectorAll('.cherry-blossom');
    
    blossoms.forEach(blossom => {
        let angle = 0;
        setInterval(() => {
            angle += 0.01;
            const x = Math.sin(angle) * 5;
            const y = Math.cos(angle) * 5;
            blossom.style.transform = `translate(${x}px, ${y}px)`;
        }, 20);
        
        blossom.addEventListener('mouseover', () => {
            blossom.classList.add('spin');
            document.body.classList.add('fiolex-girls');
        });
        
        blossom.addEventListener('mouseout', () => {
            blossom.classList.remove('spin');
            document.body.classList.remove('fiolex-girls');
        });
    });
});

// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});
