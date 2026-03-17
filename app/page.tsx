import { Header } from "@/components/header"
import { Hero } from "@/components/hero"
import { ProductSection } from "@/components/product-section"
import { About } from "@/components/about"
import { Footer } from "@/components/footer"
import type { Product } from "@/components/product-card"

const featuredProducts: Product[] = [
  {
    name: "Skala(スカラ) Mais Cachos マイスカショス カールヘア用 3 in 1 リーブインクリーム 250g",
    description:
      "洗い流し不要の3in1リーブインクリーム。カールの定義・保湿・ほつれ解消を一本でケア。ブラジル発のカールヘア専門ブランド。",
    image: "/images/Product Skala.png",
    price: "¥1,980",
    amazonUrl: "https://amzn.to/471Pi4s",
    badge: "人気No.1",
    imageContain: true,
    imageScale: "scale-110",
  },
  {
    name: "Skala(スカラ) Crespo Divino カールヘア用 3 in 1 リーブインクリーム 250g",
    description:
      "カーリーヘア専用の洗い流し不要クリーム。ほつれをほぐしながらカールを定義し、しっとりまとまる髪へ。",
    image: "/images/Skala(スカラ) Crespo Divino_.png",
    price: "¥1,980",
    amazonUrl: "https://amzn.to/4cQIXwr",
    badge: "新着",
    imageContain: true,
    imageScale: "scale-110",
  },
  {
    name: "Salon Line Cachos Poderosos カーリーヘア スタイリングクリーム",
    description:
      "ブラジル発サロンブランドのカール専用クリーム。強力なカール定義力でウェーブを一日中キープ。",
    image: "/images/Salon Line Cachos Poderosos.png",
    price: "¥2,200",
    amazonUrl: "https://amzn.to/4bmuVBL",
    imageContain: true,
    imageScale: "scale-105",
  },
]

const kusegeProducts: Product[] = [
  {
    name: "Jigee Curls ジギーカールズ カールスタイリングクリーム 200g",
    description:
      "日本製のカール専用スタイリングクリーム。くせ毛・パーマ・天然カールヘアのうねりを活かして、まとまりのある仕上がりへ。",
    image: "/images/Jigee Curls.png",
    price: "¥---",
    amazonUrl: "https://amzn.to/475aQxb",
    badge: "国産",
    imageContain: true,
  },
  {
    name: "SheaMoisture Coconut & Hibiscus Curl Hold Smoothie 340g",
    description:
      "ココナッツとハイビスカス配合のカールスムージー。カールを定義しながら自然なツヤと柔軟性を一日キープ。",
    image: "/images/SheaMoisture.png",
    price: "¥---",
    amazonUrl: "https://amzn.to/3PaeKPa",
    imageContain: true,
  },
  {
    name: "Denman Curly Hair Brush D14 5列 カールブラシ",
    description:
      "カーリーヘアのほつれをほぐし、カールを整えるための定番ブラシ。シェイピング・デタングリングを一本でこなす。",
    image: "/images/Denman Curly Brush.png",
    price: "¥---",
    amazonUrl: "https://amzn.to/4rvbNWL",
    badge: "定番",
    imageContain: true,
  },
]


const stylingProducts: Product[] = [
  {
    name: "Wavytalk スチームストレートブラシ 3in1 ヘアケアブラシ",
    description:
      "スチーム機能搭載の3in1ヘアアイロンブラシ。ダメージを抑えながら髪を栄養補給しつつ、すばやくスタイリングできる。",
    image: "/images/Wavytalk steam straigten.png",
    price: "¥---",
    amazonUrl: "https://amzn.to/4bxEtIZ",
    badge: "多機能",
    imageContain: true,
  },
]

export default function Home() {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <Hero />

        {/* Featured Products */}
        <ProductSection
          id="products"
          title="お気に入り商品"
          subtitle="カーリーヘアのケアに本当に使えるアイテムを厳選しました"
          products={featuredProducts}
        />

        {/* Divider */}
        <div className="mx-auto max-w-6xl px-4">
          <hr className="border-border" />
        </div>

        {/* Kusege Products */}
        <ProductSection
          id="kusege"
          title="カーリーヘア向けお気に入り商品"
          subtitle="天然のうねりやくせを活かして、まとまりのある美髪へ"
          products={kusegeProducts}
        />

        {/* Styling Products */}
        <ProductSection
          id="styling"
          title="カールキープスタイリング剤"
          subtitle="一日中崩れない、理想のカールスタイルを叶える"
          products={stylingProducts}
        />

        {/* About */}
        <About />
      </main>
      <Footer />
    </div>
  )
}
