import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent } from "@/components/ui/card"
import { Heart, Share2, Calendar, User, Activity, Check, ArrowLeft, Dog, Cat } from "lucide-react"
import AdoptionCTA from "@/components/adoption-cta"

// This would normally come from a database
const getPet = (id: string) => {
  const allPets = [
    {
      id: 1,
      name: "Rocky",
      species: "Dog",
      breed: "Pit Bull",
      age: "3 years",
      gender: "Male",
      image: "/images/pitbull.jpeg",
      status: "Available",
      health: "Vaccinated, Neutered",
      description:
        "Rocky is a friendly and energetic Pit Bull who loves to play fetch and go for long walks. He's great with children and other pets, making him the perfect addition to any family. Rocky is house-trained and knows basic commands like sit, stay, and paw.",
      characteristics: ["Friendly", "Energetic", "Good with kids", "Trained", "Playful"],
      requirements: ["Fenced yard", "Active lifestyle", "Regular exercise"],
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
      health: "Vaccinated, Spayed",
      description:
        "Snowball is a beautiful Persian cat with a calm and gentle personality. She enjoys lounging in sunny spots and being brushed. Snowball is litter-trained and gets along well with other cats. She would thrive in a quiet home where she can receive plenty of affection.",
      characteristics: ["Calm", "Affectionate", "Independent", "Quiet", "Gentle"],
      requirements: ["Indoor only", "Regular grooming", "Quiet environment"],
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
      health: "Vaccinated, Spayed",
      description:
        "Princess is a stunning Ragdoll cat with beautiful blue eyes and a sweet temperament. She loves to be held and will follow you around the house. Princess is very gentle and would be perfect for a family with children or other pets.",
      characteristics: ["Gentle", "Affectionate", "Good with kids", "Playful", "Social"],
      requirements: ["Indoor only", "Regular grooming", "Attention and playtime"],
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
      health: "Vaccinated",
      description:
        "Ginger is an adorable orange tabby kitten full of energy and curiosity. He loves to play with toys and explore his surroundings. Ginger is very social and would do well in a home with other pets or children who can play with him.",
      characteristics: ["Playful", "Curious", "Energetic", "Social", "Affectionate"],
      requirements: ["Safe environment", "Plenty of toys", "Patient family"],
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
      health: "Vaccinated, Spayed",
      description:
        "Bella is a beautiful Golden Retriever with a heart of gold. She's gentle, obedient, and loves to please her humans. Bella enjoys swimming, fetching, and cuddling on the couch. She's great with children and other pets.",
      characteristics: ["Gentle", "Obedient", "Good with kids", "Active", "Affectionate"],
      requirements: ["Regular exercise", "Access to water for swimming", "Family time"],
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
      health: "Vaccinated, Spayed",
      description:
        "Daisy is an adorable Bichon Frise with a playful and affectionate personality. She loves to be the center of attention and enjoys being groomed. Daisy is hypoallergenic and would be perfect for families with allergies.",
      characteristics: ["Playful", "Affectionate", "Hypoallergenic", "Social", "Smart"],
      requirements: ["Regular grooming", "Daily walks", "Training consistency"],
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
      health: "Vaccinated, Neutered",
      description:
        "Apollo is a handsome Doberman with a loyal and protective nature. He's intelligent and eager to learn new commands. Apollo needs an experienced owner who can provide proper training and socialization.",
      characteristics: ["Loyal", "Intelligent", "Protective", "Athletic", "Alert"],
      requirements: ["Experienced owner", "Consistent training", "Secure yard"],
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
      health: "Vaccinated",
      description:
        "Luna is a beautiful Siamese kitten with striking blue eyes. She's very vocal and will let you know when she wants attention. Luna is playful, curious, and loves to explore. She would thrive in a home where she can receive plenty of interaction.",
      characteristics: ["Vocal", "Intelligent", "Curious", "Playful", "Affectionate"],
      requirements: ["Interactive toys", "Attention and playtime", "Safe environment"],
    },
    {
      id: 9,
      name: "Charlie",
      species: "Dog",
      breed: "Golden Retriever",
      age: "3 months",
      gender: "Male",
      image: "/images/golden-puppy.jpeg",
      status: "Available",
      health: "Vaccinated",
      description:
        "Charlie is an adorable Golden Retriever puppy with a sweet and gentle temperament. He's eager to please and already showing signs of being very trainable. Charlie loves to play and cuddle, making him perfect for families.",
      characteristics: ["Sweet", "Gentle", "Trainable", "Playful", "Affectionate"],
      requirements: ["Puppy training", "Patient family", "Secure yard"],
    },
  ]

  return allPets.find((pet) => pet.id.toString() === id) || allPets[0]
}

