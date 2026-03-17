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
    imageScale: "scale-100",
  },
  {
    name: "Skala(スカラ) Crespo Divino カールヘア用 3 in 1 リーブインクリーム 250g",
    description:
      "カーリーヘア専用の洗い流し不要クリーム。ほつれをほぐしながらカールをきれいに出しながら、しっとりまとまる髪へ。",
    image: "/images/Skala(スカラ) Crespo Divino_.png",
    price: "¥1,980",
    amazonUrl: "https://amzn.to/4cQIXwr",
    badge: "新着",
    imageContain: true,
    imageScale: "scale-100",
  },
  {
    name: "Jigee Curls ジギーカールズ カールスタイリングクリーム 200g",
    description:
      "日本製のカール専用スタイリングクリーム。くせ毛・パーマ・天然カールヘアのうねりを活かして、まとまりのある仕上がりへ。",
    image: "/images/Jigee Curls.png",
    price: "¥---",
    amazonUrl: "https://amzn.to/475aQxb",
    badge: "国産",
    imageContain: true,
    imageScale: "scale-100",
  },
]

const kusegeProducts: Product[] = [
  {
    name: "Wavytalk スチームストレートブラシ 3in1 ヘアケアブラシ",
    description:
      "スチーム機能搭載の3in1ヘアアイロンブラシ。ダメージを抑えながら髪を栄養補給しつつ、すばやくスタイリングできる。",
    image: "/images/Wavytalk steam straigten.png",
    price: "¥---",
    amazonUrl: "https://amzn.to/4bxEtIZ",
    badge: "多機能",
    imageContain: true,
    imageScale: "scale-100",
  },
  {
    name: "折り畳み式ヘアドライヤー 大風量 速乾 2億マイナスイオン 57℃恒温",
    description:
      "美容師監修の折り畳み式ドライヤー。2億高濃度マイナスイオンで髪のダメージを抑えながら速乾。ディフューザー付きでカールを崩さず乾かせる。",
    image: "/images/Airflow Dryer.png",
    price: "¥---",
    amazonUrl: "https://amzn.to/4do89um",
    imageContain: true,
    imageScale: "scale-100",
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
    imageScale: "scale-100",
  },
]


const stylingProducts: Product[] = [
  {
    name: "Salon Line Cachos Poderosos カーリーヘア スタイリングクリーム",
    description:
      "ブラジル発サロンブランドのカール専用クリーム。強力なカール定義力でウェーブを一日中キープ。",
    image: "/images/Salon Line Cachos Poderosos.png",
    price: "¥2,200",
    amazonUrl: "https://amzn.to/4bmuVBL",
    imageContain: true,
    imageScale: "scale-100",
  },
  {
    name: "Jigee Curls ジギーカールズ カールスタイリングジェル 200g",
    description:
      "日本製のカール専用スタイリングジェル。くせ毛・パーマ・天然カールをしっかり定義して、一日中崩れないスタイルをキープ。",
    image: "/images/Jigee Styling Gel.png",
    price: "¥---",
    amazonUrl: "https://amzn.to/3Nt2A3o",
    badge: "国産",
    imageContain: true,
    imageScale: "scale-100",
  },
  {
    name: "SheaMoisture Coconut & Hibiscus Curl Hold Smoothie 340g",
    description:
      "ココナッツとハイビスカス配合のカールスムージー。カールをきれいに出しながら自然なツヤと柔軟性を一日キープ。",
    image: "/images/SheaMoisture.png",
    price: "¥---",
    amazonUrl: "https://amzn.to/3PaeKPa",
    imageContain: true,
    imageScale: "scale-100",
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
          subtitle="実際に使ってよかったアイテムを厳選しました"
          products={featuredProducts}
        />

        {/* Divider */}
        <div className="mx-auto max-w-6xl px-4">
          <hr className="border-border" />
        </div>

        {/* Kusege Products */}
        <ProductSection
          id="kusege"
          title="スタイリングツール"
          subtitle="整える・つくる・扱いやすくするためのアイテム"
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
