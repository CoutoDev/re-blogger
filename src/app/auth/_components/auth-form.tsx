'use client'

import { useForm } from "react-hook-form"
import Link from "next/link"


import { CardTitle, CardDescription, CardHeader, CardContent, Card } from "@/components/ui/card"
import { Label } from "@/components/ui/label"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"

export function AuthForm() {
  const form = useForm()

  const handleSubmit = form.handleSubmit((data) => {
    console.log(data)
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

