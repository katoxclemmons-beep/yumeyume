import Image from "next/image"
import { ExternalLink } from "lucide-react"

export interface Product {
  name: string
  description: string
  image: string
  price: string
  amazonUrl: string
  badge?: string
  imageContain?: boolean
  imageScale?: string
}

export function ProductCard({ product }: { product: Product }) {
  return (
    <div className="group bg-card rounded-2xl border border-border shadow-sm hover:shadow-md transition-shadow duration-300 overflow-hidden flex flex-col">
      {/* Image */}
      <div className="relative aspect-square bg-secondary overflow-hidden">
        {product.badge && (
          <span className="absolute top-3 left-3 z-10 bg-primary text-primary-foreground text-xs font-medium px-3 py-1 rounded-full">
            {product.badge}
          </span>
        )}
        <Image
          src={product.image}
          alt={product.name}
          fill
          className={`${product.imageContain ? `object-contain ${product.imageScale ?? "scale-90"} group-hover:scale-[1.15]` : "object-cover group-hover:scale-105"} transition-transform duration-500`}
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
        />
      </div>

      {/* Info */}
      <div className="flex flex-col flex-1 p-5">
        <h3 className="text-base font-bold text-foreground leading-snug">{product.name}</h3>
        <p className="mt-2 text-sm text-muted-foreground leading-relaxed flex-1">
          {product.description}
        </p>
        <p className="mt-3 text-lg font-bold text-primary">
          {product.price.replace(" 税込", "")}
          <span className="text-xs font-normal text-muted-foreground ml-1">税込</span>
        </p>
        <a
          href={product.amazonUrl}
          target="_blank"
          rel="noopener noreferrer nofollow"
          className="mt-4 inline-flex items-center justify-center gap-2 rounded-xl bg-primary text-primary-foreground px-6 py-2.5 text-sm font-medium hover:opacity-90 transition-opacity"
        >
          Amazonで見る
          <ExternalLink size={14} />
        </a>
      </div>
    </div>
  )
}
