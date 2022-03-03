const bars = document.getElementById('bars');
const items = document.querySelector('.navbar-items');

bars.addEventListener('click', () => {
  items.classList.toggle('d-none');

  if (bars.classList.contains('fa-bars')) {
    bars.classList.remove('fa-bars');
    bars.classList.add('fa-xmark');
  } else {
    bars.classList.remove('fa-xmark');
    bars.classList.add('fa-bars');
  }
})
