const menuButton = document.querySelector('.toggle-menu');
const closeBtn = document.querySelector('.close-menu');
const nav = document.querySelector('.nav');
// nav button shenanigans
menuButton.addEventListener('click', () => {
    nav.classList.toggle('active');
  menuButton.setAttribute('aria-expanded', 'true');
});
closeBtn.addEventListener('click', () => {
  nav.classList.remove('active');
  menuButton.setAttribute('aria-expanded', 'false');
});
/*making the link behaviour professional*/
const navLinks = document.querySelectorAll('.nav ul li a');
navLinks.forEach(link => {
  link.addEventListener('click', () => {
    nav.classList.remove('active');
    menuButton.setAttribute('aria-expanded', 'false');
  });
});
