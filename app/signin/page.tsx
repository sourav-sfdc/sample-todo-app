import Link from "next/link";
import { redirect } from "next/navigation";
import { createClient } from "@/utils/supabase/server";
import { signin } from "@/actions/auth/actions";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { FaPhone } from "react-icons/fa6";
import { MdEmail } from "react-icons/md";


import {
    CardHeader,
    CardContent,
    CardFooter,
    Card,
} from "@/components/ui/card";
import BackgroundImage from "@/components/custom/background-image";

export default async function SignInPage() {
    const supabase = await createClient();
    const { data } = await supabase.auth.getUser();

    if (data?.user) {
        redirect("/");
    }

    return (
        <div className="relative h-screen w-screen overflow-hidden">
            <BackgroundImage/>
            <main className='relative z-10 flex min-h-screen flex-col items-center justify-center'>
                <Card className="w-full max-w-md">
                    <CardHeader>
                        <div className="flex flex-col items-center space-y-2">
                            <h1 className="text-3xl font-bold">Welcome</h1>
                            <p className="text-gray-500 dark:text-gray-400">
                                Enter your email below to login to your account
                            </p>
                        </div>
                    </CardHeader>
                    <CardContent className="space-y-6">
                        <form className="space-y-6">
                            <div className="space-y-2">
                                <Label htmlFor="email">Email</Label>
                                <Input
                                    id="email"
                                    name="email"
                                    placeholder="m@example.com"
                                    required
                                    type="email"
                                />
                            </div>
                            <div className="space-y-2">
                                <Label htmlFor="password">Password</Label>
                                <Input id="password" name="password" required type="password"/>
                            </div>
                            <Button formAction={signin} className="w-full">Sign in</Button>
                        </form>
                        <Separator/>
                        <div className="space-y-4">
                            <Link href="/phone-login">
                                <Button className="w-full" variant="outline">
                                <FaPhone className="w-4 h-4" />
                                    Sign in with Phone Number
                                </Button>
                            </Link>
                            <Separator/>
                            <Button className="w-full" variant="outline">
                            <MdEmail className="w-4 h-4" />
                                Sign in with Google
                            </Button>
                        </div>
                    </CardContent>
                    <CardFooter className="flex flex-col space-y-2">
                        <Link className="text-sm underline" href="/signup">
                            Don&apos;t have an account? Sign up here
                        </Link>
                    </CardFooter>
                </Card>
            </main>
        </div>
    );
}
