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
    amazonUrl: "https://www.amazon.co.jp/dp/B08CNCSKN9",
    imageContain: true,
    imageScale: "scale-105",
  },
]

const kusegeProducts: Product[] = [
  {
    name: "ボタニスト ボタニカルヘアオイル モイスト",
    description:
      "植物由来のヘアオイルが、カーリーヘアのパサつきを抑えてツヤのある髪に。軽い付け心地でベタつかない。",
    image: "/images/product-oil.jpg",
    price: "¥1,870",
    amazonUrl: "https://www.amazon.co.jp/dp/example4?tag=your-affiliate-tag",
    badge: "ベストセラー",
  },
  {
    name: "アミノメイソン ディープモイスト シャンプー",
    description:
      "スーパーアミノ酸とボタニカル成分でダメージを補修。カーリーヘアのまとまりやすさを実感できる。",
    image: "/images/product-shampoo.jpg",
    price: "¥1,540",
    amazonUrl: "https://www.amazon.co.jp/dp/example5?tag=your-affiliate-tag",
  },
  {
    name: "モロッカンオイル トリートメント",
    description:
      "世界中で愛されるアルガンオイルトリートメント。カーリーヘアを柔らかくしながら輝くようなツヤを与えます。",
    image: "/images/product-conditioner.jpg",
    price: "¥4,730",
    amazonUrl: "https://www.amazon.co.jp/dp/example6?tag=your-affiliate-tag",
    badge: "プレミアム",
  },
]


const stylingProducts: Product[] = [
  {
    name: "リーゼ ウェーブジュレ",
    description:
      "カールをしっかりキープするジュレタイプ。パリパリせず、自然な動きのあるスタイルが一日続きます。",
    image: "/images/product-mousse.jpg",
    price: "¥658",
    amazonUrl: "https://www.amazon.co.jp/dp/example10?tag=your-affiliate-tag",
    badge: "コスパ◎",
  },
  {
    name: "プロダクト ヘアワックス",
    description:
      "自然由来原料だけで作られたヘアワックス。カールの束感を出しながら、ウェットな質感も楽しめる万能アイテム。",
    image: "/images/product-mousse.jpg",
    price: "¥2,178",
    amazonUrl: "https://www.amazon.co.jp/dp/example12?tag=your-affiliate-tag",
    badge: "定番人気",
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
          title="おすすめ商品"
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
          title="カーリーヘア向けおすすめ商品"
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
