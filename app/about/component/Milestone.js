import Image from "next/image";

export default function Milestone() {
  return (
    <section class="bg-primary ">
      <div class="container mx-auto px-6 py-10">
        <h1 class="text-center font-mono text-2xl font-semibold capitalize text-tred lg:text-3xl">
          Amarillo <span class="text-secondary">Milestone </span> History
        </h1>

        <p class="mx-auto my-6 max-w-2xl text-center text-secondary ">
          Transformative Journey from 2020 to 2023
        </p>

        <div class="mt-8 grid grid-cols-1 gap-2 md:grid-cols-2 xl:mt-16 xl:grid-cols-3">
          <div class="group transform cursor-pointer rounded-xl border  py-8 transition-colors duration-300 hover:border-transparent hover:bg-secondary ">
            <Image
              class="ml-[50px]"
              src="/ms1.svg"
              alt="chart"
              quality={"100"}
              width={150}
              height={100}
            />
            <div class="pl flex flex-col sm:-mx-4 sm:flex-row ">
              <div class="mt-4 px-4 pt-4 sm:mx-4 sm:mt-0">
                <h1 class="text-xl font-bold capitalize text-secondary group-hover:text-white  md:text-2xl">
                  2020
                </h1>

                <p class="wfull mt-4 capitalize text-secondary  group-hover:text-gray-300">
                  Amarillo was founded with a visionary commitment to redefine
                  digital creativity and elevate the F&B industry. Initial
                  collaborations laid the foundation for innovative solutions,
                  marking the beginning of our transformative journey
                </p>
              </div>
            </div>
          </div>
          <div class="group transform cursor-pointer rounded-xl border  py-8 transition-colors duration-300 hover:border-transparent hover:bg-secondary ">
            <Image
              class="ml-[50px]"
              src="/ms2.svg"
              alt="chart"
              quality={"100"}
              width={150}
              height={100}
            />
            <div class="pl flex flex-col sm:-mx-4 sm:flex-row ">
              <div class="mt-4 px-4 pt-4 sm:mx-4 sm:mt-0">
                <h1 class="text-xl font-bold capitalize text-secondary group-hover:text-white  md:text-2xl">
                  2021
                </h1>

                <p class="wfull mt-4 capitalize text-secondary  group-hover:text-gray-300">
                  Despite global challenges, Amarillo showcased resilience,
                  adapting strategies to the changing landscape. Expanded our
                  client base, introducing cutting-edge digital solutions and
                  culinary experiences that garnered acclaim.
                </p>
              </div>
            </div>
          </div>
          <div class="group transform cursor-pointer rounded-xl border  py-8 transition-colors duration-300 hover:border-transparent hover:bg-secondary ">
            <Image
              class="ml-[50px]"
              src="/ms3.svg"
              alt="chart"
              quality={"100"}
              width={150}
              height={100}
            />
            <div class="pl flex flex-col sm:-mx-4 sm:flex-row ">
              <div class="mt-4 px-4 pt-4 sm:mx-4 sm:mt-0">
                <h1 class="text-xl font-bold capitalize text-secondary group-hover:text-white  md:text-2xl">
                  2022
                </h1>

                <p class="wfull mt-4 capitalize text-secondary  group-hover:text-gray-300">
                  Secured key partnerships, positioning Amarillo as a leader in
                  digital creativity. Launched groundbreaking projects,
                  implementing advanced technologies and setting new industry
                  standards.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* grid bawah */}

        <div class="mt-8 grid grid-cols-1 md:grid-cols-2 xl:mt-16 xl:grid-cols-2 xl:gap-20 xl:px-52">
          <div class="group transform cursor-pointer rounded-xl border  py-8 transition-colors duration-300 hover:border-transparent hover:bg-secondary ">
            <Image
              class="ml-[50px]"
              src="/ms4.svg"
              alt="chart"
              quality={"100"}
              width={150}
              height={100}
            />
            <div class="pl flex flex-col sm:-mx-4 sm:flex-row ">
              <div class="mt-4 px-4 pt-4 sm:mx-4 sm:mt-0">
                <h1 class="text-xl font-bold capitalize text-secondary group-hover:text-white  md:text-2xl">
                  2023
                </h1>

                <p class="wfull mt-4 capitalize text-secondary  group-hover:text-gray-300">
                  Amarillo celebrates its 3 years anniversary, reflecting on a
                  remarkable evolution. Global recognition for excellence in
                  digital solutions and culinary arts, solidifying our presence
                  as an industry trailblazer.
                </p>
              </div>
            </div>
          </div>
          <div class="group transform cursor-pointer rounded-xl border  py-8 transition-colors duration-300 hover:border-transparent hover:bg-secondary ">
            <Image
              class="ml-[50px]"
              src="/ms5.svg"
              alt="chart"
              quality={"100"}
              width={150}
              height={100}
            />
            <div class="pl flex flex-col sm:-mx-4 sm:flex-row ">
              <div class="mt-4 px-4 pt-4 sm:mx-4 sm:mt-0">
                <h1 class="text-xl font-bold capitalize text-secondary group-hover:text-white  md:text-2xl">
                  Future
                </h1>

                <p class="wfull mt-4 capitalize text-secondary  group-hover:text-gray-300">
                  AAmarillo envisions an exciting future with continued
                  innovation and a commitment to exceeding client expectations.
                  Plans for strategic expansion, embracing emerging trends to
                  maintain our position at the forefront of digital creativity
                  and F&B excellence.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
