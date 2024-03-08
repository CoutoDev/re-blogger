import { Avatar, AvatarFallback } from "@/components/ui/avatar"
import { Button } from "@/components/ui/button"
import { auth } from "@/services/auth"
import { UserInfo } from "./_components/user-info"


export default async function App() {
  const session = await auth()

  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-24">
      <UserInfo user={session?.user} />
    </main>
  )
}