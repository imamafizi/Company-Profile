import Image from "next/image";
import React from "react";

const CardTeam = ({ team }) => {
  return (
    <section>
      <div class="flex flex-col items-center rounded-xl border border-gray-300 p-4 sm:p-6">
        <Image
          class="aspect-square w-full rounded-xl object-cover"
          src={team.picture.large}
          alt={`photo ${team.name.first}`}
          quality={"100"}
          width={200}
          height={200}
        />
        <h1 class="mt-4 text-2xl font-semibold capitalize text-gray-700">
          {team.name.first}
        </h1>
        <div className="flex">
          <Image
            class="mr-2 mt-2"
            src="/email.svg"
            alt="chart"
            quality={"100"}
            width={20}
            height={20}
          />

          <p class="mt-2 capitalize text-gray-500 ">{team.email}</p>
        </div>
      </div>
    </section>
  );
};

export default CardTeam;
