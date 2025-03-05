import { cn } from "@/src/lib/utils";

import { Button } from "@/src/components/ui/button";
import { Label } from "@/src/components/ui/label";
import { Input } from "@/src/components/ui/input";
import {
  Card,
  CardHeader,
  CardTitle,
  CardContent,
  CardDescription,
} from "@/src/components/ui/card";

import { FaPaypal, FaApple, FaRegCreditCard } from "react-icons/fa6";

const PaymentCard = () => {
  return (
    <Card>
      <CardHeader>
        <CardTitle className="text-3xl font-extrabold dark:text-white">
          Payment Method
        </CardTitle>
        <CardDescription>
          Add a new payment method to your account.
        </CardDescription>
      </CardHeader>
      <CardContent>
        <form className={cn("flex flex-col gap-6")}>
          <div className="grid grid-cols-3 gap-2">
            <div className="grid">
              <Button variant="outline" role="radio">
                <Label htmlFor="card">
                  <FaRegCreditCard />
                  Card
                </Label>
              </Button>
            </div>
            <div className="grid">
              <Button variant="outline" role="radio">
                <Label htmlFor="paypal">
                  <FaPaypal />
                  Paypal
                </Label>
              </Button>
            </div>
            <div className="grid">
              <Button variant="outline" role="radio">
                <Label htmlFor="apple">
                  <FaApple />
                  Apple
                </Label>
              </Button>
            </div>
          </div>

          <div className="grid gap-6">
            <div className="grid gap-2">
              <Label htmlFor="name">Name</Label>
              <Input id="name" type="text" placeholder="First & Last" />
            </div>
            <div className="grid gap-2">
              <Label htmlFor="city">City</Label>
              <Input id="city" type="text" />
            </div>
            <div className="grid gap-2">
              <Label htmlFor="card">Card number</Label>
              <Input id="card" type="text" />
            </div>

            <div className="grid grid-cols-3 gap-2">
              <div className="grid gap-y-2">
                <Label htmlFor="expires">Expires</Label>
                <Input id="expires" type="text" placeholder="month" />
              </div>
              <div className="grid gap-y-2">
                <Label htmlFor="year">Year</Label>
                <Input id="year" type="text" placeholder="year" />
              </div>
              <div className="grid gap-y-2">
                <Label htmlFor="cvc">CVC</Label>
                <Input id="cvc" type="text" placeholder="cvc" />
              </div>
            </div>
            <Button type="submit" className="w-full">
              Continue
            </Button>
          </div>
        </form>
      </CardContent>
    </Card>
  );
};

export default PaymentCard;
