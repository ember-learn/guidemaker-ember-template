import { modifier } from 'ember-modifier';

export default modifier(function highlightActiveTitle(element) {
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

  // Track all headers in content with an id
  document
    .querySelectorAll(
      '.guides-article-content h1[id], .guides-article-content h2[id], .guides-article-content h3[id], .guides-article-content h4[id]'
    )
    .forEach((header) => {
      observer.observe(header);
    });

  return () => {
    observer.disconnect();
  };
});
