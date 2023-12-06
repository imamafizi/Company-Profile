import HeroTeams from "./components/HeroTeams";
import TeamsComponent from "./components/TeamsComponent";

const Teams = () => {
  return (
    <>
      <HeroTeams />
      <section className="h-[1650px] lg:h-[900px]">
        <div className="h-[32rem] bg-primary pt-[60px]">
          <div className="container mx-auto px-6 py-10">
            <h1 className="text-center text-2xl font-bold text-tred lg:text-4xl">
              Meet the teams
            </h1>
            <p className="mt-2 text-center text-secondary">
              Elevating Excellence- Meet the Visionaries Leading Our Team to
              Success.
            </p>

            <TeamsComponent />
          </div>
        </div>
      </section>
    </>
  );
};

export default Teams;
