import React from "react";
import { useNavigate } from "react-router-dom";

const MealItem = ({ data }) => {
  let navigate = useNavigate();
  return (
    <>
      {!data
        ? "Not Found"
        : data.map((item) => (
            <div
              className="card"
              key={item.id}
              onClick={() => {
                navigate(`/${item.idMeal}`);
              }}
            >
              <img src={item.strMealThumb} />
              <h2>{item.strMeal}</h2>
              <h3> Cuisine: {item.strArea}</h3>
            </div>
          ))}
    </>
  );
};

export default MealItem;
