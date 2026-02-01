"use client"

import { useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"

interface AdoptionCTAProps {
  petName: string
  petId: string
}

const AdoptionCTA = ({ petName, petId }: AdoptionCTAProps) => {
  const [isDialogOpen, setIsDialogOpen] = useState(false)

  return (
    <>
      <Button className="w-full" asChild>
        <Link href={`/adoption?pet=${petId}`}>Adopt {petName}</Link>
      </Button>

      <div className="flex justify-center mt-4">
        <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
          <DialogTrigger asChild>
            <Button variant="link" className="text-sm">
              How does the adoption process work?
            </Button>
          </DialogTrigger>
          <DialogContent>
            <DialogHeader>
              <DialogTitle>Our Adoption Process</DialogTitle>
              <DialogDescription>Here's what to expect when adopting a pet from PawsHome</DialogDescription>
            </DialogHeader>
            <div className="space-y-4 py-4">
              <div className="flex">
                <div className="bg-primary/10 rounded-full h-8 w-8 flex items-center justify-center mr-3 flex-shrink-0">
                  <span className="font-medium">1</span>
                </div>
                <div>
                  <h4 className="font-medium">Submit an Application</h4>
                  <p className="text-sm text-muted-foreground">
                    Fill out our adoption form with your information and preferences.
                  </p>
                </div>
              </div>

              <div className="flex">
                <div className="bg-primary/10 rounded-full h-8 w-8 flex items-center justify-center mr-3 flex-shrink-0">
                  <span className="font-medium">2</span>
                </div>
                <div>
                  <h4 className="font-medium">Meet and Greet</h4>
                  <p className="text-sm text-muted-foreground">
                    Schedule a time to meet the pet you're interested in adopting.
                  </p>
                </div>
              </div>

              <div className="flex">
                <div className="bg-primary/10 rounded-full h-8 w-8 flex items-center justify-center mr-3 flex-shrink-0">
                  <span className="font-medium">3</span>
                </div>
                <div>
                  <h4 className="font-medium">Home Check</h4>
                  <p className="text-sm text-muted-foreground">
                    We'll conduct a brief home check to ensure it's suitable for the pet.
                  </p>
                </div>
              </div>

              <div className="flex">
                <div className="bg-primary/10 rounded-full h-8 w-8 flex items-center justify-center mr-3 flex-shrink-0">
                  <span className="font-medium">4</span>
                </div>
                <div>
                  <h4 className="font-medium">Adoption Finalization</h4>
                  <p className="text-sm text-muted-foreground">
                    Complete paperwork, pay adoption fees, and welcome your new pet home!
                  </p>
                </div>
              </div>
            </div>
            <div className="flex justify-end">
              <Button onClick={() => setIsDialogOpen(false)}>Close</Button>
            </div>
          </DialogContent>
        </Dialog>
      </div>
    </>
  )
}

export default AdoptionCTA
