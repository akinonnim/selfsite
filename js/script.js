document.addEventListener('DOMContentLoaded', function () {
  const menuIcon = document.querySelector('.menu-icon');
  const navMenu = document.querySelector('.Navbar');

  if (!menuIcon || !navMenu) return;

  const links = navMenu.querySelectorAll('a');
  menuIcon.addEventListener('click', function (e) {
    e.stopPropagation();
    navMenu.classList.toggle('active');
  });

  links.forEach(link => {
    link.addEventListener('click', function () {
      navMenu.classList.remove('active');
    });
  });

  document.addEventListener('click', function (e) {
    if (!navMenu.contains(e.target) && !menuIcon.contains(e.target)) {
      navMenu.classList.remove('active');
    }
  });
});
