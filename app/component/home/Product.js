import Image from "next/image";
import React from "react";

const Product = () => {
  return (
    <section class="bg-primary ">
      <div class="container mx-auto px-6 py-10">
        <h1 class="text-center font-mono text-2xl font-semibold capitalize text-tred lg:text-3xl">
          Digital <span class="text-secondary">Creative </span> Indonesia
        </h1>

        <p class="mx-auto my-6 max-w-2xl text-center text-secondary ">
          Amarillo combine Customer Experience, Data Analytics, and ROI-oriented
          approaches to help our clients succeed through digital innovation.
        </p>

        <div class="mt-8 grid grid-cols-1 gap-8 md:grid-cols-2 xl:mt-16 xl:grid-cols-2">
          <div class="group transform cursor-pointer rounded-xl border px-12 py-8 transition-colors duration-300 hover:border-transparent hover:bg-secondary ">
            <div className="lg:flex">
              <Image
                class=""
                src="/chart.svg"
                alt="chart"
                quality={"100"}
                width={150}
                height={100}
              />
              <div class="pl flex flex-col sm:-mx-4 sm:flex-row ">
                <div class="mt-4 pt-4 sm:mx-4 sm:mt-0 lg:pl-[50px]">
                  <h1 class="text-xl font-bold capitalize text-secondary group-hover:text-white  md:text-2xl">
                    STRATEGY
                  </h1>

                  <p class="mt-4 capitalize text-secondary  group-hover:text-gray-300">
                    We help you understand the customers and create blueprint to
                    solve the problems.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div class="group transform cursor-pointer rounded-xl border px-12 py-8 transition-colors duration-300 hover:border-transparent hover:bg-secondary ">
            <div className="lg:flex">
              <Image
                class=""
                src="/shop.svg"
                alt="shop"
                quality={"100"}
                width={150}
                height={100}
              />
              <div class="pl flex flex-col sm:-mx-4 sm:flex-row ">
                <div class="mt-4 pt-4 sm:mx-4 sm:mt-0 lg:pl-[50px]">
                  <h1 class="text-xl font-bold capitalize text-secondary group-hover:text-white  md:text-2xl">
                    TECHNOLOGY
                  </h1>

                  <p class="mt-4 capitalize text-secondary  group-hover:text-gray-300">
                    We develop iOS, Android, web applications, and e-commerce.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div class="group transform cursor-pointer rounded-xl border px-12 py-8 transition-colors duration-300 hover:border-transparent hover:bg-secondary ">
            <div className="lg:flex">
              <Image
                class=""
                src="/creative.svg"
                alt="Light"
                quality={"100"}
                width={150}
                height={100}
              />
              <div class="pl flex flex-col sm:-mx-4 sm:flex-row ">
                <div class="mt-4 pt-4 sm:mx-4 sm:mt-0 lg:pl-[50px]">
                  <h1 class="text-xl font-bold capitalize text-secondary group-hover:text-white  md:text-2xl">
                    CREATIVE
                  </h1>

                  <p class="mt-4 capitalize text-secondary  group-hover:text-gray-300">
                    We design beautiful apps, write engaging stories, and
                    produce entertaining videos.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div class="group transform cursor-pointer rounded-xl border px-12 py-8 transition-colors duration-300 hover:border-transparent hover:bg-secondary ">
            <div className="lg:flex">
              <Image
                class=""
                src="/rocket.svg"
                alt="Comunication"
                quality={"100"}
                width={150}
                height={100}
              />
              <div class="pl flex flex-col sm:-mx-4 sm:flex-row ">
                <div class="mt-4 pt-4 sm:mx-4 sm:mt-0 lg:pl-[50px]">
                  <h1 class="text-xl font-bold capitalize text-secondary group-hover:text-white  md:text-2xl">
                    COMMUNICATION
                  </h1>

                  <p class="mt-4 capitalize text-secondary  group-hover:text-gray-300">
                    We create 360<sup>o</sup> digital campaign through social
                    media, influencers activation, and advertising.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Product;
