"use client"

import { useState } from "react"
import Link from "next/link"
import Image from "next/image"
import { Card, CardContent, CardFooter } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Slider } from "@/components/ui/slider"
import { Heart, Search, PawPrint, Filter, Dog, Cat } from "lucide-react"

// Sample pet data with the provided images
const allPets = [
  {
    id: 1,
    name: "Rocky",
    species: "Dog",
    breed: "Pit Bull",
    age: 3,
    gender: "Male",
    image: "/images/pitbull.jpeg",
    status: "Available",
    health: "Vaccinated, Neutered",
  },
  {
    id: 2,
    name: "Snowball",
    species: "Cat",
    breed: "Persian",
    age: 4,
    gender: "Female",
    image: "/images/persian-cat.jpeg",
    status: "Available",
    health: "Vaccinated, Spayed",
  },
  {
    id: 3,
    name: "Princess",
    species: "Cat",
    breed: "Ragdoll",
    age: 2,
    gender: "Female",
    image: "/images/ragdoll-cat.jpeg",
    status: "Available",
    health: "Vaccinated, Spayed",
  },
  {
    id: 4,
    name: "Ginger",
    species: "Cat",
    breed: "Orange Tabby",
    age: 0,
    gender: "Male",
    image: "/images/orange-kitten.jpeg",
    status: "Available",
    health: "Vaccinated",
  },
  {
    id: 5,
    name: "Bella",
    species: "Dog",
    breed: "Golden Retriever",
    age: 5,
    gender: "Female",
    image: "/images/golden-retriever.jpeg",
    status: "Available",
    health: "Vaccinated, Spayed",
  },
  {
    id: 6,
    name: "Daisy",
    species: "Dog",
    breed: "Bichon Frise",
    age: 2,
    gender: "Female",
    image: "/images/bichon-frise.jpeg",
    status: "Available",
    health: "Vaccinated, Spayed",
  },
  {
    id: 7,
    name: "Apollo",
    species: "Dog",
    breed: "Doberman",
    age: 1,
    gender: "Male",
    image: "/images/doberman.jpeg",
    status: "Available",
    health: "Vaccinated, Neutered",
  },
  {
    id: 8,
    name: "Luna",
    species: "Cat",
    breed: "Siamese",
    age: 0,
    gender: "Female",
    image: "/images/siamese-kitten.jpeg",
    status: "Available",
    health: "Vaccinated",
  },
  {
    id: 9,
    name: "Charlie",
    species: "Dog",
    breed: "Golden Retriever",
    age: 0,
    gender: "Male",
    image: "/images/golden-puppy.jpeg",
    status: "Available",
    health: "Vaccinated",
  },
]

const PetListings = () => {
  const [favorites, setFavorites] = useState<number[]>([])
  const [searchTerm, setSearchTerm] = useState("")
  const [selectedSpecies, setSelectedSpecies] = useState<string>("")
  const [selectedGender, setSelectedGender] = useState<string>("")
  const [ageRange, setAgeRange] = useState<number[]>([0, 10])
  const [showFilters, setShowFilters] = useState(false)

  const toggleFavorite = (id: number) => {
    if (favorites.includes(id)) {
      setFavorites(favorites.filter((favId) => favId !== id))
    } else {
      setFavorites([...favorites, id])
    }
  }

  const filteredPets = allPets.filter((pet) => {
    // Search term filter
    const matchesSearch =
      pet.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      pet.breed.toLowerCase().includes(searchTerm.toLowerCase())

    // Species filter
    const matchesSpecies = selectedSpecies === "" || pet.species === selectedSpecies

    // Gender filter
    const matchesGender = selectedGender === "" || pet.gender === selectedGender

    // Age filter
    const matchesAge = pet.age >= ageRange[0] && pet.age <= ageRange[1]

    return matchesSearch && matchesSpecies && matchesGender && matchesAge
  })

  return (
    <div>
      {/* Search and Filter Section */}
      <div className="mb-8">
        <div className="flex flex-col md:flex-row gap-4 mb-4">
          <div className="relative flex-1">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
            <Input
              placeholder="Search by name or breed..."
              className="pl-10 border-primary/20 focus:border-primary"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>
          <Button
            variant="outline"
            onClick={() => setShowFilters(!showFilters)}
            className="md:w-auto w-full border-primary/20 text-primary hover:bg-primary/10"
          >
            <Filter className="h-4 w-4 mr-2" />
            {showFilters ? "Hide Filters" : "Show Filters"}
          </Button>
        </div>

        {showFilters && (
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 p-6 bg-gradient-to-r from-primary/5 to-secondary/5 rounded-lg mb-6">
            <div>
              <Label htmlFor="species" className="text-primary">
                Species
              </Label>
              <Select value={selectedSpecies} onValueChange={setSelectedSpecies}>
                <SelectTrigger id="species" className="border-primary/20 focus:border-primary">
                  <SelectValue placeholder="All Species" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All Species</SelectItem>
                  <SelectItem value="Dog">Dogs</SelectItem>
                  <SelectItem value="Cat">Cats</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div>
              <Label htmlFor="gender" className="text-secondary">
                Gender
              </Label>
              <Select value={selectedGender} onValueChange={setSelectedGender}>
                <SelectTrigger id="gender" className="border-secondary/20 focus:border-secondary">
                  <SelectValue placeholder="All Genders" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All Genders</SelectItem>
                  <SelectItem value="Male">Male</SelectItem>
                  <SelectItem value="Female">Female</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div>
              <Label className="text-accent">Age Range (Years)</Label>
              <div className="pt-6 px-2">
                <Slider defaultValue={[0, 10]} min={0} max={10} step={1} value={ageRange} onValueChange={setAgeRange} />
                <div className="flex justify-between mt-2 text-sm text-muted-foreground">
                  <span>
                    {ageRange[0]} {ageRange[0] === 0 ? "months" : ageRange[0] === 1 ? "year" : "years"}
                  </span>
                  <span>
                    {ageRange[1]} {ageRange[1] === 1 ? "year" : "years"}
                  </span>
                </div>
              </div>
            </div>
          </div>
        )}

        <div className="text-sm text-muted-foreground">Showing {filteredPets.length} pets</div>
      </div>

      {/* Pet Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {filteredPets.map((pet) => (
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
                <p>Age: {pet.age === 0 ? "< 1 year" : `${pet.age} ${pet.age === 1 ? "year" : "years"}`}</p>
                <p>Gender: {pet.gender}</p>
                <p className="truncate" title={pet.health}>
                  Health: {pet.health}
                </p>
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

      {filteredPets.length === 0 && (
        <div className="text-center py-12">
          <div className="mx-auto w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mb-4">
            <PawPrint className="h-8 w-8 text-primary" />
          </div>
          <h3 className="text-xl font-semibold mb-2">No pets found</h3>
          <p className="text-muted-foreground mb-6">Try adjusting your filters or search term to find more pets</p>
          <Button
            onClick={() => {
              setSearchTerm("")
              setSelectedSpecies("")
              setSelectedGender("")
              setAgeRange([0, 10])
            }}
            className="bg-primary hover:bg-primary/90"
          >
            Reset Filters
          </Button>
        </div>
      )}
    </div>
  )
}

export default PetListings
