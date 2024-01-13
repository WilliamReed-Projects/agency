
  // Wait for the page to load
  window.addEventListener('load', function () {
    // Target the hidden text element
    const hiddenText = document.querySelector('.hidden-text');

    // Create a GSAP timeline
    const tl = gsap.timeline();

    // Animation to reveal the text
    tl.to(hiddenText, {
      opacity: 1,
      y: 0,
      duration: 0.5,
      ease: 'power2.out',
    });

    // Play the animation
    tl.play();
  });

