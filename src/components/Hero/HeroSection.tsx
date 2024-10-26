import { ImageView } from "./ImageView";
import { TextView } from "./TextView";
import { RxDiscordLogo } from "react-icons/rx";
import { PiMessengerLogo } from "react-icons/pi";
import { RiTwitterXLine } from "react-icons/ri";
import { SocialMedia } from "./SocialMedia";
export const HeroSection = () => {
  return (
    <div className=" relative bg-cover bg-no-repeat bg-[url('bg.svg')]">
      <div className="flex flex-col space-y-20 h-screen max-w-screen-2xl mx-auto pt-[10vw] px-[4vw]">
        <div className="flex justify-between lg:items-start items-center">
          <div className="md:pt-10">
            <TextView />
          </div>
          <ImageView />
        </div>
        <div>
          <SocialMedia />
        </div>
      </div>
    </div>
  );
};
