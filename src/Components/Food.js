import React, { useState, useEffect } from "react";
import { useRef } from "react";
import FoodCard from "./FoodCard";
import ShimmerFood from "./ShimmerFood";

const Food = () => {
  const [foodList, setFoodList] = useState([]);
  const [shiftRightBy, setShiftRightBy] = useState(0);

  const foodCardsRef = useRef(null);

  const fetchFoodList = async () => {
    try {
      const response = await fetch(
        "https://www.swiggy.com/dapi/restaurants/list/v5?lat=28.7040592&lng=77.10249019999999&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
      );
      const jsonData = await response.json();
      const foodData = jsonData.data.cards[0].card.card.imageGridCards.info;
      setFoodList(foodData);
    } catch (error) {
      console.error("Error fetching food list:", error);
    }
  };

  useEffect(() => {
    fetchFoodList();
  }, []);

  const handleLeftClick = () => {
    console.log(shiftRightBy);
    const foodCards = document.querySelector(".food-cards");
    foodCards.style.transition = "1s ease-in-out";
    if (foodCards && shiftRightBy <= 0) {
      let newShift = shiftRightBy + 50;
      setShiftRightBy(newShift);
    }
  };

  const handleRightClick = () => {
    console.log(shiftRightBy);
    const foodCards = document.querySelector(".food-cards");
    foodCards.style.transition = "1s ease-in-out";
    if (foodCards && shiftRightBy >= -300) {
      let newShift = shiftRightBy - 50;
      setShiftRightBy(newShift);
    }
  };

  useEffect(() => {
    if (foodCardsRef.current) {
      foodCardsRef.current.style.marginLeft = shiftRightBy + "rem";
    }
  }, [shiftRightBy]);

  return foodList.length === 0 ? (
    <ShimmerFood />
  ) : (
    <div className="food-outer-ctr">
      <div className="food-ctr">
        <div className="food-header-ctr">
          <h2 className="food-header">What's on your mind?</h2>
          <div className="more-food-btns-ctr">
            <button className="more-food-left" onClick={handleLeftClick}>
              <i className="fa-solid fa-chevron-left"></i>
            </button>
            <button className="more-food-right" onClick={handleRightClick}>
              <i className="fa-solid fa-chevron-right"></i>
            </button>
          </div>
        </div>
        <div className="food-cards-ctr">
          <div className="food-cards" ref={foodCardsRef}>
            {foodList.map((food) => (
              <FoodCard key={food.id} {...food} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Food;
