import Image from "next/image"

export function Hero() {
  return (
    <section className="relative overflow-hidden bg-secondary">
      <div className="mx-auto max-w-6xl px-4 py-16 md:py-24 lg:py-32">
        <div className="flex flex-col-reverse md:flex-row items-center gap-10 md:gap-16">
          {/* Text content */}
          <div className="flex-1 text-center md:text-left">
            <p className="text-sm text-primary font-medium tracking-widest uppercase mb-4">
              Curly Hair Care
            </p>
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground leading-tight text-balance">
              あなたのくせ毛、
              <br />
              <span className="text-primary">もっと好きになる。</span>
            </h1>
            <p className="mt-6 text-base md:text-lg text-muted-foreground leading-relaxed max-w-lg mx-auto md:mx-0 text-pretty">
              天然カールもパーマヘアも、あなたの髪はそのままで美しい。
              自分らしいカールを楽しむためのヘアケアアイテムを厳選してお届けします。
            </p>
            <div className="mt-8 flex flex-col sm:flex-row gap-3 justify-center md:justify-start">
              <a
                href="#products"
                className="inline-flex items-center justify-center rounded-xl bg-primary text-primary-foreground px-8 py-3 text-sm font-medium shadow-sm hover:opacity-90 transition-opacity"
              >
                おすすめ商品を見る
              </a>
              <a
                href="#about"
                className="inline-flex items-center justify-center rounded-xl border border-border bg-card text-foreground px-8 py-3 text-sm font-medium hover:bg-secondary transition-colors"
              >
                このサイトについて
              </a>
            </div>
          </div>

          {/* Hero image */}
          <div className="flex-1 flex justify-center">
            <div className="relative w-64 h-64 md:w-80 md:h-80 lg:w-96 lg:h-96 rounded-full overflow-hidden shadow-xl ring-4 ring-primary/20">
              <Image
                src="/images/hero-curls.jpg"
                alt="カールヘアの女性"
                fill
                className="object-cover"
                priority
                sizes="(max-width: 768px) 256px, (max-width: 1024px) 320px, 384px"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Decorative wave */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg viewBox="0 0 1440 60" fill="none" className="w-full text-background">
          <path
            d="M0 60V30C240 0 480 0 720 30C960 60 1200 60 1440 30V60H0Z"
            fill="currentColor"
          />
        </svg>
      </div>
    </section>
  )
}
