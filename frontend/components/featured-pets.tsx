"use client"

import { useState } from "react"
import Link from "next/link"
import Image from "next/image"
import { Card, CardContent, CardFooter } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Heart, Dog, Cat } from "lucide-react"

// Sample pet data with the provided images
const featuredPets = [
  {
    id: 1,
    name: "Rocky",
    species: "Dog",
    breed: "Pit Bull",
    age: "3 years",
    gender: "Male",
    image: "/images/pitbull.jpeg",
    status: "Available",
  },
  {
    id: 2,
    name: "Snowball",
    species: "Cat",
    breed: "Persian",
    age: "4 years",
    gender: "Female",
    image: "/images/persian-cat.jpeg",
    status: "Available",
  },
  {
    id: 3,
    name: "Princess",
    species: "Cat",
    breed: "Ragdoll",
    age: "2 years",
    gender: "Female",
    image: "/images/ragdoll-cat.jpeg",
    status: "Available",
  },
  {
    id: 4,
    name: "Ginger",
    species: "Cat",
    breed: "Orange Tabby",
    age: "8 weeks",
    gender: "Male",
    image: "/images/orange-kitten.jpeg",
    status: "Available",
  },
  {
    id: 5,
    name: "Bella",
    species: "Dog",
    breed: "Golden Retriever",
    age: "5 years",
    gender: "Female",
    image: "/images/golden-retriever.jpeg",
    status: "Available",
  },
  {
    id: 6,
    name: "Daisy",
    species: "Dog",
    breed: "Bichon Frise",
    age: "2 years",
    gender: "Female",
    image: "/images/bichon-frise.jpeg",
    status: "Available",
  },
  {
    id: 7,
    name: "Apollo",
    species: "Dog",
    breed: "Doberman",
    age: "1 year",
    gender: "Male",
    image: "/images/doberman.jpeg",
    status: "Available",
  },
  {
    id: 8,
    name: "Luna",
    species: "Cat",
    breed: "Siamese",
    age: "10 weeks",
    gender: "Female",
    image: "/images/siamese-kitten.jpeg",
    status: "Available",
  },
]

const FeaturedPets = () => {
  const [favorites, setFavorites] = useState<number[]>([])

  const toggleFavorite = (id: number) => {
    if (favorites.includes(id)) {
      setFavorites(favorites.filter((favId) => favId !== id))
    } else {
      setFavorites([...favorites, id])
    }
  }

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
      {featuredPets.slice(0, 4).map((pet) => (
        <Card
          key={pet.id}
          className="overflow-hidden transition-all duration-300 hover:shadow-lg pet-card border-2 border-transparent hover:border-primary/20"
        >
          <div className="relative">
            <div className="aspect-square relative overflow-hidden pet-image-container">
              <Image src={pet.image || "/placeholder.svg"} alt={pet.name} fill className="object-cover" />
            </div>
            <button
              onClick={() => toggleFavorite(pet.id)}
              className="absolute top-2 right-2 p-2 bg-white/80 rounded-full shadow-sm hover:bg-white transition-colors"
              aria-label={favorites.includes(pet.id) ? "Remove from favorites" : "Add to favorites"}
            >
              <Heart
                className={`h-5 w-5 ${favorites.includes(pet.id) ? "fill-red-500 text-red-500" : "text-gray-500"}`}
              />
            </button>
            <Badge className="absolute bottom-2 left-2 bg-gradient-to-r from-primary to-secondary text-white">
              {pet.status}
            </Badge>
          </div>
          <CardContent className="pt-4">
            <div className="flex items-center justify-between mb-2">
              <h3 className="font-semibold text-lg">{pet.name}</h3>
              <div className="flex items-center text-sm text-muted-foreground">
                {pet.species === "Dog" ? (
                  <Dog className="h-4 w-4 mr-1 text-primary" />
                ) : (
                  <Cat className="h-4 w-4 mr-1 text-secondary" />
                )}
                {pet.species}
              </div>
            </div>
            <div className="space-y-1 text-sm text-muted-foreground">
              <p>Breed: {pet.breed}</p>
              <p>Age: {pet.age}</p>
              <p>Gender: {pet.gender}</p>
            </div>
          </CardContent>
          <CardFooter className="pt-0">
            <Button
              className="w-full bg-gradient-to-r from-primary to-secondary hover:from-primary/90 hover:to-secondary/90"
              asChild
            >
              <Link href={`/pets/${pet.id}`}>View Details</Link>
            </Button>
          </CardFooter>
        </Card>
      ))}
    </div>
  )
}

export default FeaturedPets
