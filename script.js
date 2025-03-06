// Wait for the DOM to be fully loaded
document.addEventListener('DOMContentLoaded', function() {
    console.log('Website loaded successfully!');
    
    // Add a simple animation to the header
    const header = document.querySelector('header');
    if (header) {
        header.style.opacity = '0';
        setTimeout(() => {
            header.style.transition = 'opacity 1s ease-in-out';
            header.style.opacity = '1';
        }, 200);
    }
    
    // Add current year to the footer copyright
    const footerYear = document.querySelector('footer p');
    if (footerYear) {
        const currentYear = new Date().getFullYear();
        footerYear.innerHTML = footerYear.innerHTML.replace('2024', currentYear);
    }
}); 