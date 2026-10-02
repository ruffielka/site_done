import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

export function animateOnScroll(selector, options = {}) {
  const elements = document.querySelectorAll(selector)
  if (!elements.length) return

  const { scrollTrigger, ...rest } = options
  gsap.from(elements, {
    y: 40,
    opacity: 0,
    duration: 0.8,
    ease: 'power3.out',
    ...rest,
    scrollTrigger: {
      trigger: elements[0],
      start: 'top 85%',
      toggleActions: 'play none none none',
      ...scrollTrigger
    }
  })
}

export function setupReducedMotion() {
  const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches
  if (reduced) {
    gsap.globalTimeline.clear()
    gsap.defaults({ duration: 0, ease: 'none' })
    ScrollTrigger.getAll().forEach(t => t.kill())
  }
  return reduced
}
