// MENU TOGGLE
const menu = document.querySelector('.menu i');
const navbar = document.querySelector('.navbar');

menu.addEventListener('click', () => {
  navbar.classList.toggle('active');
});

// SKILL BARS ANIMATION
window.addEventListener('scroll', () => {
  const skillsSection = document.querySelector('.skills');
  const skillBars = document.querySelectorAll('.bar span');
  const sectionPos = skillsSection.getBoundingClientRect();
  const windowHeight = window.innerHeight;

  if (sectionPos.top < windowHeight && sectionPos.bottom >= 0) {
    skillBars.forEach(bar => {
      if(bar.classList.contains('html')) bar.style.width = '90%';
      if(bar.classList.contains('css')) bar.style.width = '70%';
      if(bar.classList.contains('js')) bar.style.width = '80%';
      if(bar.classList.contains('python')) bar.style.width = '90%';
      if(bar.classList.contains('java')) bar.style.width = '85%';
    });
  }
});

// TYPING ANIMATION
const textAnim = document.querySelector('.text-animation span');
const words = ["Full Stack Developer", "Student"];
let i = 0;
let index = 0;
let currentWord = '';
let isDeleting = false;
let wait = 2000;

function type() {
  currentWord = words[i];
  let displayed = currentWord.substring(0, index);

  textAnim.textContent = displayed;

  if(!isDeleting && index < currentWord.length){
    index++;
    setTimeout(type, 150);
  } else if(isDeleting && index > 0){
    index--;
    setTimeout(type, 100);
  } else {
    isDeleting = !isDeleting;
    if(!isDeleting) i = (i + 1) % words.length;
    setTimeout(type, wait);
  }
}
type();
