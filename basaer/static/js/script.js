document.addEventListener('DOMContentLoaded', function() {
    const paragraphs = document.querySelectorAll('.paragraph');
    paragraphs.forEach((p, index) => {
        p.style.animationDelay = `${index * 0.1}s`;
        p.classList.add('animate__animated', 'animate__fadeInUp');
        p.addEventListener('mouseover', function() {
            this.style.transform = 'scale(1.02)';
        });
        p.addEventListener('mouseout', function() {
            this.style.transform = 'scale(1)';
        });
    });
});