import type { Metadata } from "next"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import Link from "next/link"

export const metadata: Metadata = {
  title: "Help & FAQ - Kultura Spa and Beauty",
  description: "Find answers to frequently asked questions about our services, policies, and facilities.",
}

export default function HelpPage() {
  const faqs = [
    {
      question: "What should I wear to the spa?",
      answer:
        "Wear bathing suits in public areas, including the Relax Lounge, SAUNAS & Swimming Pool. For treatments, we provide appropriate attire and disposable underwear when necessary.",
    },
    {
      question: "How early should I arrive for my appointment?",
      answer:
        "We recommend you arrive 5 minutes prior to your appointment time to ensure your treatment starts on time. Late arrivals may result in a reduction of your treatment experience.",
    },
    {
      question: "What is your cancellation policy?",
      answer:
        "You can cancel your reservation without penalty up to 6 hours before the scheduled procedure. In case of cancellation or reschedule within 6 hours or no-show, we reserve the right to charge the full price of the procedure/service.",
    },
    {
      question: "Are children allowed in the spa?",
      answer:
        "Children under 15 are not allowed in KULTURA SPA AND BEAUTY without an adult companion. Use of the water area is only permitted with an adult companion.",
    },
    {
      question: "Do I need to bring a swimming cap?",
      answer:
        "Yes, a swimming cap is strictly required in our swimming pool. You can bring your own or inquire at the SPA Reception if you don't have one.",
    },
    {
      question: "Are pets allowed in the spa?",
      answer: "No, pets are not allowed at KULTURA SPA AND BEAUTY.",
    },
    {
      question: "Do you offer gift vouchers?",
      answer:
        "Yes, KULTURA SPA AND BEAUTY gift vouchers are the perfect gift for any occasion. You can buy a voucher at the spa reception.",
    },
    {
      question: "Should I avoid eating before a massage?",
      answer: "Yes, you should not go to your massage appointment with a full stomach.",
    },
    {
      question: "What should I do with my valuables?",
      answer:
        "We provide individual lockers in the changing rooms. However, it is recommended that you leave your valuables in your hotel room's safe if you are a hotel guest or in the spa reception's safe. KULTURA SPA AND BEAUTY center is not responsible for valuables left outside the safes.",
    },
    {
      question: "Do I need to shower before using the facilities?",
      answer:
        "Yes, we would like to ask you to take a shower before using the facilities in the SPA and Thermal area. For your convenience, in addition to the showers in the changing rooms, there are also showers in SAUNA area, as well as in each of the therapy rooms.",
    },
  ]

  const policies = [
    {
      title: "Arrival and Etiquette",
      description:
        "We recommend you arrive 5 minutes prior to your appointment time to ensure your treatment starts on time. Late arrivals may result in a reduction of your treatment experience.",
    },
    {
      title: "Cancellation Policy",
      description:
        "You can cancel your reservation without penalty up to 6 hours before the scheduled procedure. In case of cancellation or reschedule within 6 hours or no-show, KULTURA SPA AND BEAUTY center reserves the right to charge the guest the full price of the procedure/service.",
    },
    {
      title: "Children Policy",
      description:
        "Children under 15 are not allowed in KULTURA SPA AND BEAUTY without an adult companion. Use of the water area is only permitted with an adult companion.",
    },
    {
      title: "Dress Code",
      description:
        "Wear bathing suits in public areas, including the Relax Lounge, SAUNAS & Swimming Pool. Appropriate outfits should be worn in respective areas of the spa.",
    },
    {
      title: "Environment",
      description:
        "KULTURA SPA & BEAUTY is a place to restore your energy and relax. In order to maintain a serene and calm atmosphere, we kindly ask you to keep mobile phones on silent mode. Video calls and loud music are not permitted in The Spa premises.",
    },
  ]

  return (
    <main className="flex min-h-screen flex-col items-center pt-20">
      {/* Hero Section */}
      <div className="w-full bg-rose-50 dark:bg-gray-800 py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Help & <span className="text-rose-600 dark:text-rose-400">FAQ</span>
          </h1>
          <p className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Find answers to frequently asked questions about our services, policies, and facilities.
          </p>
        </div>
      </div>

      {/* FAQ Section */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2">
            <h2 className="text-2xl font-bold mb-6 text-gray-900 dark:text-white">Frequently Asked Questions</h2>
            <Accordion type="single" collapsible className="w-full">
              {faqs.map((faq, index) => (
                <AccordionItem key={index} value={`item-${index}`}>
                  <AccordionTrigger className="text-left">{faq.question}</AccordionTrigger>
                  <AccordionContent>{faq.answer}</AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>

          <div className="space-y-8">
            <Card>
              <CardHeader>
                <CardTitle>Need More Help?</CardTitle>
                <CardDescription>Our team is here to assist you with any questions or concerns.</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-gray-600 dark:text-gray-300">
                  If you couldn't find the answer to your question, please don't hesitate to contact us directly.
                </p>
                <Button asChild className="w-full bg-rose-600 hover:bg-rose-700 text-white">
                  <Link href="/contact">Contact Us</Link>
                </Button>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Spa Policies</CardTitle>
                <CardDescription>Important information about our policies and procedures.</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-4">
                  {policies.map((policy, index) => (
                    <li key={index}>
                      <h3 className="font-medium text-gray-900 dark:text-white">{policy.title}</h3>
                      <p className="text-sm text-gray-600 dark:text-gray-300">{policy.description}</p>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </main>
  )
}
