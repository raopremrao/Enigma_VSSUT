import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/all'

gsap.registerPlugin(ScrollTrigger)

const doAni = gsap.to('.do img', {
    scale: 1.5,
    // opacity: 0,
    ease: 'power2.in',
})

ScrollTrigger.create({
    trigger: '.do',
    start: "15% top",
    end: "bottom top",
    //   pin: true,
    scrub: 2,
    markers: true,
    animation: doAni
})