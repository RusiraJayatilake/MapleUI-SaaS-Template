import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";

import { FaPaypal, FaGooglePay, FaApplePay } from "react-icons/fa";
import { ChevronLeft } from "lucide-react";
import Link from "next/link";

const PaymentPage = () => {
  const paymentOptions = [
    {
      label: "Paypal",
      icon: <FaPaypal size={30} />,
    },
    {
      label: "Google",
      icon: <FaGooglePay size={30} />,
    },
    {
      label: "Apple",
      icon: <FaApplePay size={30} />,
    },
  ];

  return (
    <div className="flex flex-row justify-center items-center min-h-screen">
      <div className="relative p-6">
        <Link href={"/pricing"}>
          <Button
            variant="outline"
            size="icon"
            className="absolute top-0 left-0 m-2 px-3 py-1 text-sm rounded-lg"
          >
            <ChevronLeft />
          </Button>
        </Link>

        <Card className="w-[420px] h-[auto]">
          <CardHeader>
            <CardTitle>Payment Method</CardTitle>
            <CardDescription>
              Add a new payment method to your account
            </CardDescription>
          </CardHeader>
          <CardContent>
            <form>
              <div className="grid w-full items-center gap-4">
                {/* Payment options */}
                <div className="flex flex-row gap-6 items-center justify-center">
                  {paymentOptions.map((value, index) => (
                    <div className="flex flex-col space-y-1.5" key={index}>
                      <Button
                        variant="outline"
                        className="w-[80px] h-[80px] flex flex-col items-center justify-center gap-y-2"
                      >
                        {value.icon}
                        <Label>{value.label}</Label>
                      </Button>
                    </div>
                  ))}
                </div>

                {/* Customer details */}
                <div className="flex flex-col space-y-1.5">
                  <Label htmlFor="name">Name</Label>
                  <Input id="name" placeholder="First & Last" />
                </div>
                <div className="flex flex-col space-y-1.5">
                  <Label htmlFor="country">Country</Label>
                  <Input id="country" />
                </div>

                {/* Card details */}
                <div className="flex flex-col space-y-1.5">
                  <Label htmlFor="name">Card Number</Label>
                  <Input id="name" />
                </div>

                <div className="flex flex-row gap-2">
                  <div className="flex flex-col space-y-1.5">
                    <Label htmlFor="name">Expires</Label>
                    <Input id="name" />
                  </div>
                  <div className="flex flex-col space-y-1.5">
                    <Label htmlFor="name">Year</Label>
                    <Input id="name" />
                  </div>
                  <div className="flex flex-col space-y-1.5">
                    <Label htmlFor="name">CVC</Label>
                    <Input id="name" />
                  </div>
                </div>
              </div>
            </form>
          </CardContent>
          <CardFooter className="flex justify-between">
            <Button className="w-full">Continue</Button>
          </CardFooter>
        </Card>
      </div>
    </div>
  );
};

export default PaymentPage;
