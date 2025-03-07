import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ArrowUpRight, CirclePlay } from "lucide-react";
// import Image from "next/image";

const Hero = () => {
  return (
    <div className="min-h-[calc(100vh-7rem)] w-full flex flex-col items-center justify-center overflow-hidden border-b border-accent">
      <div className="w-full flex flex-col items-center justify-center gap-y-14 gap-x-10 px-6 py-12 lg:py-0 text-center">
        <div className="max-w-4xl flex flex-col items-center justify-center">
          <Badge className="rounded-full py-1 border-none">
            Just released v1.0.0
          </Badge>
          <h1 className="mt-6 max-w-[18ch] text-3xl xs:text-4xl sm:text-5xl lg:text-[3.75rem] xl:text-7xl font-bold !leading-[1.2] tracking-tight">
            Subscription Management for Content Creators
          </h1>
          <p className="mt-6 max-w-[60ch] xs:text-lg">
            Explore a collection of Shadcn UI blocks and components, ready to
            preview and copy. Streamline your development workflow with
            easy-to-implement examples.
          </p>
          <div className="mt-12 flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button
              size="lg"
              className="w-full sm:w-auto rounded-full text-base"
            >
              Get Started <ArrowUpRight className="!h-5 !w-5" />
            </Button>
            <Button
              variant="outline"
              size="lg"
              className="w-full sm:w-auto rounded-full text-base shadow-none"
            >
              <CirclePlay className="!h-5 !w-5" /> Watch Demo
            </Button>
          </div>
        </div>
        {/* <div className="relative lg:max-w-lg xl:max-w-xl w-full bg-accent rounded-xl aspect-square">
          <Image
            src="/placeholder.svg"
            fill
            alt=""
            className="object-cover rounded-xl"
          />
        </div> */}
      </div>
    </div>
  );
};

export default Hero;
