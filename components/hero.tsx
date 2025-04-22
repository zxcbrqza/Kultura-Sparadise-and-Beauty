import { Button } from "@/components/ui/button"
import Link from "next/link"
import Image from "next/image"

export default function Hero() {
  return (
    <div className="relative w-full min-h-screen flex items-center justify-center overflow-hidden pt-20">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/placeholder.svg?height=1080&width=1920"
          alt="Spa background"
          fill
          className="object-cover brightness-[0.9]"
          priority
        />
        {/* Filipino-inspired overlay pattern */}
        <div className="absolute inset-0 bg-avocado-900/20 mix-blend-multiply"></div>
        <div className="absolute inset-0 opacity-10 bg-[url('/placeholder.svg?height=200&width=200')] bg-repeat"></div>
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center py-20">
        <div className="max-w-3xl mx-auto backdrop-blur-sm bg-white/30 dark:bg-gray-900/30 p-8 rounded-2xl border border-avocado-200/30 dark:border-avocado-900/30">
          <div className="mb-6 flex justify-center">
            {/* Decorative Filipino-inspired divider */}
            <div className="w-24 h-1 bg-bamboo-400 rounded-full"></div>
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 dark:text-white mb-6">
            Welcome to <span className="text-avocado-700 dark:text-avocado-400">Kultura</span> Spa & Beauty
          </h1>
          <p className="text-lg md:text-xl text-gray-800 dark:text-gray-200 mb-8">
            A relaxing center inspired by legendary Filipino healing touches. Experience a remarkable spa journey of
            rituals, healing, and well-being.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Button
              asChild
              size="lg"
              className="bg-avocado-600 hover:bg-avocado-700 text-white text-lg rounded-full px-8 py-6"
            >
              <Link href="/services">Explore Services</Link>
            </Button>
            <Button
              asChild
              size="lg"
              variant="outline"
              className="border-avocado-600 text-avocado-700 hover:bg-avocado-50 dark:border-avocado-400 dark:text-avocado-400 dark:hover:bg-gray-800 rounded-full px-8 py-6"
            >
              <Link href="/contact">Book Appointment</Link>
            </Button>
          </div>
        </div>
      </div>
    </div>
  )
}
