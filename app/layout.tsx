import { urbanist, trainOne } from './fonts'
import './globals.css'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Pure Catch',
  description: 'Pure Catch - Premium Fishing Gear',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`${urbanist.variable} ${trainOne.variable}`}>
      <body className={urbanist.className}>
        {children}
      </body>
    </html>
  )
} 