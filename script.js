document.addEventListener('DOMContentLoaded', (event) => {
    const container = document.querySelector('.container');
    container.style.opacity = '0';
    
    setTimeout(() => {
        container.style.transition = 'opacity 1s ease-out';
        container.style.opacity = '1';
    }, 100);
});
