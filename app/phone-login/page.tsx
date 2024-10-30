"use client";
import React, { useState } from 'react';
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { verifyOtp, sendOtp } from '@/actions/auth/actions';
import BackgroundImage from "@/components/custom/background-image";
import {
  InputOTP,
  InputOTPGroup,
  InputOTPSlot,
} from "@/components/ui/input-otp"


import {
  Card,
  CardHeader,
  CardContent,
  CardFooter
} from "@/components/ui/card";

const PhoneLogin = () => {
  const [buttonClick, setButtonClick] = useState(false);
  const [phoneNo, setPhoneNo] = useState("");
  const [otp, setotp] = React.useState("")

  return (
    <div className="relative h-screen w-screen overflow-hidden">
      <BackgroundImage />
      <main className='relative z-10 flex min-h-screen flex-col items-center justify-center'>
        <Card className="w-full max-w-md">
          <CardHeader>
            <div className="flex flex-col items-center space-y-2">
              <h2 className="text-3xl font-bold">Phone Login</h2>
              <p className="text-gray-500 dark:text-gray-400">
                {buttonClick ? "Enter the OTP sent to your phone" : "Enter your phone number to receive an OTP"}
              </p>
            </div>
          </CardHeader>

          <CardContent className="space-y-6">
            {!buttonClick ? (
              <form className="space-y-6">
                <div className="space-y-2">
                  <Label htmlFor="phone">Phone Number</Label>
                  <Input
                    id="phone"
                    name="phone"
                    type="text"
                    onChange={(e) => setPhoneNo(e.target.value)}
                    placeholder="Enter Mobile Number"
                    required
                  />
                </div>
                <Button
                  formAction={async (formData) => {
                    await sendOtp(formData);
                    setButtonClick(true);
                  }}
                  className="w-full"
                >
                  Get OTP
                </Button>
              </form>
            ) : (
              <form className="space-y-6">
                <Input type="hidden" name="phone" value={phoneNo} />
                <div className="space-y-4">
                  <Label htmlFor="otp">OTP</Label>
                    <InputOTP
                        id="otp"
                        maxLength={6}
                        value={otp}
                        name="otp"
                        onChange={(value) => setotp(value)}
                      >
                        <InputOTPGroup>
                          <InputOTPSlot index={0} className="w-16 h-14 p-2 text-lg"/>
                          <InputOTPSlot index={1} className="w-16 h-14 p-2 text-lg"/>
                          <InputOTPSlot index={2} className="w-16 h-14 p-2 text-lg"/>
                          <InputOTPSlot index={3} className="w-16 h-14 p-2 text-lg"/>
                          <InputOTPSlot index={4} className="w-16 h-14 p-2 text-lg"/>
                          <InputOTPSlot index={5} className="w-16 h-14 p-2 text-lg"/>
                        </InputOTPGroup>
                    </InputOTP>
                </div>
                <Button
                  formAction={verifyOtp}
                  className="w-full"
                >
                  Verify OTP
                </Button>
              </form>
            )}
          </CardContent>

          <CardFooter className="flex flex-col items-center space-y-2">
            <p className="text-sm text-gray-500 dark:text-gray-400">
              Need help? <a href="/support" className="underline">Sign in here</a>
            </p>
          </CardFooter>
        </Card>
      </main>
    </div>
  );
};

export default PhoneLogin;
