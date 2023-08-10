import React from "react";
import "./HeroSection.css";
import ReactPlayer from "react-player";
import heroVideo from "../../assets/hero-video/video.mp4";

export const HeroSection = () => {
  return (
    <div className="bg-yellow-100 mt-10 pt-20 pb-10">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col gap-8 lg:flex-row items-center">
          <div className="lg:w-1/2">
            <h1 className="text-4xl text-red-600 lg:text-4xl xl:text-5xl font-bold leading-none">
              Weavering Premium
            </h1>
            <h1 className="text-3xl text-gray-600 lg:text-3xl xl:text-4xl font-bold leading-none">
              Experiences
            </h1>
            <p className="text-xl text-gray-600 font-semibold mb-8">
              Where Luxury Meets Tranquility: Your Ultimate Retreat Awaits!
            </p>
          </div>
          <div className="lg:w-1/2 lg:ml-12 shadow-3xl rounded-lg">
            <ReactPlayer className="shadow-xl"
              url={heroVideo}
              playing
              loop
              muted
              width="100%"
              height="100%"
            />
          </div>
        </div>
      </div>
    </div>
  );
};
