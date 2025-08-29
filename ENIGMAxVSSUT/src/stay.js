import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const textSections = gsap.utils.toArray('.stay-page');
const images = gsap.utils.toArray('.stay-images img');

// Set initial z-indexes and clip-paths
images.forEach((image, i) => {
  gsap.set(image, { 
    zIndex: images.length - i,
    clipPath: 'inset(0 0 0% 0)' // Initially fully visible
  });
});

// Create a reveal animation for each section
textSections.forEach((section, i) => {
  // We don't need an animation for the very last section
  if (i < textSections.length - 1) {
    const imageToReveal = images[i];

    gsap.fromTo(imageToReveal, 
      { clipPath: 'inset(0 0 0% 0)' }, // Start fully visible
      {
        clipPath: 'inset(0 0 100% 0)', // Animate to fully clipped from the bottom
        ease: 'none',
        scrollTrigger: {
          trigger: section,
        //   start: 'top top', // Animation starts when the top of the section hits the top of the viewport
          start: '50% top', // Animation starts when the top of the section hits the top of the viewport
        //   end: 'bottom top', // Animation ends when the bottom of the section hits the top of the viewport
          end: '95% top', // Animation ends when the bottom of the section hits the top of the viewport
          scrub: true,
          markers: false,
        }
      }
    );
  }
});

// Pin the right column
ScrollTrigger.create({
  trigger: '.stay-container',
  start: 'top top',
  end: 'bottom bottom',
  pin: '.stay-right'
});