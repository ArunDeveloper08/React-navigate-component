import { useState } from "react";
import { FaAnglesDown } from "react-icons/fa6";
import { FaAnglesUp } from "react-icons/fa6";

const Navigation = ({ data }) => {
  const [location, setLocation] = useState(data);

  const handleMoveUp = (index) => {
    if (index == 0) return;
    const newItems = [...location];
    const temp = newItems[index];
    newItems[index] = newItems[index - 1];
    newItems[index - 1] = temp;
    setLocation(newItems);
  };

  const handleMoveDown = (index) => {
    if (index == data?.length - 1) return;
    const newItems = [...location];
    const temp = newItems[index];
    newItems[index] = newItems[index + 1];
    newItems[index + 1] = temp;
    setLocation(newItems);
  };

  return (
    <div>
      {location?.map((item, index) => {
        return (
          <div style={{ display: "flex", justifyContent: "space-between", padding:"50px" }}>
            <h4>{item.name}</h4>
            <div>
              {index !== 0 && (
                <FaAnglesUp onClick={() => handleMoveUp(index)} />
              )}
              {index !== data.length - 1 && (
                <FaAnglesDown onClick={() => handleMoveDown(index)} />
              )}
            </div>
          </div>
        );
      })}
    </div>
  );
};
export default Navigation;
