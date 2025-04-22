import { NextResponse } from "next/server"

// This would typically come from a database
const products = [
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
  // More products would be listed here
]

export async function GET() {
  // Simulate a delay to mimic database operation
  await new Promise((resolve) => setTimeout(resolve, 500))

  return NextResponse.json({ products })
}