export default function PetDetailPage({ params }: { params: { id: string } }) {
  const pet = getPet(params.id)

  return (
    <div className="container py-12">
      <Link href="/pets" className="flex items-center text-muted-foreground hover:text-primary mb-6">
        <ArrowLeft className="h-4 w-4 mr-2" />
        Back to all pets
      </Link>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Pet Images */}
        <div className="lg:col-span-2">
          <div className="relative aspect-video rounded-lg overflow-hidden mb-4 pet-image-container">
            <Image src={pet.image || "/placeholder.svg"} alt={pet.name} fill className="object-cover" priority />
          </div>

          <div className="flex justify-between items-center mb-6">
            <h1 className="text-3xl font-bold gradient-text">{pet.name}</h1>
            <div className="flex space-x-2">
              <Button variant="outline" size="icon" className="border-primary/20 text-primary hover:bg-primary/10">
                <Heart className="h-5 w-5" />
                <span className="sr-only">Add to favorites</span>
              </Button>
              <Button
                variant="outline"
                size="icon"
                className="border-secondary/20 text-secondary hover:bg-secondary/10"
              >
                <Share2 className="h-5 w-5" />
                <span className="sr-only">Share</span>
              </Button>
            </div>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
            <div className="flex items-center p-3 bg-gradient-to-r from-primary/5 to-primary/10 rounded-lg">
              {pet.species === "Dog" ? (
                <Dog className="h-5 w-5 text-primary mr-2" />
              ) : (
                <Cat className="h-5 w-5 text-secondary mr-2" />
              )}
              <div>
                <p className="text-xs text-muted-foreground">Species</p>
                <p className="font-medium">{pet.species}</p>
              </div>
            </div>

            <div className="flex items-center p-3 bg-gradient-to-r from-secondary/5 to-secondary/10 rounded-lg">
              <Calendar className="h-5 w-5 text-secondary mr-2" />
              <div>
                <p className="text-xs text-muted-foreground">Age</p>
                <p className="font-medium">{pet.age}</p>
              </div>
            </div>

            <div className="flex items-center p-3 bg-gradient-to-r from-accent/5 to-accent/10 rounded-lg">
              <User className="h-5 w-5 text-accent mr-2" />
              <div>
                <p className="text-xs text-muted-foreground">Gender</p>
                <p className="font-medium">{pet.gender}</p>
              </div>
            </div>

            <div className="flex items-center p-3 bg-gradient-to-r from-purple/5 to-purple/10 rounded-lg">
              <Activity className="h-5 w-5 text-purple mr-2" />
              <div>
                <p className="text-xs text-muted-foreground">Health</p>
                <p className="font-medium truncate" title={pet.health}>
                  {pet.health}
                </p>
              </div>
            </div>
          </div>

          <div className="mb-8">
            <h2 className="text-xl font-semibold mb-4">About {pet.name}</h2>
            <p className="text-muted-foreground mb-6">{pet.description}</p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <h3 className="font-medium mb-3">Characteristics</h3>
                <ul className="space-y-2">
                  {pet.characteristics.map((trait, index) => (
                    <li key={index} className="flex items-center">
                      <Check className="h-4 w-4 text-primary mr-2" />
                      <span>{trait}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <h3 className="font-medium mb-3">Adoption Requirements</h3>
                <ul className="space-y-2">
                  {pet.requirements.map((req, index) => (
                    <li key={index} className="flex items-center">
                      <Check className="h-4 w-4 text-secondary mr-2" />
                      <span>{req}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* Sidebar */}
        <div className="lg:col-span-1">
          <Card className="sticky top-20 border-2 border-primary/10 hover:border-primary/20 transition-colors">
            <CardContent className="pt-6">
              <div className="mb-4">
                <Badge className="bg-gradient-to-r from-primary to-secondary text-white mb-2">{pet.status}</Badge>
                <h2 className="text-xl font-semibold">Interested in {pet.name}?</h2>
                <p className="text-muted-foreground">Fill out our adoption form to start the process</p>
              </div>

              <AdoptionCTA petName={pet.name} petId={pet.id.toString()} />

              <div className="mt-6 pt-6 border-t">
                <h3 className="font-medium mb-3">Need more information?</h3>
                <p className="text-sm text-muted-foreground mb-4">
                  Contact our adoption team for any questions about {pet.name} or the adoption process.
                </p>
                <Button variant="outline" className="w-full border-primary/20 text-primary hover:bg-primary/10" asChild>
                  <Link href="/contact">Contact Us</Link>
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}
