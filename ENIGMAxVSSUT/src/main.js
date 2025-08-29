import Lenis from 'lenis'
import {ScrollTrigger} from 'gsap/all'
import gsap from 'gsap'

import './card_scroll.js'
import './img_mask.js'
import './bannerImg.js'
import './intro.js'
// import './outro.js' //back and white noise(Don't use this one)
import './outro2.js'
import './stay.js'


const lenis = new Lenis();
lenis.on('scroll', ScrollTrigger.update);
gsap.ticker.add((time) => {
  lenis.raf(time * 1000); 
});
gsap.ticker.lagSmoothing(0);
