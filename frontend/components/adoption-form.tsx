"use client";

import type React from "react"

import { useState } from "react"
import { useSearchParams } from "next/navigation"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { Checkbox } from "@/components/ui/checkbox"
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
} from "@/components/ui/alert-dialog"

// Sample pet data for the dropdown
const availablePets = [
  { id: "1", name: "Buddy - Golden Retriever" },
  { id: "2", name: "Whiskers - Siamese Cat" },
  { id: "3", name: "Rocky - Labrador" },
  { id: "4", name: "Mittens - Maine Coon" },
  { id: "5", name: "Max - German Shepherd" },
  { id: "6", name: "Luna - Ragdoll Cat" },
  { id: "7", name: "Charlie - Beagle" },
  { id: "8", name: "Coco - Cockatiel" },
  { id: "9", name: "Oliver - Tabby Cat" },
  { id: "10", name: "Daisy - Rabbit" },
  { id: "11", name: "Cooper - Poodle" },
  { id: "12", name: "Bella - Guinea Pig" },
]

const AdoptionForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    petId: "",
    message: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const API_BASE = process.env.NEXT_PUBLIC_API_BASE;

    try {
      const res = await fetch(`${API_BASE}/api/adoption`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (res.ok) {
        alert("Adoption request sent successfully!");
      } else {
        alert("Error submitting adoption request.");
      }
    } catch (err) {
      console.error("Submission error:", err);
      alert("Something went wrong.");
    }
  };

  // Removed misplaced return statement and duplicate form block
};

