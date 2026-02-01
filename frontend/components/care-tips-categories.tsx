"use client"

import { useState } from "react"
import Link from "next/link"
import { Dog, Cat, Scissors, Bath, Utensils, Heart, Home, Brain } from "lucide-react"

const categories = [
  { name: "Dog Grooming", icon: Dog, href: "/care-tips?category=dog-grooming", color: "primary" },
  { name: "Cat Grooming", icon: Cat, href: "/care-tips?category=cat-grooming", color: "secondary" },
  { name: "Bathing", icon: Bath, href: "/care-tips?category=bathing", color: "accent" },
  { name: "Hair Care", icon: Scissors, href: "/care-tips?category=hair-care", color: "purple" },
  { name: "Nutrition", icon: Utensils, href: "/care-tips?category=nutrition", color: "pink" },
  { name: "Health", icon: Heart, href: "/care-tips?category=health", color: "orange" },
  { name: "Housing", icon: Home, href: "/care-tips?category=housing", color: "teal" },
  { name: "Behavior", icon: Brain, href: "/care-tips?category=behavior", color: "primary" },
]

const CareTipsCategories = () => {
  const [activeCategory, setActiveCategory] = useState<string | null>(null)

  return (
    <div className="mb-12">
      <h2 className="text-2xl font-semibold mb-6 gradient-text">Browse by Category</h2>
      <div className="grid grid-cols-2 sm:grid-cols-4 md:grid-cols-8 gap-4">
        {categories.map((category) => {
          const Icon = category.icon
          const isActive = activeCategory === category.name
          const colorClass = `${category.color}`

          return (
            <Link
              key={category.name}
              href={category.href}
              onClick={(e) => {
                e.preventDefault()
                setActiveCategory(category.name)
              }}
              className="text-center category-card"
            >
              <div
                className={`
                  flex flex-col items-center p-4 rounded-lg transition-colors
                  ${isActive ? `bg-${colorClass} text-${colorClass}-foreground` : `bg-${colorClass}/10 hover:bg-${colorClass}/20`}
                `}
              >
                <Icon className={`h-6 w-6 mb-2 ${isActive ? `text-${colorClass}-foreground` : `text-${colorClass}`}`} />
                <span className="text-sm font-medium">{category.name}</span>
              </div>
            </Link>
          )
        })}
      </div>
    </div>
  )
}

export default CareTipsCategories
