const menuBtn = document.getElementById('menuBtn');
const navMenu = document.getElementById('navMenu');
const year = document.getElementById('year');

year.textContent = new Date().getFullYear();

menuBtn.addEventListener('click', () => {
  navMenu.classList.toggle('show');
});

navMenu.querySelectorAll('a').forEach(link => {
  link.addEventListener('click', () => navMenu.classList.remove('show'));
});
