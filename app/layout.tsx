import './globals.css';
import { VT323, Space_Mono } from "next/font/google";

const title_font = VT323({
  weight: "400",
  variable: "--font-title",
  subsets: ["latin"],
})

const body_font = Space_Mono({
  weight: "400",
  variable: "--font-body",
  subsets: ["latin"],
})

export const metadata = {
  title: 'Movie gallery',
  description: 'Created by Péter Szarvas, with Next.js',
}

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={`${title_font.variable} ${body_font.variable}`}>{children}</body>
    </html >
  )
}
