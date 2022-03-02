const bars = document.getElementById('bars');
const items = document.getElementById('nav-items-hidde');

bars.addEventListener('click', () => {
  items.classList.toggle('d-none');
})
