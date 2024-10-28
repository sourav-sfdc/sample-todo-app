"use client"
import React, { useState } from 'react';
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { verifyOtp, sendOtp } from '@/actions/auth/actions';

const PhoneLogin = () => {
  const [buttonClick, setButtonClick] = useState(false);
  const [phoneNo, setPhoneNo] = useState("");
  
  return (
    <>
    { !buttonClick && 
      <div className="flex flex-col items-center justify-center h-screen p-4">
        <h2 className="text-xl font-bold mb-4">Phone Login</h2>
          <div className="w-full max-w-xs">
            <form className="space-y-6">
              <Label htmlFor="phone" className="block text-sm font-medium text-gray-700">
                Phone Number
              </Label>
              <Input id="phone" name="phone" type="text" onChange={(e) => {setPhoneNo(e.target.value)}} placeholder="Enter Mobile Number" className="mt-1 block w-full"/>               
              <Button formAction={async (formData) => {sendOtp(formData); setButtonClick(true)}} className="mt-4 w-full">
                Get OTP
              </Button>
            </form>
          </div>
      </div>
    }
    { buttonClick && 
      <div className="flex flex-col items-center justify-center h-screen p-4">
        <h2 className="text-xl font-bold mb-4">Phone Login</h2>
          <div className="w-full max-w-xs">
            <form className="space-y-6">
              <Input type='hidden' name='phone' value={phoneNo}/>
              <Label htmlFor="otp" className="block text-sm font-medium text-gray-700">
                OTP
              </Label>
              <Input id="otp" name="otp" type="text" placeholder="Enter Otp" className="mt-1 block w-full"/>               
              <Button formAction={verifyOtp} className="mt-4 w-full">
                Verify OTP
              </Button>
            </form>
          </div>
      </div>
    }
    </>
  );
};

export default PhoneLogin;