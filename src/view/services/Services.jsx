import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

import Item from "./item/Item";
import Titles from "../../components/titles/Titles";

const Services = () => {
  const navigate = useNavigate();
  const data = useSelector((item) => item.services.services.services);

  return (
    <div className="flex flex-wrap gap-[50px] justify-center" id="services">
      <Titles
        text={{
          firstText: "Services",
          secondText:
            "The best cooperation with us. A secure and guaranteed collaboration platform․",
        }}
      />
      <div className="w-full flex justify-center flex-wrap gap-[20px]">
        {data.map((item) => {
          return (
            <Item
              item={item}
              onClick={() => navigate(`/service/${item.id}`)}
              key={item.id}
            />
          );
        })}
      </div>
    </div>
  );
};

export default Services;
