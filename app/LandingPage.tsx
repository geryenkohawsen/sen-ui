'use client'

import Link from 'next/link'
import { useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { useGSAP } from '@gsap/react'

gsap.registerPlugin(ScrollTrigger, useGSAP)

const features = [
  {
    title: 'Interfaces that stay quiet under pressure',
    body: 'Buttons, inputs, table patterns, typography, and feedback states share a restrained visual language that suits tools people use all day.',
    href: '/components',
    image: 'https://picsum.photos/seed/sen-interface/1920/1080',
    className: 'md:col-span-4',
  },
  {
    title: 'Accessible defaults',
    body: 'Keyboard focus, loading states, readable contrast, and semantic primitives are handled before teams start styling.',
    href: '/docs',
    image: 'https://picsum.photos/seed/sen-accessibility/1920/1080',
    className: 'md:col-span-2',
  },
  {
    title: 'Tailwind-native control',
    body: 'Bring your own tokens, keep className escape hatches, and compose without fighting the component layer.',
    href: '/blocks',
    image: 'https://picsum.photos/seed/sen-tailwind/1920/1080',
    className: 'md:col-span-2',
  },
  {
    title: 'Built for product work',
    body: 'Sen UI is small enough to understand, typed enough to trust, and practical enough to ship into real dashboards and internal tools.',
    href: 'https://github.com/geryenkohawsen/sen-ui',
    image: 'https://picsum.photos/seed/sen-product/1920/1080',
    className: 'md:col-span-4',
  },
]

const accordionItems = [
  {
    title: 'Compose',
    body: 'Start with minimal primitives that match modern React patterns.',
    image: 'https://picsum.photos/seed/sen-compose/1200/1600',
  },
  {
    title: 'Customize',
    body: 'Shape the surface with Tailwind classes and predictable props.',
    image: 'https://picsum.photos/seed/sen-customize/1200/1600',
  },
  {
    title: 'Document',
    body: 'Show teams the exact usage pattern before drift starts.',
    image: 'https://picsum.photos/seed/sen-document/1200/1600',
  },
  {
    title: 'Ship',
    body: 'Keep the bundle lean and the interface consistent.',
    image: 'https://picsum.photos/seed/sen-ship/1200/1600',
  },
]

const stackItems = [
  [
    'SenButton',
    'Typed variants, loading states, and clear interaction affordance.',
  ],
  ['SenCheckbox', 'Form-friendly controls that keep state and labels aligned.'],
  ['SenTable', 'Dense data presentation with calm scanning rhythm.'],
  ['SenCode', 'Readable snippets with copy behavior ready for docs.'],
]

const marqueeItems = [
  'React 19',
  'Next 15',
  'Tailwind CSS',
  'TypeScript',
  'Accessible UI',
  'Low ceremony',
  'Open source',
  'Design systems',
]

export default function LandingPage() {
  const rootRef = useRef<HTMLDivElement>(null)
  const desireRef = useRef<HTMLElement>(null)
  const pinRef = useRef<HTMLDivElement>(null)

  useGSAP(
    () => {
      const reduceMotion = window.matchMedia(
        '(prefers-reduced-motion: reduce)'
      ).matches

      if (reduceMotion) {
        return
      }

      gsap.from('.hero-copy > *', {
        y: 34,
        opacity: 0,
        duration: 1,
        ease: 'power3.out',
        stagger: 0.11,
      })

      gsap.utils.toArray<HTMLElement>('.image-reveal').forEach((item) => {
        gsap.fromTo(
          item,
          { scale: 0.86, opacity: 0.55, filter: 'grayscale(1) contrast(1.35)' },
          {
            scale: 1,
            opacity: 1,
            filter: 'grayscale(0.2) contrast(1.1)',
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
          start: 'top 72%',
          end: 'bottom 38%',
          scrub: true,
        },
      })

      if (desireRef.current && pinRef.current) {
        ScrollTrigger.create({
          trigger: desireRef.current,
          start: 'top top',
          end: 'bottom bottom',
          pin: pinRef.current,
          pinSpacing: false,
        })
      }

      gsap.utils.toArray<HTMLElement>('.stack-card').forEach((card, index) => {
        gsap.fromTo(
          card,
          { y: 96 + index * 18, opacity: 0.2, rotate: index % 2 ? -2 : 2 },
          {
            y: index * -18,
            opacity: 1,
            rotate: 0,
            ease: 'power2.out',
            scrollTrigger: {
              trigger: card,
              start: 'top 88%',
              end: 'top 36%',
              scrub: true,
            },
          }
        )
      })
    },
    { scope: rootRef }
  )

  const revealWords =
    'Sen UI gives your product team a composed component layer with enough taste to look finished and enough restraint to disappear into the workflow.'

  return (
    <main
      ref={rootRef}
      className="w-full max-w-full overflow-x-hidden [font-family:Geist,ui-sans-serif,system-ui,sans-serif] text-white"
    >
      <section className="relative min-h-[calc(100svh-5rem)] overflow-hidden px-4 pt-28 pb-24 sm:px-6 lg:px-8">
        <div
          className="image-reveal absolute right-[-16vw] bottom-[-8rem] h-[48rem] w-[min(54rem,82vw)] rounded-l-[5rem] bg-cover bg-center opacity-80 mix-blend-luminosity shadow-2xl shadow-black/60 contrast-125 grayscale"
          style={{
            backgroundImage:
              'url(https://picsum.photos/seed/sen-hero/1920/1080)',
          }}
        />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_22%_22%,rgba(157,173,135,0.22),transparent_38%),radial-gradient(circle_at_78%_70%,rgba(255,255,255,0.10),transparent_32%)]" />

        <div className="hero-copy relative z-10 mx-auto flex min-h-[64vh] w-full max-w-7xl flex-col justify-center">
          <h1 className="max-w-6xl text-[clamp(3.2rem,6vw,6.5rem)] leading-[0.94] font-black tracking-normal text-balance">
            Components that make product work feel{' '}
            <span className="inline-block h-12 w-28 rounded-full bg-cover bg-center align-middle shadow-2xl shadow-black/40 contrast-125 grayscale sm:h-16 sm:w-40">
              <span
                className="block h-full w-full rounded-full bg-cover bg-center mix-blend-luminosity"
                style={{
                  backgroundImage:
                    'url(https://picsum.photos/seed/sen-inline/800/400)',
                }}
              />
            </span>{' '}
            finished.
          </h1>
          <p className="mt-8 max-w-2xl text-lg leading-8 text-white/76 sm:text-xl">
            Sen UI is a React and Tailwind component library for calm,
            accessible interfaces with sharp developer ergonomics.
          </p>
          <div className="mt-10 flex flex-col gap-3 sm:flex-row">
            <Link
              href="/components"
              className="inline-flex h-14 items-center justify-center rounded-full bg-white px-8 text-sm font-black text-black transition duration-300 hover:scale-[1.03] hover:bg-lime-200 focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-black"
            >
              Try the components
            </Link>
            <Link
              href="https://github.com/geryenkohawsen/sen-ui"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex h-14 items-center justify-center rounded-full border border-white/24 bg-black/40 px-8 text-sm font-black text-white backdrop-blur-xl transition duration-300 hover:scale-[1.03] hover:border-white/60 hover:bg-white/10 focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-black"
            >
              View on GitHub
            </Link>
          </div>
        </div>
      </section>

      <section className="px-4 py-32 sm:px-6 md:py-48 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="mb-16 flex flex-col justify-between gap-8 md:flex-row md:items-end">
            <h2 className="max-w-4xl text-[clamp(2.4rem,4.6vw,5rem)] leading-[0.98] font-black tracking-normal text-balance">
              A tighter path from prototype to production UI.
            </h2>
            <p className="max-w-md text-base leading-7 text-white/62">
              The library keeps the mundane parts solved while leaving teams
              room to make the interface feel like their own product.
            </p>
          </div>

          <div className="grid grid-flow-dense auto-rows-[21rem] grid-cols-1 gap-4 md:grid-cols-6">
            {features.map((feature) => (
              <Link
                key={feature.title}
                href={feature.href}
                className={`${feature.className} group relative overflow-hidden rounded-[2rem] border border-white/10 bg-white/[0.045] p-7 shadow-2xl shadow-black/30 transition duration-500 outline-none hover:border-lime-200/50 focus-visible:ring-2 focus-visible:ring-lime-200`}
              >
                <div
                  className="absolute inset-0 bg-cover bg-center opacity-24 mix-blend-luminosity transition-transform duration-700 ease-out group-hover:scale-105"
                  style={{ backgroundImage: `url(${feature.image})` }}
                />
                <div className="absolute inset-0 bg-[linear-gradient(135deg,rgba(0,0,0,0.9),rgba(0,0,0,0.42))]" />
                <div className="relative z-10 flex h-full flex-col justify-end">
                  <h3 className="max-w-xl text-3xl leading-tight font-black tracking-normal">
                    {feature.title}
                  </h3>
                  <p className="mt-4 max-w-2xl text-sm leading-6 text-white/68">
                    {feature.body}
                  </p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="overflow-hidden border-y border-white/10 py-8">
        <div className="animate-marquee flex w-max gap-4">
          {[...marqueeItems, ...marqueeItems].map((item, index) => (
            <span
              key={`${item}-${index}`}
              className="rounded-full border border-white/12 bg-white/[0.04] px-7 py-3 text-sm font-black whitespace-nowrap text-white/72"
            >
              {item}
            </span>
          ))}
        </div>
      </section>

      <section className="px-4 py-32 sm:px-6 md:py-48 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <h2 className="word-reveal mx-auto max-w-6xl text-center text-[clamp(2.2rem,4.5vw,5.4rem)] leading-[1.02] font-black tracking-normal text-balance">
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
        <div className="mx-auto max-w-7xl">
          <div className="mb-16 grid gap-8 md:grid-cols-[0.9fr_1.1fr] md:items-end">
            <h2 className="text-[clamp(2.4rem,4.5vw,5rem)] leading-[0.98] font-black tracking-normal text-balance">
              Four stages, one consistent surface.
            </h2>
            <p className="max-w-xl text-base leading-7 text-white/62 md:justify-self-end">
              The workflow stays visible without becoming noisy: compose,
              customize, document, and ship with the same component grammar.
            </p>
          </div>

          <div className="flex h-[34rem] flex-col overflow-hidden rounded-[2rem] border border-white/10 bg-white/[0.04] md:flex-row">
            {accordionItems.map((item) => (
              <article
                key={item.title}
                className="group relative min-h-0 flex-1 cursor-pointer overflow-hidden border-white/10 transition-[flex] duration-700 ease-out hover:flex-[2.4] md:border-l first:md:border-l-0"
              >
                <div
                  className="absolute inset-0 bg-cover bg-center opacity-48 mix-blend-luminosity transition-transform duration-700 ease-out group-hover:scale-105"
                  style={{ backgroundImage: `url(${item.image})` }}
                />
                <div className="absolute inset-0 bg-[linear-gradient(to_top,rgba(0,0,0,0.94),rgba(0,0,0,0.18))]" />
                <div className="relative z-10 flex h-full flex-col justify-end p-7">
                  <h3 className="text-3xl font-black tracking-normal">
                    {item.title}
                  </h3>
                  <p className="mt-3 max-w-sm text-sm leading-6 text-white/66 opacity-100 transition duration-500 md:opacity-0 md:group-hover:opacity-100">
                    {item.body}
                  </p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section
        ref={desireRef}
        className="relative px-4 py-32 sm:px-6 md:py-48 lg:px-8"
      >
        <div className="mx-auto grid max-w-7xl gap-16 lg:grid-cols-[0.82fr_1.18fr]">
          <div ref={pinRef} className="h-fit lg:top-24">
            <h2 className="text-[clamp(2.7rem,5vw,5.8rem)] leading-[0.96] font-black tracking-normal text-balance">
              The small primitives carry the whole interface.
            </h2>
            <p className="mt-7 max-w-lg text-base leading-7 text-white/62">
              Sen UI focuses on common product surfaces instead of spectacle:
              controls, data, feedback, and docs that behave predictably.
            </p>
          </div>

          <div className="space-y-[-2rem] pt-8 lg:pt-32">
            {stackItems.map(([title, body], index) => (
              <div
                key={title}
                className="stack-card relative min-h-[22rem] rounded-[2rem] border border-white/10 bg-[#111] p-8 shadow-2xl shadow-black/50"
                style={{ zIndex: index + 1 }}
              >
                <div className="absolute inset-x-8 top-0 h-px bg-gradient-to-r from-transparent via-lime-200/70 to-transparent" />
                <span className="text-sm font-black text-lime-200">
                  {String(index + 1).padStart(2, '0')}
                </span>
                <h3 className="mt-10 text-[clamp(2rem,3.8vw,4.4rem)] leading-none font-black tracking-normal">
                  {title}
                </h3>
                <p className="mt-6 max-w-xl text-base leading-7 text-white/64">
                  {body}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="px-4 py-32 sm:px-6 md:py-48 lg:px-8">
        <div className="mx-auto max-w-7xl overflow-hidden rounded-[2.5rem] border border-lime-200/30 bg-lime-200 p-8 text-black shadow-2xl shadow-lime-950/30 sm:p-12 md:p-16">
          <div className="grid gap-10 md:grid-cols-[1.2fr_0.8fr] md:items-end">
            <h2 className="max-w-4xl text-[clamp(2.6rem,5vw,6rem)] leading-[0.92] font-black tracking-normal text-balance">
              Try the library before your next dashboard drifts.
            </h2>
            <div>
              <p className="text-base leading-7 text-black/70">
                Explore the components, copy an example, and decide whether the
                calm Sen UI baseline belongs in your next build.
              </p>
              <div className="mt-8 flex flex-col gap-3 sm:flex-row md:flex-col lg:flex-row">
                <Link
                  href="/components"
                  className="inline-flex h-14 items-center justify-center rounded-full bg-black px-8 text-sm font-black text-white transition duration-300 hover:scale-[1.03] hover:bg-neutral-800 focus-visible:ring-2 focus-visible:ring-black focus-visible:ring-offset-2 focus-visible:ring-offset-lime-200"
                >
                  Browse components
                </Link>
                <Link
                  href="/docs"
                  className="inline-flex h-14 items-center justify-center rounded-full border border-black/20 bg-white/60 px-8 text-sm font-black text-black transition duration-300 hover:scale-[1.03] hover:bg-white focus-visible:ring-2 focus-visible:ring-black focus-visible:ring-offset-2 focus-visible:ring-offset-lime-200"
                >
                  Read the docs
                </Link>
              </div>
            </div>
          </div>
        </div>

        <footer className="mx-auto mt-14 flex max-w-7xl flex-col gap-4 border-t border-white/10 pt-8 text-sm text-white/50 md:flex-row md:items-center md:justify-between">
          <p>Sen UI by Geryenko Hawsen.</p>
          <div className="flex gap-5">
            <Link href="/docs" className="transition hover:text-white">
              Docs
            </Link>
            <Link href="/components" className="transition hover:text-white">
              Components
            </Link>
            <Link
              href="https://github.com/geryenkohawsen/sen-ui"
              target="_blank"
              rel="noopener noreferrer"
              className="transition hover:text-white"
            >
              GitHub
            </Link>
          </div>
        </footer>
      </section>
    </main>
  )
}
