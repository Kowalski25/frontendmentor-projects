document.addEventListener('DOMContentLoaded', function () {
  const accordionQuestions = document.querySelectorAll('.accordion-question');

  accordionQuestions.forEach(question => {
    question.addEventListener('click', function () {
      const content = this.nextElementSibling;
      const isExpanded = content.classList.toggle('show');

      // Update ARIA attributes 
      this.setAttribute('aria-expanded', isExpanded.toString());
      
      // Toggle icon based on accordion state
      const icon = this.querySelector('img');
      if (isExpanded) {
        icon.setAttribute('src', 'assets/images/icon-minus.svg');

        // Add height equivalent to the accordion content.
        content.style.maxHeight = content.scrollHeight + 'px';
      } else {
        icon.setAttribute('src', 'assets/images/icon-plus.svg');
        content.style.maxHeight = null;
      }
    });
  });
});
