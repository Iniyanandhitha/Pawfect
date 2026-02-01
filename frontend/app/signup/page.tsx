import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Checkbox } from "@/components/ui/checkbox"

export default function SignUpPage() {
  return (
    <div className="container py-12 md:py-16">
      <div className="flex flex-col items-center justify-center">
        <div className="mx-auto flex w-full flex-col justify-center space-y-6 sm:w-[350px] md:w-[550px]">
          <div className="flex flex-col space-y-2 text-center">
            <h1 className="text-3xl font-bold gradient-text">Create an Account</h1>
            <p className="text-muted-foreground">
              Join our community to find your perfect pet companion or help pets find their forever homes
            </p>
          </div>

          <Tabs defaultValue="adopter" className="w-full">
            <TabsList className="grid w-full grid-cols-2 mb-8">
              <TabsTrigger
                value="adopter"
                className="data-[state=active]:bg-primary data-[state=active]:text-primary-foreground"
              >
                I want to adopt
              </TabsTrigger>
              <TabsTrigger
                value="provider"
                className="data-[state=active]:bg-secondary data-[state=active]:text-secondary-foreground"
              >
                I have pets to rehome
              </TabsTrigger>
            </TabsList>

            <TabsContent value="adopter">
              <Card className="border-2 border-primary/10 hover:border-primary/20 transition-colors">
                <CardHeader>
                  <CardTitle>Adopter Account</CardTitle>
                  <CardDescription>Create an account to browse, favorite, and apply to adopt pets</CardDescription>
                </CardHeader>
                <CardContent>
                  <form className="space-y-6">
                    <div className="space-y-2">
                      <Label htmlFor="fullName">Full Name</Label>
                      <Input id="fullName" placeholder="Enter your full name" />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="email">Email</Label>
                      <Input id="email" type="email" placeholder="Enter your email" />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="password">Password</Label>
                      <Input id="password" type="password" placeholder="Create a password" />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="confirmPassword">Confirm Password</Label>
                      <Input id="confirmPassword" type="password" placeholder="Confirm your password" />
                    </div>

                    <div className="flex items-center space-x-2">
                      <Checkbox id="terms" />
                      <Label htmlFor="terms">I agree to the terms and conditions</Label>
                    </div>

                    <Button type="submit" className="w-full bg-primary hover:bg-primary/90">
                      Create Adopter Account
                    </Button>
                  </form>
                </CardContent>
                <CardFooter className="flex flex-col space-y-4 border-t pt-6">
                  <div className="text-sm text-muted-foreground text-center">
                    By creating an account, you agree to our{" "}
                    <Link href="/terms" className="underline underline-offset-4 hover:text-primary">
                      Terms of Service
                    </Link>{" "}
                    and{" "}
                    <Link href="/privacy" className="underline underline-offset-4 hover:text-primary">
                      Privacy Policy
                    </Link>
                    .
                  </div>
                  <div className="text-sm text-center">
                    Already have an account?{" "}
                    <Link href="/signin" className="text-primary hover:underline">
                      Sign in
                    </Link>
                  </div>
                </CardFooter>
              </Card>
            </TabsContent>

            <TabsContent value="provider">
              <Card className="border-2 border-secondary/10 hover:border-secondary/20 transition-colors">
                <CardHeader>
                  <CardTitle>Pet Provider Account</CardTitle>
                  <CardDescription>Create an account to list pets for adoption and manage applications</CardDescription>
                </CardHeader>
                <CardContent>
                  <form className="space-y-6">
                    <div className="space-y-2">
                      <Label htmlFor="providerName">Full Name</Label>
                      <Input id="providerName" placeholder="Enter your full name" />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="providerEmail">Email</Label>
                      <Input id="providerEmail" type="email" placeholder="Enter your email" />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="providerPassword">Password</Label>
                      <Input id="providerPassword" type="password" placeholder="Create a password" />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="providerConfirmPassword">Confirm Password</Label>
                      <Input id="providerConfirmPassword" type="password" placeholder="Confirm your password" />
                    </div>

                    <div className="flex items-center space-x-2">
                      <Checkbox id="providerTerms" />
                      <Label htmlFor="providerTerms">I agree to the terms and conditions</Label>
                    </div>

                    <Button type="submit" className="w-full bg-secondary hover:bg-secondary/90">
                      Create Provider Account
                    </Button>
                  </form>
                </CardContent>
                <CardFooter className="flex flex-col space-y-4 border-t pt-6">
                  <div className="text-sm text-muted-foreground text-center">
                    By creating an account, you agree to our{" "}
                    <Link href="/terms" className="underline underline-offset-4 hover:text-primary">
                      Terms of Service
                    </Link>{" "}
                    and{" "}
                    <Link href="/privacy" className="underline underline-offset-4 hover:text-primary">
                      Privacy Policy
                    </Link>
                    .
                  </div>
                  <div className="text-sm text-center">
                    Already have an account?{" "}
                    <Link href="/signin" className="text-primary hover:underline">
                      Sign in
                    </Link>
                  </div>
                </CardFooter>
              </Card>
            </TabsContent>
          </Tabs>
        </div>
      </div>
    </div>
  )
}
