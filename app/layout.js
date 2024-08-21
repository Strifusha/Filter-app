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
      <body className="bg-gray-100 text-gray-900">{children}</body>
    </html>
  )
}
