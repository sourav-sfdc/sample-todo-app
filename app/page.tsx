import { redirect } from 'next/navigation'
import { createClient } from '@/utils/supabase/server'
import SignOutButton from "@/components/auth/signout-button";

export default async function Home() {
  const supabase = await createClient()

  const { data, error } = await supabase.auth.getUser()
  if (error || !data?.user) {
    redirect('/signin')
  }

  return (
      <div
          className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
          <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start">
              <p>Hello {data.user.email}</p>
              <SignOutButton />

          </main>
      </div>
)

}
