import type { Metadata } from "next"
import PetListings from "@/components/pet-listings"

export const metadata: Metadata = {
  title: "Available Pets | PawsHome",
  description: "Browse our available dogs and cats looking for their forever homes",
}

export default function PetsPage() {
  return (
    <div className="container py-12">
      <div className="mb-8">
        <h1 className="text-3xl font-bold mb-2 gradient-text">Available Pets</h1>
        <p className="text-muted-foreground">
          Browse our collection of adorable dogs and cats waiting for their forever homes
        </p>
      </div>

      <PetListings />
    </div>
  )
}
