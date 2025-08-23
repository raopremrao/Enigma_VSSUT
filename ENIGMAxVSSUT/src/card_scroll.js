import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/all'
import Lenis from 'lenis'

document.addEventListener('DOMContentLoaded', () => {
    gsap.registerPlugin(ScrollTrigger);

    const lenis = new Lenis();
    lenis.on('scroll', ScrollTrigger.update);
    gsap.ticker.add((time) => {
      lenis.raf(time * 1000); 
    });
    gsap.ticker.lagSmoothing(0);

    const cards = gsap.utils.toArray(".card");

    cards.forEach((card, index) => {
        if (index < cards.length - 1) {
            const cardInner = card.querySelector(".card-inner");

            gsap.fromTo(cardInner, {
                y: "0%",
                z: 0,
                rotationX: 0
            }, {
                y: "50%",
                // z: -250,
                z: -400,
                // rotationX: 45,
                rotationX: 50,
                scrollTrigger: {
                    trigger: cards[index + 1],
                    start: "top 100%",
                    end: "top -75%",
                    scrub: true,
                    pin: card,
                    pinSpacing: false,
                },
            });

            gsap.to(cardInner, {
                "--after-opacity" : 1,
                scrollTrigger: {
                  trigger: cards[index + 1],
                  start: "top 75%",
                  end: "top -25%",
                  scrub: true,
                },
            });

        }
    })
})