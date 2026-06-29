(function () {
  function initAnimations() {
    if (!window.gsap) return;
    gsap.utils.toArray('.bento').forEach(function (card) {
      gsap.from(card, {
        opacity: 0,
        y: 30,
        duration: 0.6,
        scrollTrigger: {
          trigger: card,
          start: 'top 85%'
        }
      });
    });
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initAnimations);
  } else {
    initAnimations();
  }
})();