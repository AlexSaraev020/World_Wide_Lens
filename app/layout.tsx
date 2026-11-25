import { type ReactNode } from 'react'
import type { Metadata } from 'next'
import Header from '../components/editorial/Header'
import Footer from '../components/editorial/Footer'
// In your app, put this after your existing globals.css import (or merge the
// :root block into it) so Tailwind base styles still load first.
import './globals.css'
import '../styles/editorial.css'

export const metadata: Metadata = {
  title: 'World Wide Lens',
  description: 'World news, printed in the order it was filed.',
}

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Newsreader:ital,opsz,wght@0,6..72,200..800;1,6..72,200..700&family=IBM+Plex+Mono:wght@400;500&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="min-h-screen">
        <div className="grain" aria-hidden="true" />
        <a href="#main" className="skip-link">
          Skip to the wire
        </a>
        <Header />
        <main id="main">{children}</main>
        <Footer />
      </body>
    </html>
  )
}
