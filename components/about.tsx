import { Heart, Sparkles, Star } from "lucide-react"

const features = [
  {
    icon: Heart,
    title: "くせ毛を愛そう",
    description:
      "天然のカールは個性。無理にストレートにせず、くせ毛の美しさを活かすケアを提案します。",
  },
  {
    icon: Sparkles,
    title: "厳選されたアイテム",
    description:
      "実際に使って良かった商品だけをご紹介。口コミや成分もしっかり確認して厳選しています。",
  },
  {
    icon: Star,
    title: "あなたに合ったケアを",
    description:
      "くせ毛の種類やパーマの状態に合わせて、最適なヘアケアアイテムを見つけるお手伝いをします。",
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
            「ゆめゆめちゃんねる」は、くせ毛やパーマヘアで悩む方に向けて、
            自分の髪をもっと好きになれるようなヘアケア情報をお届けするサイトです。
            ハーフの方や天然パーマの方、パーマをかけている方など、
            カールヘアを楽しみたい全ての方のために作りました。
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {features.map((feature) => (
            <div
              key={feature.title}
              className="bg-card rounded-2xl p-8 text-center border border-border shadow-sm hover:shadow-md transition-shadow duration-300"
            >
              <div className="inline-flex items-center justify-center w-14 h-14 rounded-full bg-accent mb-5">
                <feature.icon size={24} className="text-primary" />
              </div>
              <h3 className="text-lg font-bold text-foreground mb-3">{feature.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
