import './globals.css'

export const metadata = {
  title: 'Filter Page',
  description: 'A page for filtering vehicle models.',
  robots: 'index, follow',
}

export const viewport = {
  width: 'device-width',
  initialScale: 1,
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link
          rel="preload"
          href="/path-to-your-font.woff2"
          as="font"
          type="font/woff2"
          crossOrigin="anonymous"
        />
      </head>
      <body className="bg-gray-100 text-gray-900">{children}</body>
    </html>
  )
}
