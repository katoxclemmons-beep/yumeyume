import { ProductCard, type Product } from "./product-card"

interface ProductSectionProps {
  id: string
  title: string
  subtitle: string
  products: Product[]
}

export function ProductSection({ id, title, subtitle, products }: ProductSectionProps) {
  return (
    <section id={id} className="py-16 md:py-24">
      <div className="mx-auto max-w-6xl px-4">
        <div className="text-center mb-12">
          <h2 className="text-2xl md:text-3xl font-bold text-foreground text-balance">{title}</h2>
          <p className="mt-3 text-sm md:text-base text-muted-foreground max-w-xl mx-auto text-pretty">
            {subtitle}
          </p>
          <div className="mt-4 mx-auto w-12 h-0.5 bg-primary rounded-full" />
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {products.map((product) => (
            <ProductCard key={product.name} product={product} />
          ))}
        </div>
      </div>
    </section>
  )
}
