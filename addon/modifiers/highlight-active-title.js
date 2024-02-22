import { modifier } from 'ember-modifier';

export default modifier(function highlightActiveTitle(element, [toc]) {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      const id = entry.target.getAttribute('aria-labelledby');
      if (entry.intersectionRatio > 0) {
        element
          .querySelector(`a[href="#${id}"]`)
          ?.parentElement.classList.add('in-viewport');
      } else {
        element
          .querySelector(`a[href="#${id}"]`)
          ?.parentElement.classList.remove('in-viewport');
      }
    });
  });

  // Track all content sections by id
  toc.forEach((tocItem) => {
    const tocSection = document.querySelector(
      `section[aria-labelledby=${tocItem.id}]`
    );
    if (tocSection) {
      observer.observe(tocSection);
    }
  });

  return () => {
    observer.disconnect();
  };
});
