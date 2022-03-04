import { toggleMenu } from './script.js';

const theme = document.getElementById('theme');
const root = document.body;
const icon = localStorage.getItem('icon');
const themeName = localStorage.getItem('themeName');

if (icon === null) icon = localStorage.setItem('icon', 'fa-moon');
if (themeName === null) themeName = localStorage.setItem('themeName', 'light');

root.classList.add(themeName);
theme.setAttribute('class', `fa ${icon}`);

theme.addEventListener('click', () => {

  toggleMenu();

  if (localStorage.getItem('themeName') === 'dark') {
    root.classList.remove('dark');
    root.classList.add('light');
    localStorage.setItem('themeName', 'light');
    theme.setAttribute('class', 'fa fa-moon');
    localStorage.setItem('icon', 'fa-moon');
  } else if (localStorage.getItem('themeName') === 'light') {
    root.classList.remove('light');
    root.classList.add('dark');
    localStorage.setItem('themeName', 'dark');
    theme.setAttribute('class', 'fa fa-sun');
    localStorage.setItem('icon', 'fa-sun');
  }
  
})
