/*
React Setup:

*** Install***
npm install gsap

*/

// Imports
import gsap from 'gsap';
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ScrollSmoother } from 'gsap/ScrollSmoother';
import { SplitText } from 'gsap/SplitText';
import { Flip } from 'gsap/Flip';
import { MorphSVGPlugin } from 'gsap/MorphSVGPlugin';
import { DrawSVGPlugin } from 'gsap/DrawSVGPlugin';
import { Draggable } from 'gsap/Draggable';
import { MotionPathPlugin } from 'gsap/MotionPathPlugin';
import { Observer } from 'gsap/Observer';
import { TextPlugin } from 'gsap/TextPlugin';
import { CustomEase } from 'gsap/CustomEase';
import { EasePack } from 'gsap/EasePack';

// Resgister Plugins
gsap.registerPlugin(
    useGSAP,
    ScrollTrigger,
    ScrollSmoother,
    SplitText,
    Flip,
    MorphSVGPlugin,
    DrawSVGPlugin,
    Draggable,
    MotionPathPlugin,
    Observer,
    TextPlugin,
    CustomEase,
    EasePack
);

export function gsapHydrate(reactEffect, stateValue, stateBoolean) {
    reactEffect(() => {
        stateValue(stateBoolean)
    }, []);
}

export const createFadeIn = (options = {}) => ({
    opacity: 0,
    duration: 0.6,
    ease: 'power2.out',
    ...options
});

// export const createFadeInScrollX = (trigger, direction = 'left', options = {}) => ({
//     scrollTrigger: {
//         trigger: trigger,
//         toggleActions: "play pause resume reset",
//         scrub: true,
//     },
//     xPercent: direction === 'left' ? -100 : 100,
//     opacity: 0,
//     duration: 0.6,
//     ease: 'power2.out',
//     ...options
// });

export const createFadeInScroll = (trigger, options = {}) => ({
    scrollTrigger: {
        trigger: trigger,
        toggleActions: "play pause resume reset",
        start: 'top 80%',
        // markers: true,
        // scrub: true,
    },
    opacity: 0,
    duration: 0.6,
    ease: 'power2.out',
    ...options
});

export const createSlideInX = (direction = 'left', options = {}) => ({
    xPercent: direction === 'left' ? -100 : 100,
    opacity: 0,
    duration: 0.6,
    ease: 'power2.out',
    ...options
});

export const createSlideInY = (direction = 'top', options = {}) => ({
    yPercent: direction === 'top' ? -100 : 100,
    opacity: 0,
    duration: 0.6,
    ease: 'power2.out',
    ...options
});

/*
let splitText = new SplitText(container.current, {
    type: "chars, words"
});
*/

// export const gsapFrom = (direction = ['from, to'], animation) => gsap.direction(trigger, gsapAnimation);

export const createCharFadeInScrollX = (trigger, options = {}) => ({
    scrollTrigger: {
        trigger: trigger,
        toggleActions: "play pause resume reset"
    },
    opacity: 0,
    x: 20,
    duration: 0.5,
    stagger: 0.05,
    ease: 'power2.out',
    ...options
});

export const createCharFadeInY = (trigger, options = {}) => ({
    scrollTrigger: {
        trigger: trigger,
        toggleActions: "play pause resume reset"
    },
    opacity: 0,
    y: 20,
    duration: 0.5,
    stagger: 0.05,
    ease: 'power2.out',
    ...options
});

export const createWordFadeInX = (options = {}) => ({
    x: 20,
    duration: 0.4,
    opacity: 0,
    ease: 'power2.in',
    stagger: 0.1,
    ...options
});

export const createWordFadeInY = (trigger, options = {}) => ({
    scrollTrigger: {
        trigger: trigger,
        toggleActions: "play pause resume reset",
    },
    y: 20,
    duration: 0.4,
    opacity: 0,
    ease: 'power2.in',
    stagger: 0.1,
    ...options
});



// RESETS





