"use client";
import { CircleCheck } from "lucide-react";

import { cn } from "@/src/lib/utils";
import { Button } from "@/src/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/src/components/ui/card";
import { useRouter } from "next/navigation";

type CardProps = React.ComponentProps<typeof Card> & {
  data?: {
    title: string;
    description: string;
    bgcolor: string;
    textcolor: string;
    price: number;
    subscriptiontype: string;
    content: { title: string }[];
  };
};

export function PricingCards({ className, data, ...props }: CardProps) {
  const router = useRouter();

  if (!data) {
    return null;
  }

  return (
    <Card
      className={cn(
        `w-[320px] h-[500px] bg-${data.bgcolor} text-${data.textcolor}`,
        className
      )}
      {...props}
    >
      <CardHeader>
        <CardTitle className="text-3xl font-extrabold dark:text-white">
          {data.title}
        </CardTitle>
        <CardDescription>{data.description}</CardDescription>
      </CardHeader>
      <CardContent className="grid gap-4">
        <div className="mb-4 font-extrabold dark:text-white">
          <div className="text-5xl">${data.price}</div>
          <span className="text-1xl">{data.subscriptiontype}</span>
        </div>
        <div className="mb-4">
          {data.content.map((data, index) => (
            <div
              key={index}
              className="mb-3 grid grid-cols-[25px_1fr] pb-4 last:mb-0 last:pb-0 items-center gap-1"
            >
              <div>
                <CircleCheck size={20} />
              </div>
              <div className="space-y-1">
                <p className="text-md font-medium leading-none">{data.title}</p>
              </div>
            </div>
          ))}
        </div>
      </CardContent>
      <CardFooter>
        <Button
          className={`w-full rounded-full mt-20 cursor-pointer`}
          onClick={() => router.push("/payment")}
        >
          Subscribe
        </Button>
      </CardFooter>
    </Card>
  );
}
