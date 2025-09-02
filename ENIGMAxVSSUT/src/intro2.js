import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/all'

gsap.registerPlugin(ScrollTrigger)

const heroAnimation = gsap.to('.hero img', {
    scale: 1.5,
    ease: 'none',
})

ScrollTrigger.create({
  trigger: '.hero',
  start: "top top",
  end: "bottom top",
//   pin: true,
  scrub: 1,
  animation: heroAnimation
})

