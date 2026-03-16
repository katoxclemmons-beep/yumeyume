"use client"

import { useState } from "react"
import { Menu, X } from "lucide-react"

const navLinks = [
  { href: "#products", label: "お気に入り商品" },
  { href: "#kusege", label: "カーリーケア" },
  { href: "#styling", label: "スタイリング" },
  { href: "#about", label: "このサイトについて" },
]

export function Header() {
  const [mobileOpen, setMobileOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 bg-background/80 backdrop-blur-md border-b border-border">
      <div className="mx-auto max-w-6xl flex items-center justify-between px-4 py-3 md:py-4">
        <a href="#" className="flex items-center gap-2">
          <span className="text-xl md:text-2xl font-bold text-primary tracking-tight">
            ゆめゆめちゃんねる
          </span>
        </a>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-6" aria-label="メインナビゲーション">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm text-muted-foreground hover:text-primary transition-colors duration-200"
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* Mobile menu button */}
        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className="md:hidden p-2 text-foreground"
          aria-label={mobileOpen ? "メニューを閉じる" : "メニューを開く"}
          aria-expanded={mobileOpen}
        >
          {mobileOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile nav */}
      {mobileOpen && (
        <nav
          className="md:hidden border-t border-border bg-background px-4 pb-4"
          aria-label="モバイルナビゲーション"
        >
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setMobileOpen(false)}
              className="block py-3 text-sm text-foreground hover:text-primary transition-colors border-b border-border/50 last:border-0"
            >
              {link.label}
            </a>
          ))}
        </nav>
      )}
    </header>
  )
}
