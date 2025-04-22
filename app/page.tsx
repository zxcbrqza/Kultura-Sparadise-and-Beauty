import Hero from "@/components/hero"
import FeaturedServices from "@/components/featured-services"
import AboutSection from "@/components/about-section"
import TestimonialsSection from "@/components/testimonials-section"
import PromotionBanner from "@/components/promotion-banner"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Kultura Spa and Beauty - Home of Relaxation",
  description: "A relaxing center inspired by legendary Filipino healing touches in Pamporovo, Bulgaria.",
}

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center">
      <Hero />
      <AboutSection />
      <FeaturedServices />
      <TestimonialsSection />
      <PromotionBanner />
    </main>
  )
}
