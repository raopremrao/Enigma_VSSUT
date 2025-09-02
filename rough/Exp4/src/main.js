import './style.css'

import Lenis from 'lenis'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/all'

gsap.registerPlugin(ScrollTrigger)

// Initialize a new Lenis instance for smooth scrolling
const lenis = new Lenis({
  content: document.body, // Explicitly set the scrollable content
  duration: 1.2, // Smooth scroll duration
  smooth: true
});

// Synchronize Lenis scrolling with GSAP's ScrollTrigger plugin
lenis.on('scroll', ScrollTrigger.update);

// Add Lenis's requestAnimationFrame (raf) method to GSAP's ticker
gsap.ticker.add((time) => {
  lenis.raf(time * 1000); // Convert time from seconds to milliseconds
});

// Disable lag smoothing in GSAP to prevent any delay in scroll animations
gsap.ticker.lagSmoothing(0);

var main = document.querySelector(".main")
var cursor = document.querySelector('#cursor')

main.addEventListener('mousemove', (dets) => {
    gsap.to(cursor, {
        opacity: 1,
        display: "flex",
        x: dets.x + 10,
        y: dets.y + 10,
        duration: 1,
        // ease: "back.out(4)"
        ease: 'Power4.out'
    })
})

main.addEventListener('mouseleave', (dets) => {
    gsap.to(cursor, {
        opacity: 0,
        display: "none",
        // x: dets.x + 10,
        // y: dets.y + 10,
        duration: 1,
        // ease: "back.out(4)"
        ease: 'Power4.out'
    })
})

// const mainAnimation = gsap.to('.main', {
  // scale: 0.5
  // opacity: 0.5
// })
// 
// const pageAnimation = gsap.to('.page', {
  // y: '-100%',
  // ease: 'none'
// })

// ScrollTrigger.create({
  // trigger: '.main',
  // start: '20% top',
  // end: '70% top',
  // scrub: true,
  // markers: true,
  // animation: pageAnimation, mainAnimation
// });
// 

ScrollTrigger.create({
  trigger: '.main',
  start: "top top",
  end: "+=100%",
  pin: true,
  scrub: 1,
})

gsap.to('.page',{
  y: "-60%",
  ease: "none",
  scrollTrigger: {
    trigger: '.main',
    start: "top top",
    end: "bottom top",
    scrub: 1,
  }
})

gsap.to(".bg img", {
  scale: 1.2,
  ease: 'none',
  scrollTrigger: {
    trigger: '.main',
    start: "top top",
    end: "+=100%",
    scrub: 1,
  }
})


