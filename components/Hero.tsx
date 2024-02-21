import React from "react";
import Image from "next/image";
import Button from "./Button";

const Hero = () => {
  return (
    <>
      <section className="max-container padding-container flex flex-col gap-20 py-10 md:gap-28 lg:py:20 xl:flex-row ">
        <div className="hero-map" />

        <div className=" relative z-20 flex flex-1 flex-col xl:w-1/2">
          <Image src="/camp.svg" alt="camp" width={50} height={50} />
          <h1 className=" bold-52 lg:bold-72">Camp Exotica</h1>
          <p className=" regular-16 mt-6  text-gray-30 xl:max-[520px]:">
            We want to be on each of your journeys seeking the satisfaction of
            seeing the incorruptible beauty of nature. We can help you on an
            adventure around the world in just one app
          </p>
          <div className=" my-11 flex flex-wrap gap-5">
            <div className="flex items-center gap-2">
              {Array(5)
                .fill(1)
                .map((_, index) => (
                  <Image
                    key={index}
                    src="/star.svg"
                    alt="star"
                    width={24}
                    height={24}
                  />
                ))}
              <p className=" bold-16 lg:bold-20 text-blue-70">
                198K
                <span className=" regular-16 lg:regular-20 ml-1">
                  {" "}
                  Excellent Reviews
                </span>
              </p>
            </div>

            <div className=" flex flex-col  w-full gap-3 sm:flex-row">
              <Button type="button" title="Download App" variant="btn_green" />

              <Button
                type="button"
                title="How we work"
                icon="/play.svg"
                variant="btn_white_text"
              />
            </div>
          </div>
        </div>
        <div className=" relative flex flex-1 items-start">
          <div className=" relative w-[268px] flex flex-col gap-8 rounded-3xl bg-green-90 px-7 py-8 z-20">
            <div className=" flex flex-col">
              <div className="flexBetween">
                <p className=" regular-16 text-gray-20">Location</p>
                <Image src="/close.svg" alt="close" width={24} height={24} />
              </div>
              <p className=" text-white bold-20">Harihar Fort</p>
            </div>

            <div className="flexBetween">
              <div className=" flex flex-col">
                <p className=" regular-16 text-gray-20">Distance</p>
                <p className=" text-white bold-20">388 mi</p>
              </div>

              <div className=" flex flex-col">
                <p className=" regular-16 text-gray-20">Elevation</p>
                <p className=" text-white bold-20">1120 m</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Hero;
