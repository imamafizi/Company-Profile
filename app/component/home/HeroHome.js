import React from "react";
import Image from "next/image";
import Link from "next/link";
import { MdArrowForward } from "react-icons/md";

const HeroHome = () => {
  return (
    <section className=" h-[795px] bg-primary pt-[120px]">
      <div class="container mx-auto flex flex-col space-y-6 px-[50px] py-10 lg:h-[32rem] lg:flex-row lg:items-center lg:py-16  ">
        <div class="w-full lg:w-1/2">
          <div class="lg:max-w-lg">
            <h1 class="font-mono text-3xl font-semibold tracking-wide text-tred  lg:text-4xl">
              Make <span className="text-secondary"> Everything Digitally</span>{" "}
              Possible
            </h1>

            <div class="mt-8 space-y-5">
              <p class="mt-3 text-secondary ">
                Elevate your business success with Amarillo Digital Creative.
                Creative innovation and captivating digital solutions—we are
                here to bring your vision to life and achieve success together
              </p>
              <Link href={`/about`}>
                <button class="mt-6 flex w-full transform rounded-lg bg-secondary px-5 py-2 text-sm uppercase tracking-wider text-white transition-colors duration-300 hover:bg-empat focus:bg-blue-500 focus:outline-none lg:w-auto">
                  Visit us <MdArrowForward className="my-1 ml-2" />
                </button>
              </Link>
            </div>
          </div>
        </div>

        <div class="flex h-96 w-full items-center justify-center lg:w-1/2">
          <Image
            class="mx-auto hidden h-full w-full rounded-md object-cover lg:block lg:max-w-2xl"
            src="/hero.jpg"
            alt="Amarillo PKU"
            quality={"100"}
            width={400}
            height={200}
          />
        </div>
      </div>
    </section>
  );
};

export default HeroHome;
