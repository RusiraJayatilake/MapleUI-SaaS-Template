import { GalleryVerticalEnd } from "lucide-react";

import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import Link from "next/link";

const ForgotPasswordPage = () => {
  return (
    <>
      <div className="flex min-h-svh flex-col items-center justify-center gap-6 bg-background p-6 md:p-10">
        <div className="w-full max-w-sm">
          <div className={cn("flex flex-col gap-6")}>
            <form>
              <div className="flex flex-col gap-6">
                <div className="flex flex-col items-center gap-2">
                  <Link
                    href="/"
                    className="flex flex-col items-center gap-2 font-medium"
                  >
                    <div className="flex h-8 w-8 items-center justify-center rounded-md">
                      <GalleryVerticalEnd className="size-6" />
                    </div>
                    <span className="sr-only">Reset Password</span>
                  </Link>
                  <h1 className="text-xl font-bold">Reset Password</h1>
                </div>
                <div className="flex flex-col gap-6">
                  <div className="grid gap-2">
                    <Label htmlFor="email">Email</Label>
                    <Input
                      id="email"
                      type="email"
                      placeholder="email"
                      required
                    />
                  </div>

                  <Button type="submit" className="w-full">
                    Reset
                  </Button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default ForgotPasswordPage;
