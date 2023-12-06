"use client";

import React, { useEffect, useState } from "react";
import CardTeam from "./CardTeams";

const TeamsComponent = () => {
  const [national, setNational] = useState("");
  const [teamResults, setTeamResults] = useState([]);

  const fetchData = async () => {
    try {
      const response = await fetch(
        `https://randomuser.me/api/?results=3&nat=${national}&gender=male`,
      );
      const { results } = await response.json();
      setTeamResults(results);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  const handleChange = (national) => {
    setNational(national);
  };

  useEffect(() => {
    fetchData();
  }, [national]);

  return (
    <>
      <div className="flex items-center justify-center">
        <div className="flex items-center rounded-xl border border-secondary p-1">
          <button
            onClick={() => handleChange("in")}
            className="rounded-xl py-2 text-sm font-bold capitalize text-secondary transition-colors duration-300 hover:bg-secondary hover:text-white focus:outline-none md:mx-8 md:px-12 md:py-3"
          >
            design
          </button>
          <button
            onClick={() => handleChange("ca")}
            className="mx-4 rounded-xl px-4 py-2 text-sm font-bold capitalize text-secondary transition-colors duration-300 hover:bg-secondary hover:text-white focus:outline-none md:mx-8 md:px-12 md:py-3"
          >
            web Development
          </button>
          <button
            onClick={() => handleChange("ch")}
            className="rounded-xl py-2 text-sm font-bold capitalize text-secondary transition-colors duration-300 hover:bg-secondary hover:text-white focus:outline-none md:mx-8 md:px-12 md:py-3"
          >
            marketing
          </button>
        </div>
      </div>

      <div className="mt-8 grid grid-cols-1 gap-8 md:grid-cols-2 xl:mt-16 xl:grid-cols-3">
        {teamResults.map((team, index) => (
          <CardTeam key={index} team={team} />
        ))}
      </div>
    </>
  );
};

export default TeamsComponent;
