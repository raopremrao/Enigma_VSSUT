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

const outroAni = gsap.to('.outro', {
  y: '-100%',
  ease: 'power4.in'
});

const aboutAni = gsap.to('.about', {

  ease: 'none' // Linear easing for consistent parallax effect
});

ScrollTrigger.create({
  trigger: '.outro',
  start: 'top top',
  end: 'bottom top',
  scrub: 1,
  markers: false,
  animation: outroAni
});

ScrollTrigger.create({
  trigger: '.about',
  start: 'top bottom', // Start when .about's top hits the bottom of the viewport
  end: 'top top', // End when .about's top reaches the top of the viewport
  scrub: 1,
  markers: true,
  animation: aboutAni
});

// Refresh ScrollTrigger and Lenis to ensure correct scroll height
ScrollTrigger.refresh();
lenis.resize(); // Recalculate Lenis scroll height