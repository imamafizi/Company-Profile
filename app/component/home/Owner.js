import Image from "next/image";
import Link from "next/link";
import React from "react";
import { MdArrowForward } from "react-icons/md";

const Owner = () => {
  return (
    <section>
      <div className="h-[10px] bg-primary">
        <h1 className="text-2xl font-semibold text-primary  lg:pl-[140px] lg:text-5xl">
          OUR FOUNDER
        </h1>
      </div>
      <div class="container mx-auto px-[80px] py-10">
        <div class="lg:-mx-6 lg:flex lg:items-center">
          <Image
            className="mt-[20px] rounded-full border-8 border-secondary object-cover object-center    "
            src="/imam2.png"
            width={500}
            height={100}
            quality={100}
            objectFit="cover"
            alt="Picture of the author"
          ></Image>
          <div class="mt-8 lg:mt-0 lg:w-1/2 lg:px-6 lg:pl-[200px]">
            <svg
              className="mb-4 h-8 w-8 text-secondary"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
              viewBox="0 0 18 14"
            >
              <path d="M6 0H2a2 2 0 0 0-2 2v4a2 2 0 0 0 2 2h4v1a3 3 0 0 1-3 3H2a1 1 0 0 0 0 2h1a5.006 5.006 0 0 0 5-5V2a2 2 0 0 0-2-2Zm10 0h-4a2 2 0 0 0-2 2v4a2 2 0 0 0 2 2h4v1a3 3 0 0 1-3 3h-1a1 1 0 0 0 0 2h1a5.006 5.006 0 0 0 5-5V2a2 2 0 0 0-2-2Z" />
            </svg>
            {/* <p class="text-5xl font-semibold text-secondary ">“</p> */}

            <h1 class="font-mono text-2xl font-semibold text-tred lg:w-96 lg:text-3xl">
              Imam <span className="text-secondary">Afizi</span>
            </h1>

            <p class="mt-6 max-w-lg text-secondary  ">
              “ Meet the Visionaries Behind Amarillo Digital Creative. Our
              founders, driven by passion and expertise, pave the way for
              innovation and excellence in the digital realm. Learn about the
              minds shaping our journey towards unparalleled success. ”
            </p>

            <Link href={`/teams`}>
              <button class="mt-6 flex w-full transform rounded-lg bg-secondary px-5 py-2 text-sm uppercase tracking-wider text-white transition-colors duration-300 hover:bg-empat focus:bg-blue-500 focus:outline-none lg:w-auto">
                visit teams <MdArrowForward className="my-1 ml-2" />
              </button>
            </Link>

            <div class="mt-12 flex items-center justify-between lg:justify-start"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Owner;
