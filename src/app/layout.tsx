import type { Metadata } from 'next'
import '../styles/globals.css'
import { I18nProvider } from '@/lib/i18n/context'

export const metadata: Metadata = {
  title: 'Ai Tech — General Supplies & Technical Services',
  description:
    'Ai Tech provides general supplies, electrical equipment maintenance, and mobile tower maintenance services across Egypt.',
  icons: {
    icon: '/ico.jpeg',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html suppressHydrationWarning>
      <body>
        <I18nProvider>{children}</I18nProvider>
      </body>
    </html>
  )
}
