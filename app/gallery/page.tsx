import type { Metadata } from "next"
import Image from "next/image"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

export const metadata: Metadata = {
  title: "Gallery - Kultura Spa and Beauty",
  description: "Explore our spa facilities, treatment rooms, and relaxation areas through our photo gallery.",
}

export default function GalleryPage() {
  // Gallery images would typically come from a database or CMS
  const facilityImages = Array.from({ length: 6 }, (_, i) => ({
    id: `facility-${i + 1}`,
    src: `/placeholder.svg?height=600&width=800`,
    alt: `Spa facility image ${i + 1}`,
    category: "facility",
  }))

  const treatmentImages = Array.from({ length: 6 }, (_, i) => ({
    id: `treatment-${i + 1}`,
    src: `/placeholder.svg?height=600&width=800`,
    alt: `Treatment image ${i + 1}`,
    category: "treatment",
  }))

  const productImages = Array.from({ length: 6 }, (_, i) => ({
    id: `product-${i + 1}`,
    src: `/placeholder.svg?height=600&width=800`,
    alt: `Product image ${i + 1}`,
    category: "product",
  }))

  const allImages = [...facilityImages, ...treatmentImages, ...productImages]

  return (
    <main className="flex min-h-screen flex-col items-center pt-20">
      {/* Hero Section */}
      <div className="w-full bg-rose-50 dark:bg-gray-800 py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Our <span className="text-rose-600 dark:text-rose-400">Gallery</span>
          </h1>
          <p className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Take a visual tour of our spa facilities, treatment rooms, and relaxation areas.
          </p>
        </div>
      </div>

      {/* Gallery Tabs */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <Tabs defaultValue="all" className="w-full">
          <TabsList className="grid grid-cols-4 mb-8">
            <TabsTrigger value="all">All</TabsTrigger>
            <TabsTrigger value="facility">Facilities</TabsTrigger>
            <TabsTrigger value="treatment">Treatments</TabsTrigger>
            <TabsTrigger value="product">Products</TabsTrigger>
          </TabsList>

          <TabsContent value="all" className="space-y-8">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {allImages.map((image) => (
                <GalleryImage key={image.id} image={image} />
              ))}
            </div>
          </TabsContent>

          <TabsContent value="facility" className="space-y-8">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {facilityImages.map((image) => (
                <GalleryImage key={image.id} image={image} />
              ))}
            </div>
          </TabsContent>

          <TabsContent value="treatment" className="space-y-8">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {treatmentImages.map((image) => (
                <GalleryImage key={image.id} image={image} />
              ))}
            </div>
          </TabsContent>

          <TabsContent value="product" className="space-y-8">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {productImages.map((image) => (
                <GalleryImage key={image.id} image={image} />
              ))}
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </main>
  )
}

function GalleryImage({ image }: { image: { id: string; src: string; alt: string; category: string } }) {
  return (
    <div className="relative aspect-square overflow-hidden rounded-lg group">
      <Image
        src={image.src || "/placeholder.svg"}
        alt={image.alt}
        fill
        className="object-cover transition-transform duration-300 group-hover:scale-110"
      />
      <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
        <span className="text-white text-lg font-medium capitalize">{image.category}</span>
      </div>
    </div>
  )
}
