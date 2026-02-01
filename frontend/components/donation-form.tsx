"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Checkbox } from "@/components/ui/checkbox"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Heart, CreditCard, DollarSign, Calendar, Gift } from "lucide-react"

const DonationForm = () => {
  const [donationAmount, setDonationAmount] = useState<string>("25")
  const [customAmount, setCustomAmount] = useState<string>("")
  const [donationType, setDonationType] = useState<string>("one-time")
  const [isSubmitting, setIsSubmitting] = useState(false)

  const handleAmountSelect = (amount: string) => {
    setDonationAmount(amount)
    setCustomAmount("")
  }

  const handleCustomAmountChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setCustomAmount(e.target.value)
    setDonationAmount("custom")
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false)
      alert("Thank you for your donation!")
    }, 1500)
  }

  const finalAmount = donationAmount === "custom" ? customAmount : donationAmount

  return (
    <Card className="border-2 border-primary/10 hover:border-primary/20 transition-colors dark:dark-card-gradient">
      <CardHeader>
        <CardTitle className="gradient-text">Make a Donation</CardTitle>
        <CardDescription>Your generosity helps us save more animals</CardDescription>
      </CardHeader>
      <CardContent>
        <form onSubmit={handleSubmit}>
          <div className="space-y-6">
            <div>
              <Label className="text-base">Donation Type</Label>
              <Tabs defaultValue="one-time" className="mt-2" onValueChange={setDonationType}>
                <TabsList className="grid w-full grid-cols-2">
                  <TabsTrigger
                    value="one-time"
                    className="data-[state=active]:bg-primary data-[state=active]:text-primary-foreground dark:data-[state=active]:bg-purple"
                  >
                    One-Time
                  </TabsTrigger>
                  <TabsTrigger
                    value="monthly"
                    className="data-[state=active]:bg-secondary data-[state=active]:text-secondary-foreground dark:data-[state=active]:bg-teal"
                  >
                    Monthly
                  </TabsTrigger>
                </TabsList>
              </Tabs>
            </div>

            <div>
              <Label className="text-base">Select Amount</Label>
              <div className="grid grid-cols-3 gap-3 mt-2">
                {["10", "25", "50", "100", "250", "custom"].map((amount) => (
                  <Button
                    key={amount}
                    type="button"
                    variant={donationAmount === amount ? "default" : "outline"}
                    className={`donation-amount-button ${
                      donationAmount === amount
                        ? "bg-primary text-primary-foreground dark:bg-purple dark:text-white"
                        : "border-primary/20 hover:bg-primary/10 dark:border-purple/20 dark:hover:bg-purple/10"
                    }`}
                    onClick={() => handleAmountSelect(amount)}
                  >
                    {amount === "custom" ? "Custom" : `$${amount}`}
                  </Button>
                ))}
              </div>

              {donationAmount === "custom" && (
                <div className="mt-3">
                  <Label htmlFor="customAmount">Enter Amount</Label>
                  <div className="relative mt-1">
                    <DollarSign className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                    <Input
                      id="customAmount"
                      type="number"
                      min="1"
                      step="1"
                      placeholder="Enter custom amount"
                      className="pl-10"
                      value={customAmount}
                      onChange={handleCustomAmountChange}
                    />
                  </div>
                </div>
              )}
            </div>

            <div>
              <Label className="text-base">Donation Information</Label>
              <div className="space-y-4 mt-2">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="firstName">First Name</Label>
                    <Input id="firstName" required />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="lastName">Last Name</Label>
                    <Input id="lastName" required />
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="email">Email</Label>
                  <Input id="email" type="email" required />
                </div>

                <div className="flex items-center space-x-2">
                  <Checkbox id="anonymous" />
                  <Label htmlFor="anonymous" className="text-sm font-normal">
                    Make this donation anonymous
                  </Label>
                </div>

                <div className="flex items-center space-x-2">
                  <Checkbox id="tribute" />
                  <Label htmlFor="tribute" className="text-sm font-normal">
                    Make this donation in honor/memory of someone
                  </Label>
                </div>
              </div>
            </div>

            <div>
              <Label className="text-base">Payment Method</Label>
              <RadioGroup defaultValue="card" className="mt-2">
                <div className="flex items-center space-x-2 border rounded-md p-3">
                  <RadioGroupItem value="card" id="card" />
                  <Label htmlFor="card" className="flex items-center">
                    <CreditCard className="h-4 w-4 mr-2" />
                    Credit/Debit Card
                  </Label>
                </div>
                <div className="flex items-center space-x-2 border rounded-md p-3 mt-2">
                  <RadioGroupItem value="paypal" id="paypal" />
                  <Label htmlFor="paypal">PayPal</Label>
                </div>
              </RadioGroup>

              <div className="mt-4 space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="cardNumber">Card Number</Label>
                  <Input id="cardNumber" placeholder="1234 5678 9012 3456" />
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="expiry">Expiration Date</Label>
                    <div className="flex">
                      <Select>
                        <SelectTrigger className="w-full rounded-r-none">
                          <SelectValue placeholder="MM" />
                        </SelectTrigger>
                        <SelectContent>
                          {Array.from({ length: 12 }, (_, i) => i + 1).map((month) => (
                            <SelectItem key={month} value={month.toString().padStart(2, "0")}>
                              {month.toString().padStart(2, "0")}
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                      <Select>
                        <SelectTrigger className="w-full rounded-l-none border-l-0">
                          <SelectValue placeholder="YY" />
                        </SelectTrigger>
                        <SelectContent>
                          {Array.from({ length: 10 }, (_, i) => new Date().getFullYear() + i).map((year) => (
                            <SelectItem key={year} value={year.toString().slice(-2)}>
                              {year.toString().slice(-2)}
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                    </div>
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="cvc">CVC</Label>
                    <Input id="cvc" placeholder="123" maxLength={4} />
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-8 p-4 bg-primary/5 dark:bg-purple/5 rounded-lg">
            <div className="flex justify-between items-center mb-2">
              <span className="text-muted-foreground">Donation Amount:</span>
              <span className="font-semibold text-lg">${finalAmount}</span>
            </div>
            {donationType === "monthly" && (
              <div className="flex items-center text-sm text-muted-foreground mb-2">
                <Calendar className="h-4 w-4 mr-1" />
                <span>Recurring monthly</span>
              </div>
            )}
            <Button
              type="submit"
              className="w-full mt-2 dark-gradient-button"
              disabled={isSubmitting || (donationAmount === "custom" && !customAmount)}
            >
              <Heart className="mr-2 h-4 w-4" />
              {isSubmitting ? "Processing..." : `Donate $${finalAmount}`}
            </Button>
          </div>
        </form>
      </CardContent>
      <CardFooter className="flex flex-col border-t pt-6">
        <div className="flex items-center justify-center text-sm text-muted-foreground mb-2">
          <Gift className="h-4 w-4 mr-2" />
          <span>Your donation may be tax-deductible</span>
        </div>
        <div className="text-xs text-center text-muted-foreground">
          PawsHome is a registered 501(c)(3) nonprofit organization
        </div>
      </CardFooter>
    </Card>
  )
}

export default DonationForm
