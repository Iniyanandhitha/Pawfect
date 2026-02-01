import Link from "next/link"
import { Facebook, Instagram, Twitter, Mail, Phone, MapPin } from "lucide-react"

const Footer = () => {
  return (
    <footer className="bg-gradient-to-r from-primary/10 to-secondary/10 border-t">
      <div className="container py-12">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-4">
          <div>
            <h3 className="text-lg font-semibold mb-4 gradient-text">PawsHome</h3>
            <p className="text-sm text-muted-foreground mb-4">
              Finding loving homes for dogs and cats since 2010. Our mission is to connect animals with caring families.
            </p>
            <div className="flex space-x-4">
              <Link href="#" className="text-primary hover:text-primary/80">
                <Facebook className="h-5 w-5" />
                <span className="sr-only">Facebook</span>
              </Link>
              <Link href="#" className="text-primary hover:text-primary/80">
                <Instagram className="h-5 w-5" />
                <span className="sr-only">Instagram</span>
              </Link>
              <Link href="#" className="text-primary hover:text-primary/80">
                <Twitter className="h-5 w-5" />
                <span className="sr-only">Twitter</span>
              </Link>
            </div>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/" className="text-muted-foreground hover:text-primary">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/pets?species=dog" className="text-muted-foreground hover:text-primary">
                  Available Dogs
                </Link>
              </li>
              <li>
                <Link href="/pets?species=cat" className="text-muted-foreground hover:text-primary">
                  Available Cats
                </Link>
              </li>
              <li>
                <Link href="/adoption" className="text-muted-foreground hover:text-primary">
                  Adoption Process
                </Link>
              </li>
              <li>
                <Link href="/care-tips" className="text-muted-foreground hover:text-primary">
                  Pet Care Tips
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-muted-foreground hover:text-primary">
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Pet Categories</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/pets?species=dog&age=puppy" className="text-muted-foreground hover:text-primary">
                  Puppies
                </Link>
              </li>
              <li>
                <Link href="/pets?species=dog&age=adult" className="text-muted-foreground hover:text-primary">
                  Adult Dogs
                </Link>
              </li>
              <li>
                <Link href="/pets?species=dog&age=senior" className="text-muted-foreground hover:text-primary">
                  Senior Dogs
                </Link>
              </li>
              <li>
                <Link href="/pets?species=cat&age=kitten" className="text-muted-foreground hover:text-primary">
                  Kittens
                </Link>
              </li>
              <li>
                <Link href="/pets?species=cat&age=adult" className="text-muted-foreground hover:text-primary">
                  Adult Cats
                </Link>
              </li>
              <li>
                <Link href="/pets?species=cat&age=senior" className="text-muted-foreground hover:text-primary">
                  Senior Cats
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Contact Us</h3>
            <ul className="space-y-3 text-sm">
              <li className="flex items-start">
                <MapPin className="h-5 w-5 mr-2 text-primary" />
                <span className="text-muted-foreground">123 Pet Street, Animal City, AC 12345</span>
              </li>
              <li className="flex items-center">
                <Phone className="h-5 w-5 mr-2 text-primary" />
                <span className="text-muted-foreground">(123) 456-7890</span>
              </li>
              <li className="flex items-center">
                <Mail className="h-5 w-5 mr-2 text-primary" />
                <span className="text-muted-foreground">info@pawshome.com</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t mt-8 pt-8 text-center text-sm text-muted-foreground">
          <p>&copy; {new Date().getFullYear()} PawsHome. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
