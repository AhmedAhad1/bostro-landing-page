import React from "react";
import { MdKeyboardArrowRight } from "react-icons/md";
export const TextView = () => {
  return (
    <div className="space-y-4">
      <h1 className="text-white uppercase tracking-wider text-lg">
        Outfit of the day
      </h1>
      <h2 className="text-5xl uppercase leading-snug">
        All your <br />
        <span className="tracking-wider font-bold">styles are here</span>
      </h2>

      <h3 className="max-w-lg font-light">
        Consectetur adipiscing elit. Cursus condimentum donec non dictum. Id et
        sed ac mauris, adipiscing tincidunt amet vel at. Quis lobortis id.
        consectetur adipiscing elit.
      </h3>

      <a
        href="#"
        className="!mt-10 uppercase font-normal bg-white px-14 py-2 text-center text-bostro-blue-10 shadow-md shadow-bostro-blue-10 rounded-full drop-shadow-lg active:translate-y-1 transition-all duration-200 inline-flex items-center space-x-2 hover:shadow-bostro-pink-10 "
      >
        <span className="">Try now</span>

        <MdKeyboardArrowRight className="text-2xl" />
      </a>
    </div>
  );
};
