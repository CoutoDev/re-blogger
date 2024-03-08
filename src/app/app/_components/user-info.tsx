"use client"

import { Avatar, AvatarFallback } from "@/components/ui/avatar"
import { Button } from "@/components/ui/button"
import { Session } from "next-auth"
import { signOut } from "next-auth/react"

type Props = {
  user: Session['user']
}
export function UserInfo({ user }: Props) {

  if (!user) return

  return (
    <div className="flex flex-col gap-4 items-center">
      <Avatar>
        <AvatarFallback>U</AvatarFallback>
      </Avatar>
      <span>{user?.email}</span>
      <Button onClick={() => signOut()}>
        Sign Out
      </Button>
    </div>
  )
}