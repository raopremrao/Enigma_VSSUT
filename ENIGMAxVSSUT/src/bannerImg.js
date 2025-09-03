import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

gsap.to("#img1", {
    scrollTrigger: {
        trigger: ".banner", // The element that triggers the animation
        start: "0% top", // When the top of the trigger hits the center of the viewport
        // end: "end end", // The animation completes over 500px of scrolling
        end: `+=${window.innerHeight * 2}px`,
        scrub: true, // Links the animation directly to the scrollbar
        // markers: true, // Uncomment for debugging to see start and end points
    },
    top: "40%", // Final top position
    left: "40%", // Final left position
    ease: "none", // Linear animation easing
    opacity: 0,
    scale: 0,
    rotate: 300
});

gsap.to("#img2", {
    scrollTrigger: {
        trigger: ".banner", // The element that triggers the animation
        start: "20% top", // When the top of the trigger hits the center of the viewport
        // end: "end end", // The animation completes over 500px of scrolling
        end: `+=${window.innerHeight * 1.3}px`,
        scrub: true, // Links the animation directly to the scrollbar
        // markers: true, // Uncomment for debugging to see start and end points
    },
    top: "40%", // Final top position
    left: "50%", // Final left position
    ease: "none", // Linear animation easing
    opacity: 0,
    scale: 0

});

gsap.to("#img3", {
    scrollTrigger: {
        trigger: ".banner", // The element that triggers the animation
        start: "10% top", // When the top of the trigger hits the center of the viewport
        // end: "end end", // The animation completes over 500px of scrolling
        end: `+=${window.innerHeight * 2.4}px`,
        scrub: true, // Links the animation directly to the scrollbar
        // markers: true, // Uncomment for debugging to see start and end points
    },
    top: "30%", // Final top position
    left: "50%", // Final left position
    ease: "none", // Linear animation easing
    opacity: 0,
    scale: 0
});

gsap.to("#img4", {
    scrollTrigger: {
        trigger: ".banner", // The element that triggers the animation
        start: "90% top", // When the top of the trigger hits the center of the viewport
        // end: "end end", // The animation completes over 500px of scrolling
        end: `+=${window.innerHeight * 1.7}px`,
        scrub: true, // Links the animation directly to the scrollbar
        // markers: true, // Uncomment for debugging to see start and end points
    },
    top: "37%", // Final top position
    left: "40%", // Final left position
    ease: "none", // Linear animation easing
    opacity: 0,
    scale: 0,
    rotate: 100,
});

gsap.to("#img5", {
    scrollTrigger: {
        trigger: ".banner", // The element that triggers the animation
        start: "20% top", // When the top of the trigger hits the center of the viewport
        // end: "end end", // The animation completes over 500px of scrolling
        end: `+=${window.innerHeight * 1.3}px`,
        scrub: true, // Links the animation directly to the scrollbar
        // markers: true, // Uncomment for debugging to see start and end points
    },
    top: "40%", // Final top position
    left: "40%", // Final left position
    ease: "none", // Linear animation easing
    opacity: 0,
    scale: 0

});

gsap.to("#img6", {
    scrollTrigger: {
        trigger: ".banner", // The element that triggers the animation
        start: "10% top", // When the top of the trigger hits the center of the viewport
        // end: "end end", // The animation completes over 500px of scrolling
        end: `+=${window.innerHeight * 2.2}px`,
        scrub: true, // Links the animation directly to the scrollbar
        // markers: true, // Uncomment for debugging to see start and end points
    },
    top: "35%", // Final top position
    left: "50%", // Final left position
    ease: "none", // Linear animation easing
    opacity: 0,
    scale: 0,
    rotate: -200

});