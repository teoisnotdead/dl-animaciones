const toggle = document.querySelector('.toggle');
const menu = document.querySelector('nav ul');

toggle.addEventListener('click', () => {
    menu.classList.toggle('active');
});