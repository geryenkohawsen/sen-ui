import type { Metadata } from 'next'
import LandingPage from './LandingPage'

export const metadata: Metadata = {
  title: 'Sen UI - Calm React components for serious product teams',
  description:
    'Try Sen UI, a lightweight React and Tailwind component library for accessible, polished interfaces.',
}

export default function PageTop() {
  return <LandingPage />
}
