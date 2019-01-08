function toggleMenu(visible) {
  document.querySelector('.sidebar').classList.toggle('show', visible)
}

document.querySelector('.hamburger_menu_icon').addEventListener('click', function(e) {
  e.preventDefault();
  toggleMenu()
});