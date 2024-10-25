import Link from "next/link";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { CardHeader, CardContent, CardFooter, Card } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";

export default function PhoneLoginPage() {
    return (
        <main className="flex min-h-screen flex-col items-center justify-center">
            <Card className="w-full max-w-md">
                <CardHeader>
                    <div className="flex flex-col items-center space-y-2">
                        <h1 className="text-3xl font-bold">Sign in with Phone Number</h1>
                        <p className="text-gray-500 dark:text-gray-400">
                            Enter your phone number to get an OTP
                        </p>
                    </div>
                </CardHeader>
                <CardContent className="space-y-6">
                    <form className="space-y-6">
                        <div className="space-y-2">
                            <Label htmlFor="phone">Phone Number</Label>
                            <Input
                                id="phone"
                                name="phone"
                                placeholder="+1 (555) 123-4567"
                                required
                                type="tel"
                            />
                        </div>
                        {/* Button to Get OTP */}
                        <Button className="w-full">Get OTP</Button>
                    </form>
                    <Separator />
                </CardContent>
                <CardFooter className="flex flex-col space-y-2">
                    <Link className="text-sm underline" href="/signup">
                        Don&apos;t have an account? Sign up here
                    </Link>
                </CardFooter>
            </Card>
        </main>
    );
}
