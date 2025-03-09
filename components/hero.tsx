import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ArrowUpRight, CirclePlay } from "lucide-react";
// import Image from "next/image";

import { BiLogoTailwindCss, BiLogoTypescript } from "react-icons/bi";
import { RiNextjsFill } from "react-icons/ri";
import { SiShadcnui } from "react-icons/si";

const Hero = () => {
  const heroIcons = [
    { icon: <RiNextjsFill size={45} /> },
    { icon: <BiLogoTypescript size={45} /> },
    { icon: <BiLogoTailwindCss size={45} /> },
    { icon: <SiShadcnui size={45} /> },
  ];

  return (
    <div className="pt-[5rem] md:pt-[6rem] lg:pt-[7rem] pb-12 md:pb-16 lg:pb-20 min-h-screen flex flex-col items-center justify-center overflow-hidden px-4 sm:px-8">
      <div className="w-full flex flex-col items-center justify-center gap-y-10 md:gap-6 lg:gap-8 px-6 py-12 lg:py-0 text-center">
        <div className="max-w-5xl flex flex-col items-center justify-center">
          <Badge className="rounded-full py-1 px-3 border-none text-sm sm:text-base md:text-sm">
            Just released v1.0.0
          </Badge>
          <h1 className="mt-6 max-w-[22ch] text-3xl xs:text-4xl sm:text-5xl md:text-5xl lg:text-6xl xl:text-7xl font-bold !leading-[1.2] tracking-tight">
            MapleUI - SaaS Frontend Template
          </h1>
          <p className="mt-6 max-w-[70ch] text-base sm:text-lg md:text-lg lg:text-xl leading-relaxed text-gray-700">
            Explore a collection of Shadcn UI blocks and components, ready to
            preview and copy. Streamline your development workflow with
            easy-to-implement examples.
          </p>

          <div className="mt-10 flex flex-col sm:flex-row md:flex-row items-center justify-center gap-4 w-full md:w-auto">
            <Button
              size="lg"
              className="w-full md:w-auto rounded-full text-base sm:text-lg px-6"
            >
              Get Started <ArrowUpRight className="!h-5 !w-5" />
            </Button>
            <Button
              variant="outline"
              size="lg"
              className="w-full md:w-auto rounded-full text-base sm:text-lg shadow-none px-6"
            >
              <CirclePlay className="!h-5 !w-5" /> Watch Demo
            </Button>
          </div>

          <div className="mt-12">
            <p className="text-sm sm:text-base md:text-lg text-gray-500 mb-2">
              Built with
            </p>
            <div className="flex flex-wrap items-center justify-center gap-4">
              {heroIcons.map((value, index) => (
                <div
                  className="w-10 h-10 sm:w-12 sm:h-12 md:w-14 md:h-14 flex items-center justify-center"
                  key={index}
                >
                  {value.icon}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
