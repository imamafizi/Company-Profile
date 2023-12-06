import Image from "next/image";
import React from "react";

const VisiMisi = () => {
  return (
    <section>
      <div class="container mx-auto px-6 py-10">
        <h1 class="text-center text-2xl font-semibold capitalize text-tred lg:text-3xl ">
          Visi <span class="text-secondary ">Misi</span>
        </h1>

        <div class="mx-auto mt-8 grid max-w-7xl grid-cols-1 gap-8 lg:grid-cols-2 xl:mt-10">
          <div class="rounded-lg  bg-primary p-6  md:p-8">
            <div class="mt-6 flex flex-col ">
              <div className="flex justify-end">
                <Image
                  class="ml-[50px]"
                  src="/visi.svg"
                  alt="chart"
                  quality={"100"}
                  width={150}
                  height={100}
                />
              </div>
              <div class="mx-4">
                <h1 class="text-4xl font-bold text-tred">VISI</h1>
              </div>
            </div>

            <p class="mt-[50px] leading-loose text-empat ">
              “Our vision establishes the foundation for tangible change in the
              digital landscape. We aspire to be a center of inspiration for
              boundless digital transformation. Through innovative excellence,
              we aim to lead the way in realizing a revolutionary digital
              future. By becoming a Leader in Innovation, we anticipate creating
              a positive wave of change, guiding the industry toward a more
              dynamic and adaptive direction.”.
            </p>
          </div>

          <div class="rounded-lg bg-secondary p-6  md:p-8">
            <div class="mt-6 flex flex-col  ">
              <div className="flex justify-end">
                <Image
                  class="ml-[50px]"
                  src="/misi.svg"
                  alt="chart"
                  quality={"100"}
                  width={150}
                  height={100}
                />
              </div>
              <div class="mx-4 ">
                <h1 class="text-4xl font-semibold text-white">MISI</h1>
              </div>
            </div>

            <p class="pt-[50px] leading-loose text-white ">
              “We are dedicated to realizing our vision at Amarillo Digital
              Agency through concrete steps that define our core. Our commitment
              includes a focus on delivering exceptional digital experiences,
              ensuring every solution makes a lasting impact. Quality
              collaboration forms the bedrock of our partnerships, built on
              integrity and sustainability. We continuously push the boundaries
              of sustainable innovation, combining creativity and technology for
              relevant and effective solutions. Excellence is our constant goal,
              providing top-tier services with an emphasis on quality, speed,
              and precision. Additionally, we actively contribute to the digital
              community by sharing knowledge and resources, playing a vital role
              in fostering the growth of businesses locally and globally in the
              digital ecosystem.”.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default VisiMisi;
