import type { Metadata } from "next"
import Image from "next/image"
import { Card, CardContent } from "@/components/ui/card"
import DonationForm from "@/components/donation-form"
import { Heart, PawPrint, Award, Users, DollarSign, Sparkles } from "lucide-react"

export const metadata: Metadata = {
  title: "Donate | PawsHome",
  description: "Support our mission to find loving homes for pets in need",
}

export default function DonatePage() {
  return (
    <div className="container py-12">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold mb-4 gradient-text">Make a Difference</h1>
        <p className="text-muted-foreground max-w-3xl mx-auto">
          Your donation helps us rescue, care for, and find loving homes for pets in need. Every contribution, no matter
          how small, makes a significant impact.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
        <div className="lg:col-span-2">
          <div className="relative aspect-video rounded-lg overflow-hidden mb-8">
            <Image
              src="/images/donate-pets.jpeg"
              alt="Dogs and cat resting together"
              fill
              className="object-cover"
              priority
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex flex-col justify-end p-6">
              <h2 className="text-2xl font-bold text-white mb-2">Your Support Changes Lives</h2>
              <p className="text-white/90">
                Every donation helps us provide food, shelter, medical care, and love to animals in need.
              </p>
            </div>
          </div>

          <DonationForm />
        </div>

        <div className="space-y-6">
          <Card className="border-2 border-primary/10 hover:border-primary/20 transition-colors dark:dark-card-gradient">
            <CardContent className="pt-6">
              <h2 className="text-xl font-semibold mb-4 gradient-text">How Your Donation Helps</h2>

              <div className="space-y-4">
                <div className="flex items-start">
                  <div className="rounded-full bg-primary/10 dark:bg-purple/10 p-2 mr-3 flex-shrink-0">
                    <PawPrint className="h-5 w-5 text-primary dark:text-purple" />
                  </div>
                  <div>
                    <p className="font-medium">Animal Rescue</p>
                    <p className="text-muted-foreground">
                      Funds rescue operations to save animals from dangerous situations
                    </p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="rounded-full bg-secondary/10 p-2 mr-3 flex-shrink-0">
                    <Heart className="h-5 w-5 text-secondary" />
                  </div>
                  <div>
                    <p className="font-medium">Medical Care</p>
                    <p className="text-muted-foreground">Provides veterinary services, medications, and surgeries</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="rounded-full bg-accent/10 p-2 mr-3 flex-shrink-0">
                    <DollarSign className="h-5 w-5 text-accent" />
                  </div>
                  <div>
                    <p className="font-medium">Shelter Operations</p>
                    <p className="text-muted-foreground">Maintains our facilities and provides food and supplies</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="rounded-full bg-purple/10 p-2 mr-3 flex-shrink-0">
                    <Users className="h-5 w-5 text-purple" />
                  </div>
                  <div>
                    <p className="font-medium">Community Programs</p>
                    <p className="text-muted-foreground">
                      Supports education initiatives and low-cost spay/neuter programs
                    </p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="border-2 border-secondary/10 hover:border-secondary/20 transition-colors dark:dark-card-gradient">
            <CardContent className="pt-6">
              <h2 className="text-xl font-semibold mb-4 gradient-text">Our Impact</h2>

              <div className="grid grid-cols-2 gap-4">
                <div className="text-center p-4 bg-primary/5 dark:bg-purple/5 rounded-lg">
                  <p className="text-3xl font-bold gradient-text">500+</p>
                  <p className="text-sm text-muted-foreground">Pets Adopted</p>
                </div>

                <div className="text-center p-4 bg-secondary/5 rounded-lg">
                  <p className="text-3xl font-bold gradient-text">1,200+</p>
                  <p className="text-sm text-muted-foreground">Pets Rescued</p>
                </div>

                <div className="text-center p-4 bg-accent/5 rounded-lg">
                  <p className="text-3xl font-bold gradient-text">3,000+</p>
                  <p className="text-sm text-muted-foreground">Vet Visits</p>
                </div>

                <div className="text-center p-4 bg-purple/5 rounded-lg">
                  <p className="text-3xl font-bold gradient-text">5,000+</p>
                  <p className="text-sm text-muted-foreground">Volunteer Hours</p>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="border-2 border-accent/10 hover:border-accent/20 transition-colors dark:dark-card-gradient">
            <CardContent className="pt-6">
              <h2 className="text-xl font-semibold mb-4 gradient-text">Become a Monthly Donor</h2>
              <p className="text-muted-foreground mb-4">
                Join our Paws Partners program and make a sustainable impact with monthly donations.
              </p>
              <div className="flex items-center justify-center">
                <div className="relative">
                  <Award className="h-16 w-16 text-accent dark:text-purple" />
                  <Sparkles className="h-6 w-6 text-primary dark:text-secondary absolute -top-1 -right-1" />
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>

      <div className="bg-gradient-to-r from-primary/10 to-secondary/10 dark:from-purple/10 dark:to-teal/10 rounded-lg p-8 text-center">
        <h2 className="text-2xl font-bold mb-4 gradient-text">Other Ways to Help</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
          <Card className="border-none shadow-md bg-white/50 dark:bg-black/20 donation-card">
            <CardContent className="pt-6">
              <h3 className="text-lg font-semibold mb-2">Volunteer</h3>
              <p className="text-muted-foreground">
                Donate your time and skills to help with animal care, events, or administrative tasks.
              </p>
            </CardContent>
          </Card>

          <Card className="border-none shadow-md bg-white/50 dark:bg-black/20 donation-card">
            <CardContent className="pt-6">
              <h3 className="text-lg font-semibold mb-2">Foster</h3>
              <p className="text-muted-foreground">
                Provide a temporary home for animals awaiting their forever families.
              </p>
            </CardContent>
          </Card>

          <Card className="border-none shadow-md bg-white/50 dark:bg-black/20 donation-card">
            <CardContent className="pt-6">
              <h3 className="text-lg font-semibold mb-2">Sponsor</h3>
              <p className="text-muted-foreground">
                Sponsor a specific animal's care or support one of our special programs.
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}
