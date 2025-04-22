import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import Image from "next/image"
import { ArrowRight } from "lucide-react"

export default function FeaturedServices() {
  const services = [
    {
      id: 1,
      title: "Kultura Hilot",
      description:
        "A 3000 years old art of healing, part of Filipino culture and tradition that predates the coming of the Spaniards.",
      image: "/placeholder.svg?height=400&width=600",
      price: "149 lv.",
      duration: "55 min",
      link: "/services#hilot",
    },
    {
      id: 2,
      title: "Kultura Hagod",
      description:
        "Derived from the signature strokes of Balinese massage and Hilot, applying an intensive combination of deep tissue and acupressure.",
      image: "/placeholder.svg?height=400&width=600",
      price: "139 lv.",
      duration: "55 min",
      link: "/services#hagod",
    },
    {
      id: 3,
      title: "Hammam Ritual",
      description:
        "An awesome symbiosis between traditional and modern skin care with an aromatic scrub filled with nourishing oils.",
      image: "/placeholder.svg?height=400&width=600",
      price: "110 lv.",
      duration: "40 min",
      link: "/services#hammam",
    },
  ]

  return (
    <section className="py-20 bg-white dark:bg-gray-800 relative">
      {/* Filipino-inspired background pattern */}
      <div className="absolute inset-0 opacity-5 bg-[url('/placeholder.svg?height=200&width=200')] bg-repeat"></div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <div className="flex justify-center mb-4">
            <div className="w-16 h-1 bg-bamboo-400 rounded-full"></div>
          </div>
          <h2 className="text-3xl font-bold mb-4 text-gray-900 dark:text-white">
            Our Featured <span className="text-avocado-700 dark:text-avocado-400">Services</span>
          </h2>
          <p className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto text-lg">
            Experience our most popular treatments inspired by legendary Filipino healing touches and ancient Asian
            therapies.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service) => (
            <Card
              key={service.id}
              className="overflow-hidden transition-all duration-300 hover:shadow-lg border-avocado-100 dark:border-gray-700 rounded-xl"
            >
              <div className="relative h-56 w-full">
                <Image src={service.image || "/placeholder.svg"} alt={service.title} fill className="object-cover" />
                {/* Filipino-inspired decorative corner */}
                <div className="absolute top-0 right-0 w-16 h-16 bg-avocado-500/80 clip-corner-bl"></div>
              </div>
              <CardHeader>
                <CardTitle className="text-xl text-gray-900 dark:text-white">{service.title}</CardTitle>
                <CardDescription className="flex items-center gap-2 text-base">
                  <span>{service.duration}</span>
                  <span className="text-avocado-600 dark:text-avocado-400 font-medium">{service.price}</span>
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 dark:text-gray-300 text-base">{service.description}</p>
              </CardContent>
              <CardFooter>
                <Button
                  asChild
                  variant="ghost"
                  className="w-full justify-between text-avocado-700 dark:text-avocado-400 hover:bg-avocado-50 dark:hover:bg-gray-700 text-base"
                >
                  <Link href={service.link}>
                    Learn More <ArrowRight size={16} />
                  </Link>
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <Button asChild className="bg-avocado-600 hover:bg-avocado-700 text-white rounded-full px-8 py-6 text-lg">
            <Link href="/services">View All Services</Link>
          </Button>
        </div>
      </div>
    </section>
  )
}
