'use client'

import Link from 'next/link'
import { useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { useGSAP } from '@gsap/react'

gsap.registerPlugin(ScrollTrigger, useGSAP)

const principles = [
  {
    title: 'No install ritual',
    body: 'Read the source, copy the pattern, and keep moving. SenUI treats every interface primitive as code a person should be able to audit.',
    href: '/docs',
    image: 'https://picsum.photos/seed/sen-quiet-source/1400/1000',
    className: 'md:col-span-2 md:row-span-2',
  },
  {
    title: 'Human checked',
    body: 'The system favors small, legible decisions over hidden abstractions and sprawling dependency chains.',
    href: '/components',
    image: 'https://picsum.photos/seed/sen-human-made/1200/800',
    className: 'md:col-span-2',
  },
  {
    title: 'Plain surface',
    body: 'HTML, CSS, and JavaScript stay close enough to inspect line by line.',
    href: '/blocks',
    image: 'https://picsum.photos/seed/sen-plain-code/900/900',
    className: 'md:col-span-1',
  },
  {
    title: 'Calm defaults',
    body: 'Spacing, focus, loading, and feedback states are tuned for work that happens all day.',
    href: '/components',
    image: 'https://picsum.photos/seed/sen-calm-defaults/900/1400',
    className: 'md:col-span-1 md:row-span-2',
  },
  {
    title: 'A smaller surface to trust',
    body: 'Less package-manager ceremony means less fog around what ships to the browser.',
    href: 'https://github.com/geryenkohawsen/sen-ui',
    image: 'https://picsum.photos/seed/sen-audit-trail/1600/900',
    className: 'md:col-span-3',
  },
]

const accordionItems = [
  {
    title: 'Read',
    body: 'Start with source that explains itself before documentation has to intervene.',
    background:
      'linear-gradient(145deg, rgba(236, 243, 234, 0.96), rgba(202, 216, 205, 0.74))',
  },
  {
    title: 'Shape',
    body: 'Change spacing, color, and behavior without pulling a dependency maze behind it.',
    background:
      'linear-gradient(145deg, rgba(248, 249, 244, 0.98), rgba(180, 199, 194, 0.70))',
  },
  {
    title: 'Check',
    body: 'Keep the interface reviewable by designers, engineers, and security-minded teams.',
    background:
      'linear-gradient(145deg, rgba(230, 238, 226, 0.94), rgba(210, 219, 214, 0.76))',
  },
  {
    title: 'Ship',
    body: 'Move from quiet prototype to production screen with the same source in view.',
    background:
      'linear-gradient(145deg, rgba(246, 248, 241, 0.98), rgba(154, 178, 165, 0.68))',
  },
]

const stackItems = [
  {
    title: 'SenButton',
    body: 'A direct action primitive with visible states, readable contrast, and no ornamental behavior.',
  },
  {
    title: 'SenCheckbox',
    body: 'A small control that keeps labels, keyboard behavior, and form state aligned.',
  },
  {
    title: 'SenTable',
    body: 'Dense data presentation with a calm rhythm for scanning real product information.',
  },
  {
    title: 'SenCode',
    body: 'Readable snippets for docs, examples, and source-first component adoption.',
  },
]

const marqueeItems = [
  'Plain HTML',
  'Measured CSS',
  'Small JavaScript',
  'Human checked',
  'Source first',
  'Audit friendly',
  'Accessible states',
  'Calm UI',
]

const revealWords =
  'SenUI is made for teams who want the interface to feel quiet, the source to feel honest, and the browser to receive only what a human has chosen to ship.'

export default function LandingPage() {
  const rootRef = useRef<HTMLDivElement>(null)
  const splashRef = useRef<HTMLDivElement>(null)

  useGSAP(
    () => {
      const reduceMotion = window.matchMedia(
        '(prefers-reduced-motion: reduce)'
      ).matches

      if (reduceMotion) {
        gsap.set(splashRef.current, { display: 'none' })
        gsap.set('.hero-enter', { opacity: 1, y: 0 })
        gsap.set('.reveal-word', { opacity: 1, y: 0 })
        gsap.set('.stack-card', { opacity: 1, y: 0, rotate: 0 })
        return
      }

      if (splashRef.current) {
        splashRef.current.classList.remove('animate-splash-fallback')

        gsap
          .timeline({ defaults: { ease: 'power3.out' } })
          .set(splashRef.current, { autoAlpha: 1 })
          .from('.splash-letter', {
            yPercent: 115,
            opacity: 0,
            duration: 0.78,
            stagger: 0.055,
          })
          .fromTo(
            '.splash-rule',
            { scaleX: 0, transformOrigin: '50% 50%' },
            { scaleX: 1, duration: 0.68, ease: 'power4.inOut' },
            '-=0.18'
          )
          .to(
            '.splash-letter',
            {
              yPercent: -115,
              opacity: 0,
              duration: 0.48,
              stagger: 0.04,
              ease: 'power2.in',
            },
            '+=0.42'
          )
          .to(
            splashRef.current,
            {
              autoAlpha: 0,
              duration: 0.58,
              ease: 'power2.out',
            },
            '-=0.12'
          )
          .set(splashRef.current, { display: 'none' })
      }

      gsap.fromTo(
        '.hero-enter',
        { y: 26, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 1,
          ease: 'power3.out',
          stagger: 0.095,
          delay: 2.1,
        }
      )

      gsap.utils.toArray<HTMLElement>('.image-reveal').forEach((item) => {
        gsap.fromTo(
          item,
          {
            scale: 0.84,
            opacity: 0.28,
            filter: 'grayscale(1) contrast(1.3) saturate(0.55)',
          },
          {
            scale: 1,
            opacity: 0.72,
            filter: 'grayscale(0.16) contrast(1.08) saturate(0.82)',
            ease: 'none',
            scrollTrigger: {
              trigger: item,
              start: 'top bottom',
              end: 'bottom top',
              scrub: true,
            },
          }
        )
      })

      gsap.to('.reveal-word', {
        opacity: 1,
        y: 0,
        ease: 'none',
        stagger: 0.035,
        scrollTrigger: {
          trigger: '.word-reveal',
          start: 'top 76%',
          end: 'bottom 38%',
          scrub: true,
        },
      })

      gsap.utils.toArray<HTMLElement>('.stack-card').forEach((card, index) => {
        gsap.fromTo(
          card,
          { y: 96 + index * 18, opacity: 0.2, rotate: index % 2 ? -1.2 : 1.2 },
          {
            y: index * -22,
            opacity: 1,
            rotate: 0,
            ease: 'power2.out',
            scrollTrigger: {
              trigger: card,
              start: 'top 88%',
              end: 'top 34%',
              scrub: true,
            },
          }
        )
      })
    },
    { scope: rootRef }
  )

  return (
    <main
      ref={rootRef}
      className="w-full max-w-full overflow-x-hidden bg-[#f7f9f4] [font-family:Geist,ui-sans-serif,system-ui,sans-serif] text-[#141914]"
    >
      <div
        ref={splashRef}
        aria-hidden
        className="animate-splash-fallback fixed inset-0 z-[100] grid place-items-center bg-[#f7f9f4] text-[#141914]"
      >
        <div className="flex flex-col items-center gap-6">
          <div className="overflow-hidden text-[clamp(4rem,13vw,10rem)] leading-none font-black tracking-normal">
            {'SenUI'.split('').map((letter, index) => (
              <span
                key={`${letter}-${index}`}
                className="inline-block overflow-hidden"
              >
                <span className="splash-letter inline-block">{letter}</span>
              </span>
            ))}
          </div>
          <div className="splash-rule h-px w-56 bg-[#141914]" />
        </div>
      </div>

      <section className="relative isolate overflow-hidden px-4 pt-10 pb-16 sm:px-6 sm:pt-16 sm:pb-20 md:min-h-[calc(100svh-22rem)] md:pt-20 md:pb-24 lg:px-8">
        <div
          className="absolute inset-x-0 top-0 h-full min-h-[34rem] bg-cover bg-center opacity-20 mix-blend-multiply"
          style={{
            backgroundImage:
              'url(https://picsum.photos/seed/sen-still-water/1920/1080)',
          }}
        />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_4%,rgba(185,204,188,0.72),transparent_34%),radial-gradient(circle_at_86%_62%,rgba(127,153,168,0.20),transparent_32%),linear-gradient(to_bottom,rgba(247,249,244,0.54),#f7f9f4_68%)]" />

        <div className="relative z-10 mx-auto flex w-full max-w-7xl flex-col items-center justify-center text-center md:min-h-[58svh]">
          <p className="hero-enter max-w-2xl text-xs leading-6 font-semibold tracking-[0.12em] text-[#607061] uppercase sm:text-sm sm:tracking-[0.22em]">
            Human-made, human-checked interface source
          </p>
          <h1 className="hero-enter mt-7 max-w-[72rem] text-[clamp(4.5rem,17vw,14rem)] leading-[0.76] font-black tracking-normal text-balance">
            SenUI
          </h1>
          <p className="hero-enter mt-9 max-w-3xl text-lg leading-8 text-[#354038] sm:text-xl">
            A calm component language for builders who want fewer dependency
            rituals, more readable source, and browser code that feels close
            enough to inspect.
          </p>
          <div className="hero-enter mt-11 flex flex-col gap-3 sm:flex-row">
            <Link
              href="/components"
              className="inline-flex h-12 items-center justify-center rounded-full bg-[#141914] px-7 text-sm font-black text-white transition duration-300 hover:scale-[1.03] hover:bg-[#243025] focus-visible:ring-2 focus-visible:ring-[#141914] focus-visible:ring-offset-2 focus-visible:ring-offset-[#f7f9f4] sm:h-14 sm:px-8"
            >
              Browse components
            </Link>
            <Link
              href="/docs"
              className="inline-flex h-12 items-center justify-center rounded-full border border-[#141914]/20 bg-white/68 px-7 text-sm font-black text-[#141914] shadow-[0_20px_80px_rgba(37,50,38,0.10)] transition duration-300 hover:scale-[1.03] hover:bg-white focus-visible:ring-2 focus-visible:ring-[#141914] focus-visible:ring-offset-2 focus-visible:ring-offset-[#f7f9f4] sm:h-14 sm:px-8"
            >
              Read the source notes
            </Link>
          </div>
        </div>
      </section>

      <section className="px-4 py-32 sm:px-6 md:py-48 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="mb-16 grid gap-8 md:grid-cols-[1.1fr_0.9fr] md:items-end">
            <h2 className="max-w-5xl text-[clamp(2.7rem,6vw,6.6rem)] leading-[0.92] font-black tracking-normal text-balance">
              Source that feels{' '}
              <span
                className="inline-block h-12 w-32 rounded-full bg-cover bg-center align-middle grayscale sm:h-16 sm:w-44"
                style={{
                  backgroundImage:
                    'url(https://picsum.photos/seed/sen-ink-paper/900/420)',
                }}
              />{' '}
              clear before it feels clever.
            </h2>
            <p className="max-w-xl text-base leading-7 text-[#526055] md:justify-self-end">
              SenUI frames the UI kit as a readable craft object: small files,
              direct patterns, and decisions a team can review without trusting
              an opaque dependency stack.
            </p>
          </div>

          <div className="grid grid-flow-dense auto-rows-[13rem] grid-cols-1 gap-3 md:grid-cols-4">
            {principles.map((principle) => (
              <Link
                key={principle.title}
                href={principle.href}
                className={`${principle.className} group relative overflow-hidden rounded-lg border border-[#172016]/10 bg-white/68 p-6 shadow-[0_24px_90px_rgba(37,50,38,0.08)] transition duration-500 outline-none hover:-translate-y-1 hover:border-[#172016]/24 focus-visible:ring-2 focus-visible:ring-[#172016]`}
              >
                <div
                  className="absolute inset-0 bg-cover bg-center opacity-18 mix-blend-luminosity transition-transform duration-700 ease-out group-hover:scale-105"
                  style={{ backgroundImage: `url(${principle.image})` }}
                />
                <div className="absolute inset-0 bg-[linear-gradient(145deg,rgba(255,255,255,0.92),rgba(232,238,228,0.66))]" />
                <div className="relative z-10 flex h-full flex-col justify-end">
                  <h3 className="max-w-xl text-2xl leading-tight font-black tracking-normal sm:text-3xl">
                    {principle.title}
                  </h3>
                  <p className="mt-4 max-w-2xl text-sm leading-6 text-[#4d594f]">
                    {principle.body}
                  </p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="overflow-hidden border-y border-[#141914]/10 py-8">
        <div className="animate-marquee flex w-max gap-3">
          {[...marqueeItems, ...marqueeItems].map((item, index) => (
            <span
              key={`${item}-${index}`}
              className="rounded-full border border-[#141914]/10 bg-white/56 px-7 py-3 text-sm font-black whitespace-nowrap text-[#3b463d]"
            >
              {item}
            </span>
          ))}
        </div>
      </section>

      <section className="px-4 py-32 sm:px-6 md:py-48 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="mb-16 grid gap-8 md:grid-cols-[0.9fr_1.1fr] md:items-end">
            <h2 className="text-[clamp(2.4rem,5.3vw,5.9rem)] leading-[0.94] font-black tracking-normal text-balance">
              A quiet path from blank file to usable interface.
            </h2>
            <p className="max-w-xl text-base leading-7 text-[#526055] md:justify-self-end">
              The workflow is intentionally plain: read, shape, check, ship.
              Each step keeps the source visible and the product surface calm.
            </p>
          </div>

          <div className="flex h-[34rem] flex-col overflow-hidden rounded-lg border border-[#141914]/10 bg-white/60 md:flex-row">
            {accordionItems.map((item, index) => (
              <article
                key={item.title}
                className="group relative min-h-0 flex-1 cursor-pointer overflow-hidden border-[#141914]/10 transition-[flex] duration-700 ease-out hover:flex-[2.2] md:border-l first:md:border-l-0"
              >
                <div
                  className="absolute inset-0 transition-transform duration-700 ease-out group-hover:scale-105"
                  style={{ background: item.background }}
                />
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_22%_18%,rgba(255,255,255,0.72),transparent_34%),linear-gradient(to_top,rgba(247,249,244,0.94),rgba(247,249,244,0.08))]" />
                <div
                  aria-hidden
                  className="absolute top-7 right-6 left-6 space-y-3 opacity-38 transition duration-700 group-hover:opacity-58"
                >
                  {[0, 1, 2, 3, 4].map((line) => (
                    <span
                      key={line}
                      className="block h-2 rounded-full bg-[#141914]"
                      style={{
                        width: `${82 - line * 11 + (index % 2) * 5}%`,
                      }}
                    />
                  ))}
                </div>
                <div className="relative z-10 flex h-full flex-col justify-end p-6">
                  <h3 className="text-3xl font-black tracking-normal text-[#141914]">
                    {item.title}
                  </h3>
                  <p className="mt-3 max-w-sm text-sm leading-6 text-[#4d594f] opacity-100 transition duration-500 md:opacity-0 md:group-hover:opacity-100">
                    {item.body}
                  </p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="px-4 py-32 sm:px-6 md:py-48 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <h2 className="word-reveal mx-auto max-w-6xl text-center text-[clamp(2.4rem,5.2vw,6rem)] leading-[1] font-black tracking-normal text-balance">
            {revealWords.split(' ').map((word, index) => (
              <span
                key={`${word}-${index}`}
                className="reveal-word inline-block translate-y-3 px-1 opacity-10"
              >
                {word}
              </span>
            ))}
          </h2>
        </div>
      </section>

      <section className="px-4 py-32 sm:px-6 md:py-48 lg:px-8">
        <div className="mx-auto grid max-w-7xl gap-14 lg:grid-cols-[0.85fr_1.15fr]">
          <div className="lg:sticky lg:top-28 lg:h-fit">
            <h2 className="text-[clamp(2.5rem,5.2vw,5.8rem)] leading-[0.94] font-black tracking-normal text-balance">
              Small primitives, no noisy ceremony.
            </h2>
            <p className="mt-7 max-w-lg text-base leading-7 text-[#526055]">
              SenUI keeps product building close to the browser. The components
              are shaped for inspection, reuse, and calm repetition.
            </p>
          </div>

          <div className="space-y-[-1.25rem] pt-4 lg:pt-24">
            {stackItems.map((item, index) => (
              <div
                key={item.title}
                className="stack-card relative min-h-[20rem] rounded-lg border border-[#141914]/10 bg-[#141914] p-7 text-white shadow-[0_28px_100px_rgba(20,25,20,0.24)]"
                style={{ zIndex: index + 1 }}
              >
                <div className="absolute inset-x-7 top-0 h-px bg-gradient-to-r from-transparent via-[#dfe8dd]/70 to-transparent" />
                <p className="text-xs font-black tracking-[0.22em] text-[#c4d3c2] uppercase">
                  {item.title}
                </p>
                <p className="mt-12 max-w-2xl text-[clamp(1.8rem,3.7vw,4.2rem)] leading-[0.98] font-black tracking-normal">
                  {item.body}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="px-4 py-32 sm:px-6 md:py-48 lg:px-8">
        <div className="mx-auto max-w-7xl overflow-hidden rounded-lg bg-[#141914] p-8 text-white shadow-[0_30px_120px_rgba(20,25,20,0.25)] sm:p-12 md:p-16">
          <div className="grid gap-10 md:grid-cols-[1.15fr_0.85fr] md:items-end">
            <h2 className="max-w-5xl text-[clamp(2.8rem,6vw,6.8rem)] leading-[0.9] font-black tracking-normal text-balance">
              Build the next screen from source you can read.
            </h2>
            <div>
              <p className="text-base leading-7 text-white/70">
                Explore the component pages, inspect the implementation, and
                keep the interface simple enough for a human review.
              </p>
              <div className="mt-8 flex flex-col gap-3 sm:flex-row md:flex-col lg:flex-row">
                <Link
                  href="/components"
                  className="inline-flex h-14 items-center justify-center rounded-full bg-white px-8 text-sm font-black text-[#141914] transition duration-300 hover:scale-[1.03] hover:bg-[#dfe8dd] focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-[#141914]"
                >
                  Open components
                </Link>
                <Link
                  href="https://github.com/geryenkohawsen/sen-ui"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex h-14 items-center justify-center rounded-full border border-white/22 bg-white/8 px-8 text-sm font-black text-white transition duration-300 hover:scale-[1.03] hover:bg-white/14 focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-[#141914]"
                >
                  View GitHub
                </Link>
              </div>
            </div>
          </div>
        </div>

        <footer className="mx-auto mt-14 flex max-w-7xl flex-col gap-4 border-t border-[#141914]/10 pt-8 text-sm text-[#526055] md:flex-row md:items-center md:justify-between">
          <p>SenUI by Geryenko Hawsen.</p>
          <div className="flex gap-5">
            <Link href="/docs" className="transition hover:text-[#141914]">
              Docs
            </Link>
            <Link
              href="/components"
              className="transition hover:text-[#141914]"
            >
              Components
            </Link>
            <Link
              href="https://github.com/geryenkohawsen/sen-ui"
              target="_blank"
              rel="noopener noreferrer"
              className="transition hover:text-[#141914]"
            >
              GitHub
            </Link>
          </div>
        </footer>
      </section>
    </main>
  )
}
