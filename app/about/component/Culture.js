import { Avatar, Blockquote, Rating, RatingStar } from "flowbite-react";
import Image from "next/image";

export default function Culture() {
  return (
    <div className="bg-primary">
      <figure className="container flex max-w-7xl flex-col justify-center  px-2 lg:mx-32  lg:py-40">
        <h1 className="flex justify-center  text-justify font-mono text-3xl font-semibold text-secondary lg:text-5xl">
          Culture
        </h1>
        <div className="flex justify-center lg:justify-end">
          <Image
            src="/man.svg"
            alt="chart"
            quality={"100"}
            width={150}
            height={100}
          />
        </div>
        <div className="mb-4 flex items-center justify-center lg:justify-start">
          <Rating size="md">
            <RatingStar />
            <RatingStar />
            <RatingStar />
            <RatingStar />
            <RatingStar />
          </Rating>
        </div>
        <Blockquote>
          <p className=" text-base font-semibold text-gray-900 dark:text-white lg:text-2xl">
            "Amarillo's vibrant culture is a tapestry woven with threads of
            friendliness, creativity, and mutual support. Within our dynamic
            team, a spirit of camaraderie flourishes, fostering an environment
            where innovative ideas flow freely, and collaboration is second
            nature. Each team member is not just a colleague but a valued
            contributor, where their unique perspectives and creative flair
            contribute to the colorful mosaic of our collective success. At
            Amarillo, we believe that a friendly and supportive workplace is the
            cornerstone of unleashing creativity and achieving shared goals.
            It's more than a culture; it's a dynamic ecosystem where every
            individual is encouraged to thrive, contribute, and grow together."
          </p>
        </Blockquote>
      </figure>
    </div>
  );
}
