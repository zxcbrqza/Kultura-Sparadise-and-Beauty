import Link from "next/link"
import Image from "next/image"
import { Facebook, Instagram, Twitter, Mail, Phone, MapPin, Clock } from "lucide-react"

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300 relative overflow-hidden">
      {/* Filipino-inspired background pattern */}
      <div className="absolute inset-0 opacity-5 bg-[url('/placeholder.svg?height=200&width=200')] bg-repeat"></div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* About */}
          <div>
            <div className="flex items-center space-x-3 mb-6">
              {/* Logo placeholder - replace with your actual logo */}
              <div className="relative h-12 w-12 overflow-hidden rounded-full border-2 border-avocado-600">
                <Image src="/placeholder.svg?height=48&width=48" alt="Kultura Spa Logo" fill className="object-cover" />
              </div>
              <div className="flex flex-col">
                <span className="text-2xl font-bold text-avocado-400">Kultura</span>
                <span className="text-sm font-medium text-gray-400">Spa & Beauty</span>
              </div>
            </div>
            <p className="mb-6 text-base">
              A relaxing center inspired by legendary Filipino healing touches, offering a remarkable spa journey of
              rituals, healing, and well-being.
            </p>
            <div className="flex space-x-4">
              <Link href="https://facebook.com" className="text-gray-400 hover:text-avocado-400 transition-colors">
                <Facebook size={20} />
                <span className="sr-only">Facebook</span>
              </Link>
              <Link href="https://instagram.com" className="text-gray-400 hover:text-avocado-400 transition-colors">
                <Instagram size={20} />
                <span className="sr-only">Instagram</span>
              </Link>
              <Link href="https://twitter.com" className="text-gray-400 hover:text-avocado-400 transition-colors">
                <Twitter size={20} />
                <span className="sr-only">Twitter</span>
              </Link>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-xl font-bold text-white mb-6">Quick Links</h3>
            <ul className="space-y-3">
              <li>
                <Link href="/" className="hover:text-avocado-400 transition-colors text-base">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/services" className="hover:text-avocado-400 transition-colors text-base">
                  Services
                </Link>
              </li>
              <li>
                <Link href="/gallery" className="hover:text-avocado-400 transition-colors text-base">
                  Gallery
                </Link>
              </li>
              <li>
                <Link href="/products" className="hover:text-avocado-400 transition-colors text-base">
                  Products
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-avocado-400 transition-colors text-base">
                  Contact
                </Link>
              </li>
              <li>
                <Link href="/help" className="hover:text-avocado-400 transition-colors text-base">
                  Help
                </Link>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-xl font-bold text-white mb-6">Our Services</h3>
            <ul className="space-y-3">
              <li>
                <Link href="/services#massage" className="hover:text-avocado-400 transition-colors text-base">
                  Massage Therapy
                </Link>
              </li>
              <li>
                <Link href="/services#facial" className="hover:text-avocado-400 transition-colors text-base">
                  Facial Treatments
                </Link>
              </li>
              <li>
                <Link href="/services#hammam" className="hover:text-avocado-400 transition-colors text-base">
                  Hammam Rituals
                </Link>
              </li>
              <li>
                <Link href="/services#beauty" className="hover:text-avocado-400 transition-colors text-base">
                  Beauty Services
                </Link>
              </li>
              <li>
                <Link href="/services#packages" className="hover:text-avocado-400 transition-colors text-base">
                  Spa Packages
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-xl font-bold text-white mb-6">Contact Us</h3>
            <ul className="space-y-4">
              <li className="flex items-start">
                <MapPin size={20} className="mr-3 text-avocado-400 flex-shrink-0 mt-1" />
                <span className="text-base">Pamporovo, Bulgaria</span>
              </li>
              <li className="flex items-center">
                <Phone size={20} className="mr-3 text-avocado-400 flex-shrink-0" />
                <span className="text-base">+359 899 790 819</span>
              </li>
              <li className="flex items-center">
                <Mail size={20} className="mr-3 text-avocado-400 flex-shrink-0" />
                <span className="text-base">info@kulturaspa.com</span>
              </li>
              <li className="flex items-start">
                <Clock size={20} className="mr-3 text-avocado-400 flex-shrink-0 mt-1" />
                <span className="text-base">
                  10:00 AM - 8:30 PM
                  <br />
                  Sauna: 4:00 PM - 8:30 PM
                </span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-12 pt-8 text-center text-sm">
          <p>&copy; {new Date().getFullYear()} Kultura Spa and Beauty. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}
