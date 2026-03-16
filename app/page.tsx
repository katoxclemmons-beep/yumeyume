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
    amazonUrl: "https://amzn.asia/d/0dthnvxh",
    badge: "人気No.1",
    imageContain: true,
  },
  {
    name: "ジョンマスターオーガニック C&Nコンディショナー",
    description:
      "シトラス&ネロリの香りが心地よい、天然由来成分のコンディショナー。カールの弾力を保ちつつ、指通りなめらかに。",
    image: "/images/product-conditioner.jpg",
    price: "¥3,740",
    amazonUrl: "https://www.amazon.co.jp/dp/example2?tag=your-affiliate-tag",
    badge: "オーガニック",
  },
  {
    name: "ロレアル パリ エルセーヴ カールケア クリーム",
    description:
      "カールを長時間キープしながら、うるおいを閉じ込めるスタイリングクリーム。べたつかず自然な仕上がり。",
    image: "/images/product-cream.jpg",
    price: "¥1,078",
    amazonUrl: "https://www.amazon.co.jp/dp/example3?tag=your-affiliate-tag",
  },
]

const kusegeProducts: Product[] = [
  {
    name: "ボタニスト ボタニカルヘアオイル モイスト",
    description:
      "植物由来のヘアオイルが、くせ毛のパサつきを抑えてツヤのある髪に。軽い付け心地でベタつかない。",
    image: "/images/product-oil.jpg",
    price: "¥1,870",
    amazonUrl: "https://www.amazon.co.jp/dp/example4?tag=your-affiliate-tag",
    badge: "ベストセラー",
  },
  {
    name: "アミノメイソン ディープモイスト シャンプー",
    description:
      "スーパーアミノ酸とボタニカル成分でダメージを補修。くせ毛のまとまりやすさを実感できる。",
    image: "/images/product-shampoo.jpg",
    price: "¥1,540",
    amazonUrl: "https://www.amazon.co.jp/dp/example5?tag=your-affiliate-tag",
  },
  {
    name: "モロッカンオイル トリートメント",
    description:
      "世界中で愛されるアルガンオイルトリートメント。くせ毛を柔らかくしながら輝くようなツヤを与えます。",
    image: "/images/product-conditioner.jpg",
    price: "¥4,730",
    amazonUrl: "https://www.amazon.co.jp/dp/example6?tag=your-affiliate-tag",
    badge: "プレミアム",
  },
]

const permProducts: Product[] = [
  {
    name: "ナプラ N. カールエンハンサー",
    description:
      "パーマの形状を記憶させる独自処方。ウェーブを美しくキープしながら、しっとり感も持続。",
    image: "/images/product-cream.jpg",
    price: "¥2,200",
    amazonUrl: "https://www.amazon.co.jp/dp/example7?tag=your-affiliate-tag",
    badge: "サロン品質",
  },
  {
    name: "ミルボン ジェミールフラン メルティバター",
    description:
      "体温でとろけるバター状トリートメント。パーマヘアの乾燥ダメージを集中補修し、弾力のあるカールに。",
    image: "/images/product-oil.jpg",
    price: "¥2,640",
    amazonUrl: "https://www.amazon.co.jp/dp/example8?tag=your-affiliate-tag",
  },
  {
    name: "ルベル モイ クリーム グローリーゼア",
    description:
      "自然由来成分100%のスタイリングクリーム。パーマのカールを柔らかく整え、ナチュラルな束感を演出。",
    image: "/images/product-mist.jpg",
    price: "¥2,860",
    amazonUrl: "https://www.amazon.co.jp/dp/example9?tag=your-affiliate-tag",
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
    name: "ジョバンニ フリッズビーゴーン セラム",
    description:
      "フリッズ（広がり）を抑えるセラム。湿気の多い日でもまとまりのあるカールスタイルをキープ。",
    image: "/images/product-mist.jpg",
    price: "¥1,980",
    amazonUrl: "https://www.amazon.co.jp/dp/example11?tag=your-affiliate-tag",
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
          subtitle="くせ毛・カールヘアのケアに本当に使えるアイテムを厳選しました"
          products={featuredProducts}
        />

        {/* Divider */}
        <div className="mx-auto max-w-6xl px-4">
          <hr className="border-border" />
        </div>

        {/* Kusege Products */}
        <ProductSection
          id="kusege"
          title="くせ毛向けおすすめ商品"
          subtitle="天然のうねりやくせを活かして、まとまりのある美髪へ"
          products={kusegeProducts}
        />

        {/* Perm Products */}
        <div className="bg-secondary">
          <ProductSection
            id="perm"
            title="パーマヘア用ケア商品"
            subtitle="パーマの持ちを良くし、美しいウェーブを長くキープ"
            products={permProducts}
          />
        </div>

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
