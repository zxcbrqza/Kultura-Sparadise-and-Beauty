import { Card, CardContent } from "@/components/ui/card"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Star } from "lucide-react"

export default function TestimonialsSection() {
  const testimonials = [
    {
      id: 1,
      name: "Maria Petrova",
      avatar: "/placeholder.svg?height=100&width=100",
      rating: 5,
      text: "The Kultura Hilot massage was an incredible experience. The therapist was skilled and attentive, and I left feeling completely rejuvenated. Will definitely return!",
      initials: "MP",
    },
    {
      id: 2,
      name: "Stefan Ivanov",
      avatar: "/placeholder.svg?height=100&width=100",
      rating: 5,
      text: "I tried the Hammam Ritual and it was amazing. The ambiance, the service, everything was perfect. My skin has never felt so soft and clean.",
      initials: "SI",
    },
    {
      id: 3,
      name: "Elena Dimitrova",
      avatar: "/placeholder.svg?height=100&width=100",
      rating: 4,
      text: "The spa facilities are top-notch and the staff is very professional. I enjoyed my facial treatment and will be back to try more services.",
      initials: "ED",
    },
  ]

  return (
    <section className="py-20 bg-avocado-50 dark:bg-gray-900 relative overflow-hidden">
      {/* Filipino-inspired background pattern */}
      <div className="absolute inset-0 opacity-5 bg-[url('/placeholder.svg?height=200&width=200')] bg-repeat"></div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <div className="flex justify-center mb-4">
            <div className="w-16 h-1 bg-bamboo-400 rounded-full"></div>
          </div>
          <h2 className="text-3xl font-bold mb-4 text-gray-900 dark:text-white">
            What Our <span className="text-avocado-700 dark:text-avocado-400">Clients Say</span>
          </h2>
          <p className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto text-lg">
            Hear from our satisfied clients about their experiences at Kultura Spa & Beauty.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial) => (
            <Card
              key={testimonial.id}
              className="bg-white dark:bg-gray-800 shadow-sm hover:shadow-md transition-shadow duration-300 border-avocado-100 dark:border-gray-700 rounded-xl relative overflow-hidden"
            >
              {/* Filipino-inspired decorative element */}
              <div className="absolute top-0 left-0 w-16 h-16 bg-bamboo-100 dark:bg-bamboo-900/20 rounded-br-3xl"></div>

              <CardContent className="p-8 relative">
                <div className="flex items-center mb-6">
                  <Avatar className="h-12 w-12 mr-4 border-2 border-avocado-200">
                    <AvatarImage src={testimonial.avatar || "/placeholder.svg"} alt={testimonial.name} />
                    <AvatarFallback className="bg-avocado-100 text-avocado-700">{testimonial.initials}</AvatarFallback>
                  </Avatar>
                  <div>
                    <h3 className="font-medium text-gray-900 dark:text-white text-lg">{testimonial.name}</h3>
                    <div className="flex">
                      {[...Array(5)].map((_, i) => (
                        <Star
                          key={i}
                          size={16}
                          className={
                            i < testimonial.rating
                              ? "fill-bamboo-400 text-bamboo-400"
                              : "text-gray-300 dark:text-gray-600"
                          }
                        />
                      ))}
                    </div>
                  </div>
                </div>
                <p className="text-gray-600 dark:text-gray-300 italic text-base">"{testimonial.text}"</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
