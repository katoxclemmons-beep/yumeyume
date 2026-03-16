import type { Metadata, Viewport } from 'next'
import { Zen_Maru_Gothic, Noto_Sans_JP } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import './globals.css'

const zenMaruGothic = Zen_Maru_Gothic({
  subsets: ['latin'],
  weight: ['300', '400', '500', '700'],
  variable: '--font-zen-maru',
})

const notoSansJP = Noto_Sans_JP({
  subsets: ['latin'],
  weight: ['300', '400', '500', '700'],
  variable: '--font-noto-sans-jp',
})

export const metadata: Metadata = {
  title: 'ゆめゆめちゃんねる｜くせ毛・カールヘアのためのヘアケアガイド',
  description:
    '天然パーマやパーマヘアを美しくキープするためのおすすめヘアケア商品を厳選してご紹介。くせ毛の魅力を最大限に引き出すアイテムが見つかります。',
  keywords: 'くせ毛,カールヘア,パーマ,ヘアケア,おすすめ,商品,天然パーマ,スタイリング',
  icons: {
    icon: [
      {
        url: '/icon-light-32x32.png',
        media: '(prefers-color-scheme: light)',
      },
      {
        url: '/icon-dark-32x32.png',
        media: '(prefers-color-scheme: dark)',
      },
      {
        url: '/icon.svg',
        type: 'image/svg+xml',
      },
    ],
    apple: '/apple-icon.png',
  },
}

export const viewport: Viewport = {
  themeColor: '#fefcfb',
  width: 'device-width',
  initialScale: 1,
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="ja">
      <body
        className={`${zenMaruGothic.variable} ${notoSansJP.variable} font-sans antialiased`}
      >
        {children}
        <Analytics />
      </body>
    </html>
  )
}
