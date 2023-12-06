import Link from "next/link";
import React from "react";
import { MdArrowForward } from "react-icons/md";

const Testimoni = () => {
  return (
    <section class="bg-white ">
      <div class="container px-6 py-10 mx-auto">
        <h1 class="text-2xl font-bold text-center text-tred capitalize lg:text-3xl font-mono ">
          Our <span class="text-secondary ">Customer</span> Stories
        </h1>

        <p class="max-w-2xl mx-auto mt-6 text-center text-gray-500 ">
          Elevated Excellence Awaits: Experience Unparalleled Service Beyond
          Expectations Here.
        </p>

        <section class="grid grid-cols-1 gap-8 mt-8 xl:mt-12 lg:grid-cols-2 xl:grid-cols-2">
          <div class="p-8 border rounded-lg ">
            <svg
              className="mb-4 h-8 w-8 text-secondary"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
              viewBox="0 0 18 14"
            >
              <path d="M6 0H2a2 2 0 0 0-2 2v4a2 2 0 0 0 2 2h4v1a3 3 0 0 1-3 3H2a1 1 0 0 0 0 2h1a5.006 5.006 0 0 0 5-5V2a2 2 0 0 0-2-2Zm10 0h-4a2 2 0 0 0-2 2v4a2 2 0 0 0 2 2h4v1a3 3 0 0 1-3 3h-1a1 1 0 0 0 0 2h1a5.006 5.006 0 0 0 5-5V2a2 2 0 0 0-2-2Z" />
            </svg>
            <p class="leading-loose text-gray-500 ">
              “Choosing Amarillo was a game-changer for our digital and creative
              landscape. Their commitment to excellence translates into tangible
              results, from innovative digital strategies to extraordinary
              culinary creations for our F&B ventures. Amarillo isn't just a
              service provider; they're partners in our success story, standing
              out as a beacon of creativity, innovation, and unwavering
              commitment to client satisfaction in a crowded market.”.
            </p>

            <div class="flex items-center mt-8 -mx-2">
              {/* <img class="object-cover mx-2 rounded-full w-14 shrink-0 h-14 ring-4 ring-gray-300 " src="https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=880&q=80" alt=""> */}

              <div class="mx-2">
                <h1 class="font-semibold text-gray-800 ">Mikuy</h1>
                <span class="text-sm text-gray-500">CTO, Mikuy Sejahtera</span>
              </div>
            </div>
          </div>

          <div class="p-8 border rounded-lg ">
            <svg
              className="mb-4 h-8 w-8 text-secondary"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
              viewBox="0 0 18 14"
            >
              <path d="M6 0H2a2 2 0 0 0-2 2v4a2 2 0 0 0 2 2h4v1a3 3 0 0 1-3 3H2a1 1 0 0 0 0 2h1a5.006 5.006 0 0 0 5-5V2a2 2 0 0 0-2-2Zm10 0h-4a2 2 0 0 0-2 2v4a2 2 0 0 0 2 2h4v1a3 3 0 0 1-3 3h-1a1 1 0 0 0 0 2h1a5.006 5.006 0 0 0 5-5V2a2 2 0 0 0-2-2Z" />
            </svg>
            <p class="leading-loose text-secondary ">
              “Thriving in a saturated market, Amarillo emerges not merely as a
              standout performer but as a trailblazer, illuminating the path of
              innovation and quality. Their exceptional commitment to pushing
              boundaries is evident in every endeavor, leaving an indelible mark
              that resonates across the diverse industries they passionately
              navigate. Amarillo's unwavering dedication sets them apart,
              ensuring that their impact continues to shape and redefine the
              standards of excellence in the competitive landscape they tread.”.
            </p>

            <div class="flex items-center mt-8 -mx-2">
              {/* <img class="object-cover mx-2 rounded-full w-14 shrink-0 h-14 ring-4 ring-gray-300 " src="https://images.unsplash.com/photo-1488508872907-592763824245?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80" alt=""> */}

              <div class="mx-2">
                <h1 class="font-semibold text-gray-800 ">Tegar Itmammul </h1>
                <span class="text-sm text-gray-500">
                  Founder at Binal Indonesia
                </span>
              </div>
            </div>
          </div>
        </section>
        <Link href={`/contact`} class="flex items-center justify-center ">
          <button class="w-full flex outline  px-5 py-2 mt-6 text-sm tracking-wider text-secondary uppercase transition-colors duration-300 transform  rounded-lg lg:w-auto hover:bg-secondary hover:text-white ">
            start project with us
            <MdArrowForward className="ml-2 my-1" />
          </button>
        </Link>
        {/* <h1 class="text-2xl font-bold text-center text-tred capitalize lg:text-3xl font-mono ">
          Our <span class="text-secondary ">Customer</span> Stories
        </h1> */}
      </div>
    </section>
  );
};

export default Testimoni;
