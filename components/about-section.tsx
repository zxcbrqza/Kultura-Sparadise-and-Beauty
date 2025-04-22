import { Button } from "@/components/ui/button"
import Link from "next/link"
import Image from "next/image"

export default function AboutSection() {
  return (
    <section className="py-20 bg-avocado-50 dark:bg-gray-900 relative overflow-hidden">
      {/* Filipino-inspired background pattern */}
      <div className="absolute inset-0 opacity-5 bg-[url('/placeholder.svg?height=200&width=200')] bg-repeat"></div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="order-2 lg:order-1">
            <div className="flex items-center mb-4">
              <div className="w-12 h-1 bg-bamboo-400 rounded-full mr-4"></div>
              <h2 className="text-3xl font-bold text-gray-900 dark:text-white">
                About <span className="text-avocado-700 dark:text-avocado-400">Kultura Spa & Beauty</span>
              </h2>
            </div>
            <p className="text-gray-700 dark:text-gray-300 mb-6 leading-relaxed text-lg">
              Kultura Spa & Beauty is about harnessing inspiration from the ancient way of healing through waters,
              unified with nature's renowned herbal and elemental therapies found and developed in Asia. With an
              ambiance that transports you to the beautiful Philippines.
            </p>
            <p className="text-gray-700 dark:text-gray-300 mb-8 leading-relaxed text-lg">
              Our spa features an experiential and remarkable spa journey of rituals, healing, and well-being. We are
              dedicated to providing a serene and calm atmosphere where you can restore your energy and relax.
            </p>
            <Button asChild className="bg-avocado-600 hover:bg-avocado-700 text-white rounded-full px-8 py-6 text-lg">
              <Link href="/about">Learn More About Us</Link>
            </Button>
          </div>
          <div className="order-1 lg:order-2 relative">
            <div className="relative h-[500px] rounded-2xl overflow-hidden shadow-xl">
              <Image src="/placeholder.svg?height=1000&width=800" alt="Spa interior" fill className="object-cover" />
            </div>
            {/* Filipino-inspired decorative element */}
            <div className="absolute -bottom-6 -left-6 w-24 h-24 rounded-full bg-bamboo-100 border-8 border-white dark:border-gray-900 z-10"></div>
            <div className="absolute -top-6 -right-6 w-24 h-24 rounded-full bg-avocado-100 border-8 border-white dark:border-gray-900 z-10"></div>
          </div>
        </div>
      </div>
    </section>
  )
}
