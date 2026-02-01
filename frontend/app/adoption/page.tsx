import type { Metadata } from "next"
import AdoptionForm from "@/components/adoption-form"

export const metadata: Metadata = {
  title: "Adoption Process | Pawfect",
  description: "Learn about our adoption process and apply to adopt a pet",
}

export default function AdoptionPage() {
  return (
    <div className="container py-12">
      <div className="max-w-3xl mx-auto">
        <div className="mb-8 text-center">
          <h1 className="text-3xl font-bold mb-2">Adopt a Pet</h1>
          <p className="text-muted-foreground">Complete the form below to start the adoption process</p>
        </div>

        <AdoptionForm />
      </div>
    </div>
  )
}
