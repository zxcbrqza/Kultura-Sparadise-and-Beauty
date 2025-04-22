import type { Metadata } from "next"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { ShoppingCart } from "lucide-react"

export const metadata: Metadata = {
  title: "Products - Kultura Spa and Beauty",
  description: "Explore our range of premium spa and beauty products for home use.",
}

export default function ProductsPage() {
  const skinCareProducts = [
    {
      id: 1,
      name: "Revitalizing Face Cream",
      description: "Nourishing face cream with natural ingredients to hydrate and revitalize your skin.",
      price: "65 lv.",
      image: "/placeholder.svg?height=400&width=400",
      category: "skincare",
    },
    {
      id: 2,
      name: "Brightening Serum",
      description: "Powerful serum that helps to brighten skin tone and reduce dark spots.",
      price: "85 lv.",
      image: "/placeholder.svg?height=400&width=400",
      category: "skincare",
    },
    {
      id: 3,
      name: "Gentle Exfoliating Scrub",
      description: "Gentle scrub that removes dead skin cells and leaves your skin smooth and refreshed.",
      price: "45 lv.",
      image: "/placeholder.svg?height=400&width=400",
      category: "skincare",
    },
    {
      id: 4,
      name: "Hydrating Mask",
      description: "Intensive hydrating mask that replenishes moisture and restores skin's natural glow.",
      price: "55 lv.",
      image: "/placeholder.svg?height=400&width=400",
      category: "skincare",
    },
  ]

  const bodyProducts = [
    {
      id: 5,
      name: "Relaxing Massage Oil",
      description: "Aromatherapy massage oil that helps to relax muscles and soothe the mind.",
      price: "48 lv.",
      image: "/placeholder.svg?height=400&width=400",
      category: "body",
    },
    {
      id: 6,
      name: "Body Scrub",
      description: "Exfoliating body scrub that removes dead skin cells and improves circulation.",
      price: "52 lv.",
      image: "/placeholder.svg?height=400&width=400",
      category: "body",
    },
    {
      id: 7,
      name: "Firming Body Lotion",
      description: "Nourishing body lotion that helps to firm and tone the skin.",
      price: "58 lv.",
      image: "/placeholder.svg?height=400&width=400",
      category: "body",
    },
    {
      id: 8,
      name: "Detoxifying Body Wrap",
      description: "Home treatment that helps to detoxify and rejuvenate the skin.",
      price: "75 lv.",
      image: "/placeholder.svg?height=400&width=400",
      category: "body",
    },
  ]

  const hairProducts = [
    {
      id: 9,
      name: "Nourishing Shampoo",
      description: "Gentle shampoo that cleanses and nourishes all hair types.",
      price: "38 lv.",
      image: "/placeholder.svg?height=400&width=400",
      category: "hair",
    },
    {
      id: 10,
      name: "Repairing Conditioner",
      description: "Rich conditioner that repairs damaged hair and adds shine.",
      price: "42 lv.",
      image: "/placeholder.svg?height=400&width=400",
      category: "hair",
    },
    {
      id: 11,
      name: "Intensive Hair Mask",
      description: "Deep conditioning treatment that restores hair's natural vitality.",
      price: "55 lv.",
      image: "/placeholder.svg?height=400&width=400",
      category: "hair",
    },
    {
      id: 12,
      name: "Styling Serum",
      description: "Lightweight serum that tames frizz and adds shine without weighing hair down.",
      price: "48 lv.",
      image: "/placeholder.svg?height=400&width=400",
      category: "hair",
    },
  ]

  const allProducts = [...skinCareProducts, ...bodyProducts, ...hairProducts]

  return (
    <main className="flex min-h-screen flex-col items-center pt-20">
      {/* Hero Section */}
      <div className="w-full bg-rose-50 dark:bg-gray-800 py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Our <span className="text-rose-600 dark:text-rose-400">Products</span>
          </h1>
          <p className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Explore our range of premium spa and beauty products for home use. Continue your spa experience at home with
            our carefully selected products.
          </p>
        </div>
      </div>

      {/* Products Tabs */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <Tabs defaultValue="all" className="w-full">
          <TabsList className="grid grid-cols-4 mb-8">
            <TabsTrigger value="all">All Products</TabsTrigger>
            <TabsTrigger value="skincare">Skin Care</TabsTrigger>
            <TabsTrigger value="body">Body Care</TabsTrigger>
            <TabsTrigger value="hair">Hair Care</TabsTrigger>
          </TabsList>

          <TabsContent value="all" className="space-y-8">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {allProducts.map((product) => (
                <ProductCard key={product.id} product={product} />
              ))}
            </div>
          </TabsContent>

          <TabsContent value="skincare" className="space-y-8">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {skinCareProducts.map((product) => (
                <ProductCard key={product.id} product={product} />
              ))}
            </div>
          </TabsContent>

          <TabsContent value="body" className="space-y-8">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {bodyProducts.map((product) => (
                <ProductCard key={product.id} product={product} />
              ))}
            </div>
          </TabsContent>

          <TabsContent value="hair" className="space-y-8">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {hairProducts.map((product) => (
                <ProductCard key={product.id} product={product} />
              ))}
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </main>
  )
}

function ProductCard({
  product,
}: { product: { id: number; name: string; description: string; price: string; image: string; category: string } }) {
  return (
    <Card className="overflow-hidden transition-all duration-300 hover:shadow-lg">
      <div className="relative aspect-square">
        <Image src={product.image || "/placeholder.svg"} alt={product.name} fill className="object-cover" />
      </div>
      <CardHeader>
        <CardTitle className="text-lg text-gray-900 dark:text-white">{product.name}</CardTitle>
        <CardDescription className="text-rose-600 dark:text-rose-400 font-medium">{product.price}</CardDescription>
      </CardHeader>
      <CardContent>
        <p className="text-gray-600 dark:text-gray-300 text-sm">{product.description}</p>
      </CardContent>
      <CardFooter>
        <Button className="w-full bg-rose-600 hover:bg-rose-700 text-white">
          <ShoppingCart className="mr-2 h-4 w-4" /> Add to Cart
        </Button>
      </CardFooter>
    </Card>
  )
}
