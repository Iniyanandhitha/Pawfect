import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Heart, PawPrint, Search, Info, Award, Clock, Dog, Cat } from "lucide-react"
import FeaturedPets from "@/components/featured-pets"

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-primary/20 to-secondary/20 py-20 md:py-32 paw-pattern">
        <div className="container flex flex-col md:flex-row items-center">
          <div className="md:w-1/2 mb-10 md:mb-0 md:pr-10">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              Find Your Perfect <span className="text-primary">Furry</span> Companion
            </h1>
            <p className="text-lg mb-8 text-muted-foreground">
              Discover adorable dogs and cats waiting for their forever homes. Our adoption process connects loving
              families with animals in need.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" className="bg-primary hover:bg-primary/90" asChild>
                <Link href="/pets">Browse Pets</Link>
              </Button>
              <Button size="lg" variant="outline" className="border-primary text-primary hover:bg-primary/10" asChild>
                <Link href="/adoption">How to Adopt</Link>
              </Button>
            </div>
          </div>
          <div className="md:w-1/2 relative">
            <div className="relative h-[300px] md:h-[400px] w-full rounded-lg overflow-hidden shadow-xl">
              <Image
                src="/images/hero-pets.png"
                alt="People with pets in a park"
                fill
                className="object-cover"
                priority
              />
            </div>
            <div className="absolute -bottom-5 -left-5 bg-white p-4 rounded-lg shadow-lg animate-bounce-slow">
              <Badge className="bg-primary text-primary-foreground">100+ Pets Available</Badge>
            </div>
          </div>
        </div>

        {/* Decorative elements */}
        <div className="hidden md:block absolute top-10 right-10">
          <PawPrint className="h-12 w-12 text-primary/40" />
        </div>
        <div className="hidden md:block absolute bottom-10 left-10">
          <PawPrint className="h-8 w-8 text-primary/40" />
        </div>
      </section>

      {/* Pet Categories Section */}
      <section className="py-16 bg-gradient-to-r from-accent/10 to-pink/10">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Find Your Perfect Match</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Whether you're a dog person or a cat person, we have the perfect companion waiting for you
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <Link href="/pets?species=dog" className="category-card">
              <Card className="overflow-hidden border-2 border-primary/20 hover:border-primary transition-colors">
                <div className="relative h-64">
                  <Image src="/images/golden-retriever.jpeg" alt="Dogs" fill className="object-cover" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex items-end p-6">
                    <div className="text-white">
                      <div className="flex items-center mb-2">
                        <Dog className="h-6 w-6 mr-2 text-primary" />
                        <h3 className="text-2xl font-bold">Dogs</h3>
                      </div>
                      <p className="text-white/80">Loyal companions for active families</p>
                    </div>
                  </div>
                </div>
              </Card>
            </Link>

            <Link href="/pets?species=cat" className="category-card">
              <Card className="overflow-hidden border-2 border-secondary/20 hover:border-secondary transition-colors">
                <div className="relative h-64">
                  <Image src="/images/ragdoll-cat.jpeg" alt="Cats" fill className="object-cover" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex items-end p-6">
                    <div className="text-white">
                      <div className="flex items-center mb-2">
                        <Cat className="h-6 w-6 mr-2 text-secondary" />
                        <h3 className="text-2xl font-bold">Cats</h3>
                      </div>
                      <p className="text-white/80">Elegant friends for cozy homes</p>
                    </div>
                  </div>
                </div>
              </Card>
            </Link>
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="py-16 bg-white dark:bg-black">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">How It Works</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Our simple process helps you find and adopt your perfect pet companion
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="border-none shadow-md bg-gradient-to-br from-primary/5 to-primary/10 hover:from-primary/10 hover:to-primary/20 transition-colors dark:bg-black dark:border dark:border-purple/20">
              <CardContent className="pt-6">
                <div className="rounded-full bg-primary/10 dark:bg-purple/20 p-3 w-12 h-12 flex items-center justify-center mb-4">
                  <Search className="h-6 w-6 text-primary dark:text-purple" />
                </div>
                <h3 className="text-xl font-semibold mb-2">Browse Pets</h3>
                <p className="text-muted-foreground mb-4">
                  Explore our collection of adorable dogs and cats waiting for their forever homes.
                </p>
                <Button variant="link" className="p-0 text-primary dark:text-purple" asChild>
                  <Link href="/pets">Find a Pet</Link>
                </Button>
              </CardContent>
            </Card>

            <Card className="border-none shadow-md bg-gradient-to-br from-secondary/5 to-secondary/10 hover:from-secondary/10 hover:to-secondary/20 transition-colors dark:bg-black dark:border dark:border-teal/20">
              <CardContent className="pt-6">
                <div className="rounded-full bg-secondary/10 dark:bg-teal/20 p-3 w-12 h-12 flex items-center justify-center mb-4">
                  <Info className="h-6 w-6 text-secondary dark:text-teal" />
                </div>
                <h3 className="text-xl font-semibold mb-2">Apply to Adopt</h3>
                <p className="text-muted-foreground mb-4">
                  Fill out our adoption form to start the process of bringing your new friend home.
                </p>
                <Button variant="link" className="p-0 text-secondary dark:text-teal" asChild>
                  <Link href="/adoption">Adoption Process</Link>
                </Button>
              </CardContent>
            </Card>

            <Card className="border-none shadow-md bg-gradient-to-br from-accent/5 to-accent/10 hover:from-accent/10 hover:to-accent/20 transition-colors dark:bg-black dark:border dark:border-accent/20">
              <CardContent className="pt-6">
                <div className="rounded-full bg-accent/10 dark:bg-accent/20 p-3 w-12 h-12 flex items-center justify-center mb-4">
                  <Heart className="h-6 w-6 text-accent" />
                </div>
                <h3 className="text-xl font-semibold mb-2">Welcome Home</h3>
                <p className="text-muted-foreground mb-4">
                  Bring your new companion home and start your journey together.
                </p>
                <Button variant="link" className="p-0 text-accent" asChild>
                  <Link href="/care-tips">Pet Care Tips</Link>
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Featured Pets Section */}
      <section className="py-16 bg-gradient-to-r from-purple/5 to-pink/5">
        <div className="container">
          <div className="flex justify-between items-center mb-8">
            <div>
              <h2 className="text-3xl font-bold gradient-text">Featured Pets</h2>
              <p className="text-muted-foreground">Meet some of our adorable pets looking for homes</p>
            </div>
            <Button variant="outline" className="border-primary text-primary hover:bg-primary/10" asChild>
              <Link href="/pets">View All Pets</Link>
            </Button>
          </div>

          <FeaturedPets />
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-16 bg-gradient-to-r from-teal/10 to-secondary/10">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Why Choose PawsHome</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              We're dedicated to finding the perfect match between pets and their forever families
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="mx-auto rounded-full bg-primary/10 dark:bg-purple/20 p-4 w-16 h-16 flex items-center justify-center mb-4">
                <Award className="h-8 w-8 text-primary dark:text-purple" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Trusted Service</h3>
              <p className="text-muted-foreground">Over 10 years of experience connecting pets with loving homes.</p>
            </div>

            <div className="text-center">
              <div className="mx-auto rounded-full bg-secondary/10 dark:bg-teal/20 p-4 w-16 h-16 flex items-center justify-center mb-4">
                <Heart className="h-8 w-8 text-secondary dark:text-teal" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Loving Care</h3>
              <p className="text-muted-foreground">All our pets receive proper medical care and attention.</p>
            </div>

            <div className="text-center">
              <div className="mx-auto rounded-full bg-accent/10 dark:bg-accent/20 p-4 w-16 h-16 flex items-center justify-center mb-4">
                <Clock className="h-8 w-8 text-accent" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Ongoing Support</h3>
              <p className="text-muted-foreground">We provide guidance and resources even after adoption.</p>
            </div>

            <div className="text-center">
              <div className="mx-auto rounded-full bg-purple/10 dark:bg-purple/20 p-4 w-16 h-16 flex items-center justify-center mb-4">
                <PawPrint className="h-8 w-8 text-purple" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Perfect Match</h3>
              <p className="text-muted-foreground">We help you find the pet that fits your lifestyle and home.</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-primary to-purple text-white">
        <div className="container text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to Find Your New Best Friend?</h2>
          <p className="text-white/80 max-w-2xl mx-auto mb-8">
            Start your journey to pet parenthood today. Browse our available pets or learn more about the adoption
            process.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Button size="lg" className="bg-white text-primary hover:bg-white/90" asChild>
              <Link href="/pets">Browse Pets</Link>
            </Button>
            <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/10" asChild>
              <Link href="/contact">Contact Us</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}
