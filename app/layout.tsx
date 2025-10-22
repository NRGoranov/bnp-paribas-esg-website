import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'BNP Paribas Cardiff ESG Risk Integration',
  description: 'Integrating ESG risks for sustainable insurance solutions and ensuring product alignment with ESG criteria.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="smooth-scroll">
      <body>{children}</body>
    </html>
  )
}



