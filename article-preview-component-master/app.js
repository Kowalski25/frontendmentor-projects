const shareBtn = document.querySelector('.button');
const socialLinks = document.querySelector('.social-share');

shareBtn.addEventListener('click', () => {
  shareBtn.classList.toggle('active');
  socialLinks.classList.toggle('active');
});