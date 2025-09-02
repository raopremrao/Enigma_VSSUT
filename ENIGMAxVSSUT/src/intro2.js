import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/all'

gsap.registerPlugin(ScrollTrigger)

const heroAnimation = gsap.to('.hero img', {
    scale: 1.5,
    // opacity: 0,
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


const cursor = document.querySelector('.cursor');
const hero = document.querySelector('.hero')

hero.addEventListener('mousemove', (dets) => {
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

hero.addEventListener('mouseleave', (dets) => {
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