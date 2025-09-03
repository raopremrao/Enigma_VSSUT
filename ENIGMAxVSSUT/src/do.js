import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/all'

gsap.registerPlugin(ScrollTrigger)

const doAni = gsap.to('.do img', {
    scale: 1.5,
    // opacity: 0,
    // ease: 'power2.in',
    ease: 'none'
})
const doHani = gsap.to('.do h1', {
    scale: 0.7,
    y: '60%',
    // opacity: 0,
    // ease: 'power2.in',
    ease: 'none'
})

ScrollTrigger.create({
    trigger: '.do',
    start: "top top",
    end: "bottom top",
    //   pin: true,
    scrub: true,
    markers: false,
    animation: doAni
})
ScrollTrigger.create({
    trigger: '.do',
    start: "top top",
    end: "bottom top",
    //   pin: true,
    scrub: true,
    markers: false,
    animation: doHani,
})

const cursor = document.querySelector('.cursor');
const doPage = document.querySelector('.do')

doPage.addEventListener('mousemove', (dets) => {
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

// doPage.addEventListener('mouseleave', (dets) => {
//     gsap.to(cursor, {
//         // opacity: 0,
//         display: "none",
//         // x: dets.x + 10,
//         // y: dets.y + 10,
//         duration: 1,
//         // ease: "back.out(4)"
//         ease: 'Power4.out'
//     })
// })