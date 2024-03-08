'use client'

import { useForm } from "react-hook-form"
import { signIn } from "next-auth/react"
import Link from "next/link"


import { CardTitle, CardDescription, CardHeader, CardContent, Card } from "@/components/ui/card"
import { Label } from "@/components/ui/label"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { toast } from "@/components/ui/use-toast"

export function AuthForm() {
  const form = useForm()

  const handleSubmit = form.handleSubmit(async (data) => {

    try {
      await signIn("email", { email: data.email, redirect: false })
      toast({
        title: "Check your email",
        description: "We've sent you a login link. Please check your email.",
      })
    } catch (error) {
      toast({
        title: "Error",
        description: "Something went wrong. Please try again later.",
      })
    }
  })

  return (
    <Card className="mx-auto max-w-sm">
      <CardHeader className="space-y-1">
        <CardTitle className="text-2xl font-bold">Magic Link</CardTitle>
        <CardDescription>Enter your email below to receive a magic link to login</CardDescription>
      </CardHeader>
      <CardContent>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="email">Email</Label>
            <Input id="email" placeholder="m@example.com" required type="email" {...form.register("email")} />
          </div>
          <Button className="w-full">Send Magic Link</Button>
        </form>
        <div className="mt-4 text-center text-sm">
          Already have a magic link?
          <Link className="underline" href="#">
            Login with Magic Link
          </Link>
        </div>
      </CardContent>
    </Card>
  )
}

