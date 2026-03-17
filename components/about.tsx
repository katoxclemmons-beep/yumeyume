const socials = [
  {
    name: "TikTok",
    handle: "@dream_curl_yume",
    url: "https://www.tiktok.com/@dream_curl_yume?is_from_webapp=1&sender_device=pc",
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="w-7 h-7">
        <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-2.88 2.5 2.89 2.89 0 0 1-2.89-2.89 2.89 2.89 0 0 1 2.89-2.89c.28 0 .54.04.79.1V9.01a6.33 6.33 0 0 0-.79-.05 6.34 6.34 0 0 0-6.34 6.34 6.34 6.34 0 0 0 6.34 6.34 6.34 6.34 0 0 0 6.33-6.34V8.69a8.18 8.18 0 0 0 4.78 1.52V6.75a4.85 4.85 0 0 1-1.01-.06z" />
      </svg>
    ),
    bg: "hover:border-[#69C9D0]",
    iconColor: "text-[#010101] dark:text-white",
  },
  {
    name: "Instagram",
    handle: "@yume.victoria",
    url: "https://www.instagram.com/yume.victoria/",
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="w-7 h-7">
        <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 1 0 0 12.324 6.162 6.162 0 0 0 0-12.324zM12 16a4 4 0 1 1 0-8 4 4 0 0 1 0 8zm6.406-11.845a1.44 1.44 0 1 0 0 2.881 1.44 1.44 0 0 0 0-2.881z" />
      </svg>
    ),
    bg: "hover:border-[#E1306C]",
    iconColor: "text-[#E1306C]",
  },
]

export function About() {
  return (
    <section id="about" className="py-16 md:py-24 bg-secondary">
      <div className="mx-auto max-w-6xl px-4">
        <div className="text-center mb-12">
          <h2 className="text-2xl md:text-3xl font-bold text-foreground text-balance">
            このサイトについて
          </h2>
          <div className="mt-4 mx-auto w-12 h-0.5 bg-primary rounded-full" />
        </div>

        <div className="max-w-2xl mx-auto text-center mb-14">
          <p className="text-base md:text-lg text-muted-foreground leading-relaxed text-pretty">
            「ゆめゆめちゃんねる」は、カーリーヘアをもっと好きになりたい人のための<span className="whitespace-nowrap">サイトです。</span>
            実際に使ってよかったアイテムや、カールをきれいに出せる商品を紹介しています。
            ハーフの方や天然カールの方など、カーリーヘアを楽しみたい人に向けて発信しています。
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 max-w-2xl mx-auto">
          {socials.map((s) => (
            <a
              key={s.name}
              href={s.url}
              target="_blank"
              rel="noopener noreferrer nofollow"
              className={`group bg-card rounded-2xl p-6 text-center border border-border shadow-sm hover:shadow-md transition-all duration-300 ${s.bg}`}
            >
              <div className="inline-flex items-center justify-center w-14 h-14 rounded-full bg-accent mb-4">
                <span className={s.iconColor}>{s.icon}</span>
              </div>
              <h3 className="text-lg font-bold text-foreground mb-1">{s.name}</h3>
              <p className="text-sm text-primary font-medium">{s.handle}</p>
            </a>
          ))}
        </div>
      </div>
    </section>
  )
}
