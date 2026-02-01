import type { Metadata } from "next"
import Link from "next/link"
import Image from "next/image"
import { Card, CardContent } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Search, Clock, User, ArrowRight, Dog, Cat } from "lucide-react"
import CareTipsCategories from "@/components/care-tips-categories"

export const metadata: Metadata = {
  title: "Pet Care Tips | PawsHome",
  description: "Helpful articles and guides on pet care for dogs and cats",
}

// Sample articles data with the provided images
const articles = [
  {
    id: 1,
    title: "Essential Grooming Tips for Your Dog",
    excerpt: "Learn the proper techniques for brushing, bathing, and maintaining your dog's coat for optimal health.",
    category: "Dogs",
    image: "/images/dog-grooming.jpeg",
    author: "Dr. Sarah Johnson",
    date: "March 15, 2023",
    readTime: "5 min read",
  },
  {
    id: 2,
    title: "Spa Day at Home: Pampering Your Cat",
    excerpt:
      "Create a relaxing spa experience for your feline friend with these safe and enjoyable grooming techniques.",
    category: "Cats",
    image: "/images/cat-spa.jpeg",
    author: "Feline Specialist Emma",
    date: "April 2, 2023",
    readTime: "7 min read",
  },
  {
    id: 3,
    title: "Bathing Your Dog: A Complete Guide",
    excerpt:
      "Everything you need to know about bathing your dog, from frequency to techniques and product recommendations.",
    category: "Dogs",
    image: "/images/dog-bath.jpeg",
    author: "Pet Groomer Mark",
    date: "February 28, 2023",
    readTime: "6 min read",
  },
  {
    id: 4,
    title: "Beauty Treatments for Your Cat",
    excerpt: "Safe and fun beauty treatments to keep your cat looking and feeling their best.",
    category: "Cats",
    image: "/images/cat-beauty.jpeg",
    author: "Cat Expert Lisa",
    date: "May 10, 2023",
    readTime: "8 min read",
  },
  {
    id: 5,
    title: "Luxury Spa Treatments for Small Dogs",
    excerpt: "Pamper your small dog with these luxurious and relaxing spa treatments you can do at home.",
    category: "Dogs",
    image: "/images/dog-spa.jpeg",
    author: "Pet Stylist John",
    date: "January 5, 2023",
    readTime: "10 min read",
  },
  {
    id: 6,
    title: "Hair Care Routine for Cats",
    excerpt: "Establish a proper hair care routine for your cat to prevent matting and reduce shedding.",
    category: "Cats",
    image: "/images/cat-rollers.jpeg",
    author: "Dr. Michael Chen",
    date: "June 12, 2023",
    readTime: "9 min read",
  },
]

export default function CareTipsPage() {
  return (
    <div className="container py-12">
      <div className="mb-8">
        <h1 className="text-3xl font-bold mb-2 gradient-text">Pet Care Tips</h1>
        <p className="text-muted-foreground max-w-3xl">
          Discover helpful articles and guides to provide the best care for your dogs and cats
        </p>
      </div>

      {/* Search Bar */}
      <div className="relative max-w-xl mb-12">
        <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
        <Input placeholder="Search for care tips..." className="pl-10 border-primary/20 focus:border-primary" />
        <Button className="absolute right-0 top-0 rounded-l-none bg-primary hover:bg-primary/90">Search</Button>
      </div>

      {/* Categories */}
      <CareTipsCategories />

      {/* Featured Article */}
      <div className="mb-12">
        <h2 className="text-2xl font-semibold mb-6 gradient-text">Featured Article</h2>
        <div className="relative rounded-lg overflow-hidden">
          <div className="aspect-[21/9] relative">
            <Image src="/images/pets-banner.jpeg" alt="Pet Care Essentials" fill className="object-cover" />
          </div>
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex flex-col justify-end p-6 md:p-8">
            <Badge className="mb-2 bg-gradient-to-r from-primary to-secondary text-white self-start">
              Pet Care Essentials
            </Badge>
            <h3 className="text-xl md:text-2xl lg:text-3xl font-bold text-white mb-2">
              The Complete Guide to Dog and Cat Care
            </h3>
            <p className="text-white/90 max-w-2xl mb-4">
              Everything you need to know about caring for your furry companions, from nutrition and grooming to health
              and wellness.
            </p>
            <Button variant="secondary" className="self-start bg-white text-primary hover:bg-white/90" asChild>
              <Link href="/care-tips/complete-guide">
                Read Full Guide
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>
      </div>

      {/* Articles Grid */}
      <div className="mb-12">
        <h2 className="text-2xl font-semibold mb-6 gradient-text">Latest Articles</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {articles.map((article) => (
            <Card
              key={article.id}
              className="overflow-hidden hover:shadow-md transition-shadow border-2 border-transparent hover:border-primary/20"
            >
              <div className="aspect-[16/9] relative pet-image-container">
                <Image src={article.image || "/placeholder.svg"} alt={article.title} fill className="object-cover" />
                <Badge className="absolute top-2 left-2 bg-gradient-to-r from-primary to-secondary text-white">
                  {article.category === "Dogs" ? (
                    <span className="flex items-center">
                      <Dog className="h-3 w-3 mr-1" /> {article.category}
                    </span>
                  ) : (
                    <span className="flex items-center">
                      <Cat className="h-3 w-3 mr-1" /> {article.category}
                    </span>
                  )}
                </Badge>
              </div>
              <CardContent className="pt-6">
                <h3 className="font-semibold text-lg mb-2 line-clamp-2">
                  <Link href={`/care-tips/${article.id}`} className="hover:text-primary">
                    {article.title}
                  </Link>
                </h3>
                <p className="text-muted-foreground mb-4 line-clamp-2">{article.excerpt}</p>
                <div className="flex items-center justify-between text-sm text-muted-foreground">
                  <div className="flex items-center">
                    <User className="h-4 w-4 mr-1" />
                    {article.author}
                  </div>
                  <div className="flex items-center">
                    <Clock className="h-4 w-4 mr-1" />
                    {article.readTime}
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>

      {/* Newsletter Signup */}
      <div className="bg-gradient-to-r from-primary/10 to-secondary/10 rounded-lg p-6 md:p-8">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-2xl font-semibold mb-2 gradient-text">Get Pet Care Tips in Your Inbox</h2>
          <p className="text-muted-foreground mb-6">
            Subscribe to our newsletter for regular updates on pet care, health tips, and adoption stories
          </p>
          <div className="flex flex-col sm:flex-row gap-2 max-w-md mx-auto">
            <Input
              placeholder="Your email address"
              type="email"
              className="flex-1 border-primary/20 focus:border-primary"
            />
            <Button className="bg-primary hover:bg-primary/90">Subscribe</Button>
          </div>
        </div>
      </div>
    </div>
  )
}
