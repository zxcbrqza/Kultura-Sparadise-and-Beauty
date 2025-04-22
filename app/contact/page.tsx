"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Calendar } from "@/components/ui/calendar"
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover"
import { format } from "date-fns"
import { CalendarIcon, MapPin, Phone, Mail, Clock } from "lucide-react"
import { cn } from "@/lib/utils"

export default function ContactPage() {
  const [date, setDate] = useState<Date | undefined>(undefined)

  return (
    <main className="flex min-h-screen flex-col items-center pt-20">
      {/* Hero Section */}
      <div className="w-full bg-avocado-50 dark:bg-gray-800 py-16 relative overflow-hidden">
        {/* Filipino-inspired background pattern */}
        <div className="absolute inset-0 opacity-5 bg-[url('/placeholder.svg?height=200&width=200')] bg-repeat"></div>

        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <div className="flex justify-center mb-4">
            <div className="w-16 h-1 bg-bamboo-400 rounded-full"></div>
          </div>
          <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Contact <span className="text-avocado-700 dark:text-avocado-400">Us</span>
          </h1>
          <p className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto text-lg">
            Get in touch with us to book an appointment, ask questions, or provide feedback. We're here to help you.
          </p>
        </div>
      </div>

      {/* Contact Section */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <div>
            <Card className="border-avocado-100 dark:border-gray-700 rounded-xl overflow-hidden">
              <CardHeader className="bg-avocado-50 dark:bg-gray-800 border-b border-avocado-100 dark:border-gray-700">
                <CardTitle className="text-2xl text-avocado-800 dark:text-avocado-400">Book an Appointment</CardTitle>
                <CardDescription className="text-base">
                  Fill out the form below to book your spa experience.
                </CardDescription>
              </CardHeader>
              <CardContent className="p-8">
                <form className="space-y-6">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <Label htmlFor="first-name" className="text-base">
                        First Name
                      </Label>
                      <Input
                        id="first-name"
                        placeholder="Enter your first name"
                        className="rounded-lg text-base py-6"
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="last-name" className="text-base">
                        Last Name
                      </Label>
                      <Input id="last-name" placeholder="Enter your last name" className="rounded-lg text-base py-6" />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="email" className="text-base">
                      Email
                    </Label>
                    <Input
                      id="email"
                      type="email"
                      placeholder="Enter your email"
                      className="rounded-lg text-base py-6"
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="phone" className="text-base">
                      Phone
                    </Label>
                    <Input id="phone" placeholder="Enter your phone number" className="rounded-lg text-base py-6" />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="service" className="text-base">
                      Service
                    </Label>
                    <Select>
                      <SelectTrigger id="service" className="rounded-lg text-base py-6">
                        <SelectValue placeholder="Select a service" />
                      </SelectTrigger>
                      <SelectContent className="text-base">
                        <SelectItem value="hilot">Kultura Hilot Massage</SelectItem>
                        <SelectItem value="hagod">Kultura Hagod Massage</SelectItem>
                        <SelectItem value="haplos">Kultura Haplos Massage</SelectItem>
                        <SelectItem value="hammam">Hammam Ritual</SelectItem>
                        <SelectItem value="facial">Facial Treatment</SelectItem>
                        <SelectItem value="other">Other</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <Label className="text-base">Preferred Date</Label>
                      <Popover>
                        <PopoverTrigger asChild>
                          <Button
                            variant="outline"
                            className={cn(
                              "w-full justify-start text-left font-normal rounded-lg text-base py-6",
                              !date && "text-muted-foreground",
                            )}
                          >
                            <CalendarIcon className="mr-2 h-5 w-5" />
                            {date ? format(date, "PPP") : "Select a date"}
                          </Button>
                        </PopoverTrigger>
                        <PopoverContent className="w-auto p-0">
                          <Calendar mode="single" selected={date} onSelect={setDate} initialFocus />
                        </PopoverContent>
                      </Popover>
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="time" className="text-base">
                        Preferred Time
                      </Label>
                      <Select>
                        <SelectTrigger id="time" className="rounded-lg text-base py-6">
                          <SelectValue placeholder="Select a time" />
                        </SelectTrigger>
                        <SelectContent className="text-base">
                          <SelectItem value="10:00">10:00 AM</SelectItem>
                          <SelectItem value="11:00">11:00 AM</SelectItem>
                          <SelectItem value="12:00">12:00 PM</SelectItem>
                          <SelectItem value="13:00">1:00 PM</SelectItem>
                          <SelectItem value="14:00">2:00 PM</SelectItem>
                          <SelectItem value="15:00">3:00 PM</SelectItem>
                          <SelectItem value="16:00">4:00 PM</SelectItem>
                          <SelectItem value="17:00">5:00 PM</SelectItem>
                          <SelectItem value="18:00">6:00 PM</SelectItem>
                          <SelectItem value="19:00">7:00 PM</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="message" className="text-base">
                      Special Requests
                    </Label>
                    <Textarea
                      id="message"
                      placeholder="Any special requests or notes"
                      className="rounded-lg text-base min-h-[120px]"
                    />
                  </div>

                  <Button
                    type="submit"
                    className="w-full bg-avocado-600 hover:bg-avocado-700 text-white rounded-full py-6 text-lg"
                  >
                    Book Appointment
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>

          {/* Contact Information */}
          <div className="space-y-8">
            <Card className="border-avocado-100 dark:border-gray-700 rounded-xl overflow-hidden">
              <CardHeader className="bg-avocado-50 dark:bg-gray-800 border-b border-avocado-100 dark:border-gray-700">
                <CardTitle className="text-2xl text-avocado-800 dark:text-avocado-400">Contact Information</CardTitle>
                <CardDescription className="text-base">
                  Reach out to us directly using the information below.
                </CardDescription>
              </CardHeader>
              <CardContent className="p-8 space-y-6">
                <div className="flex items-start">
                  <MapPin className="h-6 w-6 text-avocado-600 dark:text-avocado-400 mr-4 mt-0.5" />
                  <div>
                    <h3 className="font-medium text-lg">Address</h3>
                    <p className="text-gray-600 dark:text-gray-300 text-base">Pamporovo, Bulgaria</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <Phone className="h-6 w-6 text-avocado-600 dark:text-avocado-400 mr-4 mt-0.5" />
                  <div>
                    <h3 className="font-medium text-lg">Phone</h3>
                    <p className="text-gray-600 dark:text-gray-300 text-base">+359 899 790 819</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <Mail className="h-6 w-6 text-avocado-600 dark:text-avocado-400 mr-4 mt-0.5" />
                  <div>
                    <h3 className="font-medium text-lg">Email</h3>
                    <p className="text-gray-600 dark:text-gray-300 text-base">info@kulturaspa.com</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <Clock className="h-6 w-6 text-avocado-600 dark:text-avocado-400 mr-4 mt-0.5" />
                  <div>
                    <h3 className="font-medium text-lg">Working Hours</h3>
                    <p className="text-gray-600 dark:text-gray-300 text-base">10:00 AM - 8:30 PM</p>
                    <p className="text-gray-600 dark:text-gray-300 text-base">Sauna: 4:00 PM - 8:30 PM</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Map */}
            <Card className="border-avocado-100 dark:border-gray-700 rounded-xl overflow-hidden">
              <CardHeader className="bg-avocado-50 dark:bg-gray-800 border-b border-avocado-100 dark:border-gray-700">
                <CardTitle className="text-2xl text-avocado-800 dark:text-avocado-400">Find Us</CardTitle>
              </CardHeader>
              <CardContent className="p-0">
                <div className="aspect-video bg-gray-200 dark:bg-gray-700 flex items-center justify-center">
                  <p className="text-gray-500 dark:text-gray-400 text-lg">Map will be displayed here</p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </main>
  )
}
