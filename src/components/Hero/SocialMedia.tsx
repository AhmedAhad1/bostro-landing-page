import React from "react";
import { PiMessengerLogo } from "react-icons/pi";
import { RiTwitterXLine } from "react-icons/ri";
import { RxDiscordLogo } from "react-icons/rx";
import { HiOutlineMailOpen } from "react-icons/hi";

export const SocialMedia = () => {
  return (
    <div className="flex justify-center ">
      <div className="inline-flex justify-center space-x-4 text-3xl text-white bg-bostro-blue-10 px-16 py-2 rounded-tr-lg rounded-bl-lg drop-shadow-xl">
        <RxDiscordLogo className="hover:-translate-y-1 p-1 transition-all rounded-full" />
        <HiOutlineMailOpen className="hover:-translate-y-1 bg-bostro-pink-10 p-1 rounded-full transition-all" />
        <PiMessengerLogo className="hover:-translate-y-1 p-1 rounded-full transition-all" />
      </div>
    </div>
  );
};
