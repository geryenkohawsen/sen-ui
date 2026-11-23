import type { Metadata } from 'next'
import LandingPage from './LandingPage'

export const metadata: Metadata = {
  title: 'SenUI - Human-made interface source',
  description:
    'SenUI is a calm interface system built around human-checked source, plain HTML, CSS, and JavaScript patterns.',
}

export default function PageTop() {
  return <LandingPage />
}
