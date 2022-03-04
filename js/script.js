import './theme.js';

const bars = document.getElementById('bars');
const items = document.querySelector('.navbar-items');

const toggleMenu = () => {
  items.classList.toggle('d-none');

  if (bars.classList.contains('fa-bars')) {
    bars.classList.remove('fa-bars');
    bars.classList.add('fa-xmark');
    bars.style.color = 'var(--primary)'
  } else {
    bars.classList.remove('fa-xmark');
    bars.classList.add('fa-bars');
    bars.style.color = 'var(--fg)'
  }
}

bars.addEventListener('click', () => toggleMenu());

export {
  toggleMenu
}
