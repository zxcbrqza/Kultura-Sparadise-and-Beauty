import type { Metadata } from "next"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import Image from "next/image"

export const metadata: Metadata = {
  title: "Services - Kultura Spa and Beauty",
  description: "Explore our wide range of spa and beauty services inspired by Filipino healing traditions.",
}

export default function ServicesPage() {
  return (
    <main className="flex min-h-screen flex-col items-center pt-20">
      {/* Hero Section */}
      <div className="w-full bg-avocado-50 dark:bg-gray-800 py-16 relative overflow-hidden">
        {/* Filipino-inspired background pattern */}
        <div className="absolute inset-0 opacity-5 bg-[url('/placeholder.svg?height=200&width=200')] bg-repeat"></div>

        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <div className="flex justify-center mb-4">
            <div className="w-16 h-1 bg-bamboo-400 rounded-full"></div>
          </div>
          <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Our <span className="text-avocado-700 dark:text-avocado-400">Services</span>
          </h1>
          <p className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto text-lg">
            Discover our comprehensive range of spa and beauty services inspired by legendary Filipino healing touches
            and ancient Asian therapies.
          </p>
        </div>
      </div>

      {/* Services Tabs */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <Tabs defaultValue="massage" className="w-full">
          <TabsList className="grid grid-cols-2 md:grid-cols-5 mb-8 bg-avocado-100 dark:bg-gray-800 p-1 rounded-full">
            <TabsTrigger
              value="massage"
              className="rounded-full text-base py-3 data-[state=active]:bg-avocado-600 data-[state=active]:text-white"
            >
              Massage
            </TabsTrigger>
            <TabsTrigger
              value="hammam"
              className="rounded-full text-base py-3 data-[state=active]:bg-avocado-600 data-[state=active]:text-white"
            >
              Hammam
            </TabsTrigger>
            <TabsTrigger
              value="facial"
              className="rounded-full text-base py-3 data-[state=active]:bg-avocado-600 data-[state=active]:text-white"
            >
              Facial
            </TabsTrigger>
            <TabsTrigger
              value="beauty"
              className="rounded-full text-base py-3 data-[state=active]:bg-avocado-600 data-[state=active]:text-white"
            >
              Beauty
            </TabsTrigger>
            <TabsTrigger
              value="packages"
              className="rounded-full text-base py-3 data-[state=active]:bg-avocado-600 data-[state=active]:text-white"
            >
              Packages
            </TabsTrigger>
          </TabsList>

          {/* Massage Tab */}
          <TabsContent value="massage" className="space-y-8">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              <ServiceCard
                title="Kultura Hilot (Signature Healing)"
                description="A 3000 years old art of healing, and a part of the Filipino culture and tradition that predates the coming of the Spaniards and handed down from generation to generation."
                duration="55 min"
                price="149 lv."
                image="/placeholder.svg?height=300&width=400"
                id="hilot"
              />
              <ServiceCard
                title="Kultura Hagod (Deep Tissue)"
                description="Derived from the signature strokes of Balinese massage and Hilot, applying an intensive combination of deep tissue and acupressure."
                duration="55 min"
                price="139 lv."
                image="/placeholder.svg?height=300&width=400"
                id="hagod"
              />
              <ServiceCard
                title="Kultura Haplos (Relaxing)"
                description="Induces deep relaxation using aromatherapy oils and classical Swedish, and Hawaiian Lomi Lomi massages, beneficial for those who suffer from sleep disturbance."
                duration="55 min"
                price="115 lv."
                image="/placeholder.svg?height=300&width=400"
                id="haplos"
              />
              <ServiceCard
                title="Kultura Renaissance Touch"
                description="A sensorial blend of anti-stressing oil in harmony with western massage techniques, using hot stones that soothes the deepest aching muscles."
                duration="55 min"
                price="145 lv."
                image="/placeholder.svg?height=300&width=400"
                id="renaissance"
              />
              <ServiceCard
                title="Kultura Herbolaryo (Herbalist)"
                description="The Pinoy herbal compress is a massage combined with heat, pressure, and aromatherapy that assist to promote relaxation, reduce tension and anxiety, and enhance general mental health. It enhances one's Immune System Function."
                duration="55 min"
                price="145 lv."
                image="/placeholder.svg?height=300&width=400"
                id="herbolaryo"
              />
              <ServiceCard
                title="Kultura Dagdagay Massage"
                description="Traditional Filipino foot massage using two bamboo sticks. Dagdagay foot massage was usually done after foot banyos treatment."
                duration="55 min"
                price="149 lv."
                image="/placeholder.svg?height=300&width=400"
                id="dagdagay"
              />
            </div>
          </TabsContent>

          {/* Other tabs content would follow the same pattern */}
          <TabsContent value="hammam" className="space-y-8">
            {/* Hammam services */}
          </TabsContent>

          <TabsContent value="facial" className="space-y-8">
            {/* Facial services */}
          </TabsContent>

          <TabsContent value="beauty" className="space-y-8">
            {/* Beauty services */}
          </TabsContent>

          <TabsContent value="packages" className="space-y-8">
            {/* Package services */}
          </TabsContent>
        </Tabs>
      </div>
    </main>
  )
}

function ServiceCard({
  title,
  description,
  duration,
  price,
  image,
  id,
}: {
  title: string
  description: string
  duration: string
  price: string
  image: string
  id: string
}) {
  return (
    <Card
      id={id}
      className="overflow-hidden transition-all duration-300 hover:shadow-lg border-avocado-100 dark:border-gray-700 rounded-xl relative"
    >
      {/* Filipino-inspired decorative element */}
      <div className="absolute top-0 right-0 w-16 h-16 bg-avocado-500/80 clip-corner-bl z-10"></div>

      <div className="relative h-48 w-full">
        <Image src={image || "/placeholder.svg"} alt={title} fill className="object-cover" />
      </div>
      <CardHeader>
        <CardTitle className="text-xl text-gray-900 dark:text-white">{title}</CardTitle>
        <CardDescription className="flex items-center justify-between text-base">
          <span>{duration}</span>
          <span className="text-avocado-600 dark:text-avocado-400 font-medium">{price}</span>
        </CardDescription>
      </CardHeader>
      <CardContent>
        <p className="text-gray-600 dark:text-gray-300 text-base">{description}</p>
      </CardContent>
    </Card>
  )
}
