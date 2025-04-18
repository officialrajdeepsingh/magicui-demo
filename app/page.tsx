import { ShimmerButton } from "@/components/magicui/shimmer-button";
import { AuroraText } from "@/components/magicui/aurora-text";
import { InteractiveHoverButton } from "@/components/magicui/interactive-hover-button";
import { AvatarCircles } from "@/components/magicui/avatar-circles";

const avatars = [
  {
    imageUrl: "https://avatars.githubusercontent.com/u/16860528",
    profileUrl: "https://github.com/dillionverma",
  },
  {
    imageUrl: "https://avatars.githubusercontent.com/u/20110627",
    profileUrl: "https://github.com/tomonarifeehan",
  },
  {
    imageUrl: "https://avatars.githubusercontent.com/u/106103625",
    profileUrl: "https://github.com/BankkRoll",
  },
  {
    imageUrl: "https://avatars.githubusercontent.com/u/59228569",
    profileUrl: "https://github.com/safethecode",
  },
  {
    imageUrl: "https://avatars.githubusercontent.com/u/59442788",
    profileUrl: "https://github.com/sanjay-mali",
  },
  {
    imageUrl: "https://avatars.githubusercontent.com/u/89768406",
    profileUrl: "https://github.com/itsarghyadas",
  },
];
export default function Home() {
  return (
    <div className="mx-auto container px-5 py-10 md:px-10 ">
      <div className="mx-auto text-center  mb-8 w-full max-w-3xl  md:mb-12 lg:mb-16">
        <AuroraText className="my-3 text-center text-3xl font-bold sm:text-4xl md:text-5xl lg:text-6xl">
          Simplify Meeting Scheduling
        </AuroraText>
        <span className="mx-auto text-xl">
          {" "}
          Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam .
        </span>
        <AvatarCircles
          className="mx-auto justify-center items-center my-4"
          numPeople={99}
          avatarUrls={avatars}
        />
        <div className="max-w-md mx-auto flex justify-around">
          <InteractiveHoverButton className="h-12 w-36 rounded-full bg-background text-foreground">
            Get Started
          </InteractiveHoverButton>
          <ShimmerButton className="h-12">Watch Demo</ShimmerButton>
        </div>
      </div>
    </div>
  );
}
