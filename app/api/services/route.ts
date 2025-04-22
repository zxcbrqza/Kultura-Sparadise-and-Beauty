import { NextResponse } from "next/server"

// This would typically come from a database
const services = [
  {
    id: "hilot",
    title: "Kultura Hilot (Signature Healing)",
    description:
      "A 3000 years old art of healing, and a part of the Filipino culture and tradition that predates the coming of the Spaniards and handed down from generation to generation.",
    duration: "55 min",
    price: "149 lv.",
    image: "/placeholder.svg?height=300&width=400",
    category: "massage",
  },
  {
    id: "hagod",
    title: "Kultura Hagod (Deep Tissue)",
    description:
      "Derived from the signature strokes of Balinese massage and Hilot, applying an intensive combination of deep tissue and acupressure.",
    duration: "55 min",
    price: "139 lv.",
    image: "/placeholder.svg?height=300&width=400",
    category: "massage",
  },
  // More services would be listed here
]

export async function GET() {
  // Simulate a delay to mimic database operation
  await new Promise((resolve) => setTimeout(resolve, 500))

  return NextResponse.json({ services })
}