// Removed duplicate export default statement
  // Remove this duplicate block as it is already defined earlier

  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    address: "",
    city: "",
    state: "",
    zipCode: "",
    petId: "",
    housingType: "",
    hasChildren: "",
    hasPets: "",
    experience: "",
    reason: "",
    agreeTerms: false,
  })

  const [formStep, setFormStep] = useState(0)
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [showConfirmation, setShowConfirmation] = useState(false)

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSelectChange = (name: string, value: string) => {
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleCheckboxChange = (name: string, checked: boolean) => {
    setFormData((prev) => ({ ...prev, [name]: checked }))
  }

  const nextStep = () => {
    setFormStep((prev) => prev + 1)
    window.scrollTo(0, 0)
  }

  const prevStep = () => {
    setFormStep((prev) => prev - 1)
    window.scrollTo(0, 0)
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
  
    try {
      const response = await fetch("http://localhost:5000/api/adoption", {
        method: "POST",
        body: JSON.stringify(formData),
        headers: { "Content-Type": "application/json" },
      })
  
      if (response.ok) {
        setShowConfirmation(true)
        setFormData({
          firstName: "",
          lastName: "",
          email: "",
          phone: "",
          address: "",
          city: "",
          state: "",
          zipCode: "",
          petId: formData.petId || "",
          housingType: "",
          hasChildren: "",
          hasPets: "",
          experience: "",
          reason: "",
          agreeTerms: false,
        }) // Reset form
      } else {
        const errorData = await response.json()
        alert(`Failed to submit adoption request: ${errorData.message || "Unknown error"}`)
      }
    } catch (error) {
      console.error("Error submitting form:", error)
      alert("An error occurred while submitting the form. Please try again.")
    } finally {
      setIsSubmitting(false)
    }
    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false)
      setShowConfirmation(true)
    }, 1500)
  }
  
 (
    <>
      <Card>
        <CardHeader>
          <CardTitle>Adoption Application</CardTitle>
          <CardDescription>Please provide your information to apply for pet adoption</CardDescription>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSubmit}>
            {formStep === 0 && (
              <div className="space-y-6">
                <div className="space-y-4">
                  <h3 className="text-lg font-medium">Personal Information</h3>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="firstName">First Name</Label>
                      <Input
                        id="firstName"
                        name="firstName"
                        value={formData.firstName}
                        onChange={handleInputChange}
                        required
                      />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="lastName">Last Name</Label>
                      <Input
                        id="lastName"
                        name="lastName"
                        value={formData.lastName}
                        onChange={handleInputChange}
                        required
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="email">Email</Label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      required
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="phone">Phone Number</Label>
                    <Input
                      id="phone"
                      name="phone"
                      type="tel"
                      value={formData.phone}
                      onChange={handleInputChange}
                      required
                    />
                  </div>
                </div>

                <div className="space-y-4">
                  <h3 className="text-lg font-medium">Address</h3>

                  <div className="space-y-2">
                    <Label htmlFor="address">Street Address</Label>
                    <Input id="address" name="address" value={formData.address} onChange={handleInputChange} required />
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="city">City</Label>
                      <Input id="city" name="city" value={formData.city} onChange={handleInputChange} required />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="state">State</Label>
                      <Input id="state" name="state" value={formData.state} onChange={handleInputChange} required />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="zipCode">Zip Code</Label>
                      <Input
                        id="zipCode"
                        name="zipCode"
                        value={formData.zipCode}
                        onChange={handleInputChange}
                        required
                      />
                    </div>
                  </div>
                </div>

                <div className="space-y-4">
                  <h3 className="text-lg font-medium">Pet Selection</h3>

                  <div className="space-y-2">
                    <Label htmlFor="petId">Which pet are you interested in adopting?</Label>
                    <Select value={formData.petId} onValueChange={(value) => handleSelectChange("petId", value)}>
                      <SelectTrigger id="petId">
                        <SelectValue placeholder="Select a pet" />
                      </SelectTrigger>
                      <SelectContent>
                        {availablePets.map((pet) => (
                          <SelectItem key={pet.id} value={pet.id}>
                            {pet.name}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>
                </div>
              </div>
            )}

            {formStep === 1 && (
              <div className="space-y-6">
                <div className="space-y-4">
                  <h3 className="text-lg font-medium">Living Situation</h3>

                  <div className="space-y-2">
                    <Label htmlFor="housingType">What type of housing do you live in?</Label>
                    <Select
                      value={formData.housingType}
                      onValueChange={(value) => handleSelectChange("housingType", value)}
                    >
                      <SelectTrigger id="housingType">
                        <SelectValue placeholder="Select housing type" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="house">House</SelectItem>
                        <SelectItem value="apartment">Apartment</SelectItem>
                        <SelectItem value="condo">Condo</SelectItem>
                        <SelectItem value="other">Other</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="hasChildren">Do you have children in your home?</Label>
                    <Select
                      value={formData.hasChildren}
                      onValueChange={(value) => handleSelectChange("hasChildren", value)}
                    >
                      <SelectTrigger id="hasChildren">
                        <SelectValue placeholder="Select an option" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="yes">Yes</SelectItem>
                        <SelectItem value="no">No</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="hasPets">Do you currently have other pets?</Label>
                    <Select value={formData.hasPets} onValueChange={(value) => handleSelectChange("hasPets", value)}>
                      <SelectTrigger id="hasPets">
                        <SelectValue placeholder="Select an option" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="yes">Yes</SelectItem>
                        <SelectItem value="no">No</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>

                <div className="space-y-4">
                  <h3 className="text-lg font-medium">Experience & Expectations</h3>

                  <div className="space-y-2">
                    <Label htmlFor="experience">What experience do you have with pets?</Label>
                    <Select
                      value={formData.experience}
                      onValueChange={(value) => handleSelectChange("experience", value)}
                    >
                      <SelectTrigger id="experience">
                        <SelectValue placeholder="Select experience level" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="first-time">First-time pet owner</SelectItem>
                        <SelectItem value="some">Some experience</SelectItem>
                        <SelectItem value="experienced">Experienced pet owner</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="reason">Why do you want to adopt this pet?</Label>
                    <Textarea
                      id="reason"
                      name="reason"
                      value={formData.reason}
                      onChange={handleInputChange}
                      rows={4}
                      required
                    />
                  </div>
                </div>
              </div>
            )}

            {formStep === 2 && (
              <div className="space-y-6">
                <div className="space-y-4">
                  <h3 className="text-lg font-medium">Terms & Conditions</h3>

                  <Accordion type="single" collapsible className="w-full">
                    <AccordionItem value="terms">
                      <AccordionTrigger>Adoption Agreement</AccordionTrigger>
                      <AccordionContent>
                        <div className="text-sm text-muted-foreground space-y-2">
                          <p>By submitting this application, you agree to:</p>
                          <ul className="list-disc pl-5 space-y-1">
                            <li>Provide a safe and loving home for the pet</li>
                            <li>Regular veterinary care and proper nutrition</li>
                            <li>Allow a home visit prior to adoption finalization</li>
                            <li>Pay the adoption fee (varies by pet)</li>
                            <li>Return the pet to PawsHome if you can no longer care for it</li>
                          </ul>
                        </div>
                      </AccordionContent>
                    </AccordionItem>
                  </Accordion>

                  <div className="flex items-center space-x-2 pt-2">
                    <Checkbox
                      id="agreeTerms"
                      checked={formData.agreeTerms}
                      onCheckedChange={(checked) => handleCheckboxChange("agreeTerms", checked as boolean)}
                      required
                    />
                    <Label
                      htmlFor="agreeTerms"
                      className="text-sm font-normal leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                    >
                      I agree to the adoption terms and conditions
                    </Label>
                  </div>
                </div>

                <div className="space-y-4">
                  <h3 className="text-lg font-medium">Review Your Information</h3>

                  <div className="bg-cream/10 p-4 rounded-lg space-y-4">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <p className="text-sm text-muted-foreground">Name</p>
                        <p>
                          {formData.firstName} {formData.lastName}
                        </p>
                      </div>

                      <div>
                        <p className="text-sm text-muted-foreground">Contact</p>
                        <p>{formData.email}</p>
                        <p>{formData.phone}</p>
                      </div>
                    </div>

                    <div>
                      <p className="text-sm text-muted-foreground">Address</p>
                      <p>{formData.address}</p>
                      <p>
                        {formData.city}, {formData.state} {formData.zipCode}
                      </p>
                    </div>

                    <div>
                      <p className="text-sm text-muted-foreground">Pet Selection</p>
                      <p>
                        {formData.petId
                          ? availablePets.find((pet) => pet.id === formData.petId)?.name
                          : "No pet selected"}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </form>
        </CardContent>
        <CardFooter className="flex flex-col sm:flex-row gap-2 justify-between">
          {formStep > 0 && (
            <Button type="button" variant="outline" onClick={prevStep}>
              Previous
            </Button>
          )}

          {formStep < 2 ? (
            <Button
              type="button"
              onClick={nextStep}
              disabled={
                (formStep === 0 &&
                  (!formData.firstName ||
                    !formData.lastName ||
                    !formData.email ||
                    !formData.phone ||
                    !formData.address ||
                    !formData.city ||
                    !formData.state ||
                    !formData.zipCode ||
                    !formData.petId)) ||
                (formStep === 1 &&
                  (!formData.housingType ||
                    !formData.hasChildren ||
                    !formData.hasPets ||
                    !formData.experience ||
                    !formData.reason))
              }
            >
              Next
            </Button>
          ) : (
            <Button type="submit" onClick={handleSubmit} disabled={isSubmitting || !formData.agreeTerms}>
              {isSubmitting ? "Submitting..." : "Submit Application"}
            </Button>
          )}
        </CardFooter>
      </Card>

      <AlertDialog open={showConfirmation} onOpenChange={setShowConfirmation}>
        <AlertDialogContent>
          <AlertDialogHeader>
            <AlertDialogTitle>Application Submitted!</AlertDialogTitle>
            <AlertDialogDescription>
              Thank you for your interest in adopting a pet. We've received your application and will contact you within
              2-3 business days to discuss next steps.
            </AlertDialogDescription>
          </AlertDialogHeader>
          <AlertDialogFooter>
            <AlertDialogAction>OK</AlertDialogAction>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>
    </>
  )


export default AdoptionForm