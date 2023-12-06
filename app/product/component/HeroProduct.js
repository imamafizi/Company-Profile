import React from "react";
import Image from "next/image";

const HeroProduct = () => {
  return (
    <section className="item-center top-0  flex h-screen flex-col xl:min-h-screen ">
      <div className="relative w-full">
        <div className="absolute -z-10 w-full bg-gray-900 ">
          <Image
            src="https://images.unsplash.com/photo-1605152276897-4f618f831968?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt="background image"
            className="cover h-screen w-full object-cover opacity-20 "
            quality={100}
            width={900}
            height={900}
          />
        </div>
        <div className="min-w-full pt-[200px]">
          <div className="mx-4 py-9 xl:mx-72">
            <svg
              className="mb-4 h-8 w-8 text-primary"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
              viewBox="0 0 18 14"
            >
              <path d="M6 0H2a2 2 0 0 0-2 2v4a2 2 0 0 0 2 2h4v1a3 3 0 0 1-3 3H2a1 1 0 0 0 0 2h1a5.006 5.006 0 0 0 5-5V2a2 2 0 0 0-2-2Zm10 0h-4a2 2 0 0 0-2 2v4a2 2 0 0 0 2 2h4v1a3 3 0 0 1-3 3h-1a1 1 0 0 0 0 2h1a5.006 5.006 0 0 0 5-5V2a2 2 0 0 0-2-2Z" />
            </svg>

            <h1 className="mt-3 font-mono text-3xl font-bold text-primary xl:text-5xl">
              Amarillo combines Customer Experience, Data Analytics, and
              ROI-oriented approaches to help our clients succesd through
              digital innovation
            </h1>
            <h2 className=" font-mono text-xs font-bold italic text-white xl:mt-16 xl:text-2xl">
              Crafting Digital Excellence-Elevate Your Presence with Amarillo's
              Premier Services
            </h2>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroProduct;
