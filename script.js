// Cloditheir — site interactions

document.addEventListener('DOMContentLoaded', () => {

  // Reveal timeline items as they scroll into view
  const timelineItems = document.querySelectorAll('.t-item');

  if ('IntersectionObserver' in window && timelineItems.length) {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('in-view');
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.2 });

    timelineItems.forEach(item => observer.observe(item));
  } else {
    // Fallback: just show everything immediately
    timelineItems.forEach(item => item.classList.add('in-view'));
  }

  // Smooth-scroll nav links (native CSS scroll-behavior already does most of this,
  // this just makes sure it also works on older Safari / in-page anchors robustly)
  document.querySelectorAll('nav a[href^="#"]').forEach(link => {
    link.addEventListener('click', (e) => {
      const target = document.querySelector(link.getAttribute('href'));
      if (target) {
        e.preventDefault();
        target.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    });
  });

});
