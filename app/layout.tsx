import '@/styles/global.css'
import type { Metadata } from 'next'
import { Inter, Lexend, IBM_Plex_Mono } from 'next/font/google'
import { cn } from '@/lib/utils'
import { TailwindIndicator } from '@/components/tailwind-indicator'

// const inter = Inter({ subsets: ['latin'] })
const lexend = Lexend({ subsets: ['latin'], variable: '--font-sans' })
const mono = IBM_Plex_Mono({ subsets: ['latin'], variable: '--font-mono', weight: ['300', '400', '500', '600'] })

export const metadata: Metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={cn(lexend.variable, mono.variable, ' font-sans antialiased')}>
        {children}
        <TailwindIndicator />
      </body>
    </html>
  )
}
