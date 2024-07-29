import React from "react";
import { cn } from "@/lib/utils";
import { InfiniteMovingCards } from "@/components/ui/infinite-moving-cards";
import { Globe } from "../globe";

export const SkeletonFour = () => {
  return (
    <div className="h-full flex flex-col items-center relative bg-white dark:bg-black mt-10">
      <InfiniteMovingCards speed="normal" direction="left">
        <MovingGrid />
      </InfiniteMovingCards>
      <InfiniteMovingCards speed="slow" direction="right">
        <MovingGrid />
      </InfiniteMovingCards>
      <InfiniteMovingCards speed="normal" direction="left">
        <MovingGrid />
      </InfiniteMovingCards>

      <Globe className="absolute -right-2 md:-right-40 -bottom-40" />
    </div>
  );
};

const MovingGrid = () => {
  return (
    <div className="flex gap-4 px-4">
      <WeddingFeature icon="📅" text="Date Planner" />
      <WeddingFeature icon="👰‍♀️" text="Attire Finder" />
      <WeddingFeature icon="🌸" text="Florist Connect" />
      <WeddingFeature icon="🍰" text="Catering Options" />
      <WeddingFeature icon="📷" text="Photographer Match" />
      <WeddingFeature icon="🎶" text="DJ Selector" />
      <WeddingFeature icon="🏩" text="Venue Explorer" />
      <WeddingFeature icon="💖" text="Invitation Designer" />
      <WeddingFeature icon="🍰" text="Cake Customizer" />
      <WeddingFeature icon="🚕" text="Transport Booker" />
    </div>
  );
};
const WeddingFeature: React.FC<{ icon: string; text: string }> = ({ icon, text }) => {
  return (
    <div className={cn(
      "space-x-2 min-w-32 flex justify-center items-center bg-white dark:bg-neutral-900 px-3 py-2 text-sm rounded-md shadow-[0px_2px_3px_-1px_rgba(0,0,0,0.1),0px_1px_0px_0px_rgba(25,28,33,0.02),0px_0px_0px_1px_rgba(25,28,33,0.08)]"
    )}>
      <span className="text-xl">{icon}</span>
      <span>{text}</span>
    </div>
  );
};