import { cn } from "@/lib/utils";
import { Fira_Sans } from "next/font/google";

const nato = Fira_Sans({
  subsets: ["latin"],
  weight: "800",
  preload: true,
});

const TopSection = ({ title }: { title: string }) => {
  return (
    <div className="space-y-4">
      <h1
        className={cn(
          "text-[18px] mt-4 text-gray-600 md:font-medium md:text-[32px] text-center md:text-left", // Center on mobile, left-align on desktop
          nato.className
        )}
      >
        {title}
      </h1>
    </div>
  );
};

export default TopSection;
