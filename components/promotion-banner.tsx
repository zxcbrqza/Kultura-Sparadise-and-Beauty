import { Button } from "@/components/ui/button"
import Link from "next/link"

export default function PromotionBanner() {
  return (
    <section className="py-16 bg-avocado-700 dark:bg-avocado-800 relative overflow-hidden">
      {/* Filipino-inspired background pattern */}
      <div className="absolute inset-0 opacity-10 bg-[url('/placeholder.svg?height=200&width=200')] bg-repeat"></div>

      {/* Decorative elements */}
      <div className="absolute top-0 left-0 w-32 h-32 bg-bamboo-500/20 rounded-br-full"></div>
      <div className="absolute bottom-0 right-0 w-32 h-32 bg-bamboo-500/20 rounded-tl-full"></div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
        <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">Special Offer for New Clients</h2>
        <p className="text-white/90 mb-8 max-w-2xl mx-auto text-lg">
          Enjoy 15% off your first visit when you book any of our signature treatments. Experience the ultimate
          relaxation and rejuvenation at Kultura Spa & Beauty.
        </p>
        <Button
          asChild
          size="lg"
          variant="outline"
          className="bg-transparent border-white text-white hover:bg-white/10 rounded-full px-8 py-6 text-lg"
        >
          <Link href="/contact">Book Your Appointment Now</Link>
        </Button>
      </div>
    </section>
  )
}
