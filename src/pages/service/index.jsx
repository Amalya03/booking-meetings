import React from "react";
import { useParams } from "react-router-dom";

import services from "../../data/services.json";
import professional from "../../data/professional.json";

import Titles from "../../components/titles/Titles";

const Service = () => {
  const path = useParams();
  const data = services.services.find((item) => item.id === path.id);

  const findprofessionals = () => {
    let filteredData = [];
    data.specialists.forEach((item) => {
      filteredData = [
        ...filteredData,
        ...professional.professionals.filter(
          (professional) => professional.id === item
        ),
      ];
    });
    return filteredData;
  };

  const professionals = findprofessionals();

  return (
    <div className="py-[50px] flex flex-wrap gap-[50px] justify-center">
      <Titles
        text={{
          firstText: `${data.name} Professionals`,
          secondText: "The best specialists cooperate with us․",
        }}
      />
      <div className="flex flex-wrap gap-[50px] justify-center ">
        {professionals.map((item, index) => {
          return (
            <div key={`${item.lastName}_${index}`} className="max-w-[400px] max-h-[400px] rounded-[50%] flex flex-wrap gap-[20px] justify-center  hover:cursor-pointer">
              <img
                src={item.image}
                alt=""
                className="w-[300px] h-[300px] object-cover  rounded-[50%]"
              />
              <span className="text-center text-[20px] font-semibold">
                {item.lastName} {item.firstName}
              </span>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Service;
