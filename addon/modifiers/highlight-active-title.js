import { modifier } from 'ember-modifier';

export default modifier(function highlightActiveTitle(element, [toc]) {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      const id = entry.target.getAttribute('id');
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

  // Track all headers in content by id
  toc.forEach((tocItem) => {
    observer.observe(document.getElementById(tocItem.id));
  });

  return () => {
    observer.disconnect();
  };
});
