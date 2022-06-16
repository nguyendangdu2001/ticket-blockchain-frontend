import React, { useEffect, useRef } from "react";

import styled from "styled-components";
import img from "./guitarra.001.jpeg";
// import SearchBar from "./SearchBar";
// import UpcomingEventSection from "./UpcomingEventSection";
import partyIcon from "@assets/Succes.png";
// import LiquidShape from "./LiquidShape";
import { Link } from "react-router-dom";
import SearchBar from "@modules/events/components/SearchBar";
import UpcomingEventSection from "@modules/events/components/UpcomingEventSection";
import LiquidShape from "@modules/events/components/LiquidShape";

const Home = ({ className }) => {
  const text = useRef(null);
  const button = useRef(null);
  const textButton = useRef(null);

  return (
    <div className={`${className} mx-auto w-full space-y-10`}>
      <div className=" h-[calc(100vh-88px)] rounded-lg bg-cover flex justify-between mx-1 lg:px-12 lg:py-16 overflow-hidden">
        <div className="items-center justify-center w-full pl-10 my-auto space-y-6 lg:pr-40 content lg:w-1/2">
          <div className="relative pl-3">
            <div className="text-2xl font-semibold tracking-widest uppercase dark:text-white first-letter:text-blue-500 first-letter:textshadow-neon first-letter:text-4xl">
              EventBuzz
            </div>
            <div
              className="text-6xl font-bold leading-tight uppercase dark:text-white banner-text"
              ref={text}
              id="banner-text"
            >
              Event around you
            </div>
            <div className="absolute top-0 bottom-0 w-1 bg-blue-500 rounded-full -left-10 bg-blue animate-flicker"></div>
          </div>

          <Link
            to="/signup"
            className="inline-block px-16 py-5 overflow-hidden text-xl font-semibold transition-all rounded-lg shadow-lg bg-gradient-to-tr from-red-700 to-blue-600 hover:scale-105 text-gray-50 hover:shadow-neon"
            ref={button}
          >
            <div ref={textButton}>Start your journey</div>
          </Link>
        </div>
        <div className="relative hidden w-1/2 lg:block">
          <LiquidShape className="absolute z-0 w-10/12 h-auto top-10 left-10"></LiquidShape>
          <img
            src={partyIcon}
            alt=""
            className="absolute z-10 w-10/12 animate-floating"
          />
          <div
            className="absolute h-20 rounded-full shadow w-72 bg-gray-50 left-1/2 top-20 animate-floating"
            style={{ animationDelay: "1s" }}
          ></div>
          <div
            className="absolute left-0 h-20 rounded-full shadow w-72 bg-gray-50 bottom-20 animate-floating"
            style={{ animationDelay: "0.5s" }}
          ></div>
        </div>
      </div>
      <div className="container px-3 mx-auto space-y-16 lg:px-24">
        {/* <SearchBar /> */}
        <UpcomingEventSection />
      </div>
    </div>
  );
};

export default styled(Home)`
  .heroSection {
    background-image: url(${img});
    background-repeat: no-repeat;
  }
`;
