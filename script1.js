const scrollContainer = document.querySelector('.scroll-container');
const scrollItems = document.querySelectorAll('.scroll-item');
const leftBtn = document.querySelector('.scroll-btn.left');
const rightBtn = document.querySelector('.scroll-btn.right');

let scrollAmount = 0;

rightBtn.addEventListener('click', () => {
    scrollAmount += 300; // Adjust scroll distance as needed
    scrollContainer.scrollTo({
        left: scrollAmount,
        behavior: 'smooth'
    });
});

leftBtn.addEventListener('click', () => {
    scrollAmount -= 300; // Adjust scroll distance as needed
    scrollContainer.scrollTo({
        left: scrollAmount,
        behavior: 'smooth'
    });
});
