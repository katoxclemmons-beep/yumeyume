export function Footer() {
  return (
    <footer className="border-t border-border bg-card">
      <div className="mx-auto max-w-6xl px-4 py-10 md:py-14">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Brand */}
          <div className="text-center md:text-left">
            <span className="text-lg font-bold text-primary">ゆめゆめちゃんねる</span>
            <p className="mt-1 text-xs text-muted-foreground">
              カーリーヘアのためのヘアケアガイド
            </p>
          </div>

          {/* Nav */}
          <nav className="flex flex-wrap justify-center gap-4 text-sm text-muted-foreground" aria-label="フッターナビゲーション">
            <a href="#products" className="hover:text-primary transition-colors">
              お気に入り商品
            </a>
            <a href="#kusege" className="hover:text-primary transition-colors">
              カーリーケア
            </a>
            <a href="#styling" className="hover:text-primary transition-colors">
              スタイリング
            </a>
            <a href="#about" className="hover:text-primary transition-colors">
              このサイトについて
            </a>
          </nav>
        </div>

        {/* Amazon Affiliate Disclaimer */}
        <div className="mt-8 pt-6 border-t border-border">
          <p className="text-xs text-muted-foreground text-center leading-relaxed max-w-2xl mx-auto">
            ※ 当サイトはAmazonアソシエイト・プログラムの参加者です。
            当サイトの商品リンクを経由してAmazonでお買い物をされた場合、
            当サイトに紹介料が支払われることがあります。
            商品の価格や在庫状況は変動する場合がありますので、
            最新の情報はAmazonの商品ページでご確認ください。
          </p>
        </div>

        <div className="mt-6 text-center">
          <p className="text-xs text-muted-foreground">
            &copy; {new Date().getFullYear()} ゆめゆめちゃんねる. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}
