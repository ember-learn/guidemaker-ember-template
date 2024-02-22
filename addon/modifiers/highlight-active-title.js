import { modifier } from 'ember-modifier';

export default modifier(function highlightActiveTitle(element, [toc]) {
  const observer = new IntersectionObserver((tocSections) => {
    tocSections.forEach((tocSection) => {
      const tocId = tocSection.target.getAttribute('aria-labelledby');
      const tocHeader = element.querySelector(`a[href="#${tocId}"]`);
      if (tocSection.intersectionRatio > 0) {
        tocHeader?.parentElement.classList.add('in-viewport');
      } else {
        tocHeader?.parentElement.classList.remove('in-viewport');
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
