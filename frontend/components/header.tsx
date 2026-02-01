"use client"

import { useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Menu, X, Heart, PawPrint, LogIn } from "lucide-react"
import { usePathname } from "next/navigation"
import { cn } from "@/lib/utils"
import { ThemeToggle } from "@/components/theme-toggle"

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const pathname = usePathname()

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  const navItems = [
    { name: "Home", path: "/" },
    { name: "Pets", path: "/pets" },
    { name: "Adoption", path: "/adoption" },
    { name: "Care Tips", path: "/care-tips" },
    { name: "Donate", path: "/donate" },
    { name: "Contact", path: "/contact" },
  ]

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center justify-between">
        <Link href="/" className="flex items-center space-x-2">
          <PawPrint className="h-8 w-8 text-primary dark:text-purple" />
          <span className="text-xl font-bold gradient-text">PawsHome</span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex md:items-center md:space-x-6">
          {navItems.map((item) => (
            <Link
              key={item.path}
              href={item.path}
              className={cn(
                "text-sm font-medium transition-colors hover:text-primary dark:hover:text-purple",
                pathname === item.path ? "text-primary dark:text-purple" : "text-foreground/70",
              )}
            >
              {item.name}
            </Link>
          ))}
        </nav>

        <div className="hidden md:flex md:items-center md:space-x-2">
          <ThemeToggle />
          <Button
            variant="outline"
            size="sm"
            className="border-primary/20 text-primary hover:bg-primary/10 dark:border-purple/20 dark:text-purple dark:hover:bg-purple/10"
            asChild
          >
            <Link href="/donate">
              <Heart className="mr-2 h-4 w-4" />
              Donate
            </Link>
          </Button>
          <Button
            size="sm"
            className="bg-primary hover:bg-primary/90 dark:bg-gradient-to-r dark:from-purple dark:to-teal dark:hover:opacity-90"
            asChild
          >
            <Link href="/signup">
              <LogIn className="mr-2 h-4 w-4" />
              Sign Up
            </Link>
          </Button>
        </div>

        {/* Mobile Menu Button */}
        <div className="flex items-center space-x-2 md:hidden">
          <ThemeToggle />
          <button onClick={toggleMenu} aria-label="Toggle menu">
            {isMenuOpen ? (
              <X className="h-6 w-6 text-primary dark:text-purple" />
            ) : (
              <Menu className="h-6 w-6 text-primary dark:text-purple" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="container md:hidden bg-background">
          <nav className="flex flex-col space-y-4 py-4">
            {navItems.map((item) => (
              <Link
                key={item.path}
                href={item.path}
                className={cn(
                  "text-sm font-medium transition-colors hover:text-primary dark:hover:text-purple",
                  pathname === item.path ? "text-primary dark:text-purple" : "text-foreground/70",
                )}
                onClick={() => setIsMenuOpen(false)}
              >
                {item.name}
              </Link>
            ))}
            <div className="flex flex-col space-y-2 pt-2">
              <Button
                variant="outline"
                size="sm"
                className="border-primary/20 text-primary hover:bg-primary/10 dark:border-purple/20 dark:text-purple dark:hover:bg-purple/10"
                asChild
              >
                <Link href="/donate">
                  <Heart className="mr-2 h-4 w-4" />
                  Donate
                </Link>
              </Button>
              <Button
                size="sm"
                className="bg-primary hover:bg-primary/90 dark:bg-gradient-to-r dark:from-purple dark:to-teal dark:hover:opacity-90"
                asChild
              >
                <Link href="/signup">
                  <LogIn className="mr-2 h-4 w-4" />
                  Sign Up
                </Link>
              </Button>
            </div>
          </nav>
        </div>
      )}
    </header>
  )
}

export default Header
