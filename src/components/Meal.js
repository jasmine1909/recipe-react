import React, { useState, useEffect } from "react";
import MealItem from "./MealItem";
import RecipeIndex from "./RecipeIndex";
import Img from "../utils/img.png";

const Meal = () => {
  const [search, setSearch] = useState();
  const [show, setShow] = useState(false);
  const [item, setItem] = useState("");
  const [url, setUrl] = useState(
    "https://www.themealdb.com/api/json/v1/1/search.php?f=a"
  );
  useEffect(() => {
    fetch(url)
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setItem(data.meals);
        setShow(true);
      });
  }, [url]);
  const searchRecipe = (evt) => {
    setUrl(`https://www.themealdb.com/api/json/v1/1/search.php?s=${search}`);
  };
  const setIndex = (alpha) => {
    setUrl(`https://www.themealdb.com/api/json/v1/1/search.php?f=${alpha}`);
  };
  return (
    <div>
      <div className="main">
        <img
          class="img "
          src="https://www.downloadclipart.net/large/cooking-transparent-png.png"
        />
        <img className="img2" src={Img} />
        <div className="heading">
          <h1 className="title">Search Your Food Recipe</h1>
          <h4>
            Keep it easy with these simple but delicious recipes. From
            make-ahead lunches and midweek meals to fuss-free sides and moreish
            cakes, we've got everything you need.
          </h4>
        </div>
        <div className="searchBox">
          <input
            type="search"
            className="search-bar"
            placeholder="What you want to cook ?"
            onChange={(e) => setSearch(e.target.value)}
            onKeyPress={searchRecipe}
          />
        </div>
        <div className="indexContainer">
          <RecipeIndex alphaIndex={(alpha) => setIndex(alpha)} />
        </div>
        <div className="container">
          {show ? <MealItem data={item} /> : "Not Found"}
        </div>
      </div>
    </div>
  );
};

export default Meal;
