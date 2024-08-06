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
        foodCardsRef.current.style.transition = "1s ease-in-out";
        if (foodCardsRef && shiftRightBy <= -50) {
            let newShift = shiftRightBy + 50;
            setShiftRightBy(newShift);
            console.log(shiftRightBy);
        }
    };

    const handleRightClick = () => {
        foodCardsRef.current.style.transition = "1s ease-in-out";
        if (foodCardsRef && shiftRightBy >= -250) {
            let newShift = shiftRightBy - 50;
            console.log(shiftRightBy);
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
        <div className="flex flex-nowrap justify-center items-center">
            <div className="max-w-[96rem] pt-[2rem] pb-[5rem] flex flex-nowrap justify-center items-center">
                <div className="w-full">
                    <div className="h-[4rem] py-[4rem] flex flex-nowrap justify-between items-center">
                        <h2 className="text-4xl font-bold">What's on your mind?</h2>
                        <div>
                            <button className="h-[5rem] w-[5rem] p-[0.5rem] mx-[1.6rem] text-2xl border-none outline-none bg-[#f1f1f1] border-2 border-[#f1f1f1] rounded-[3rem] cursor-pointer" onClick={handleLeftClick}>
                                <i className="fa-solid fa-chevron-left"></i>
                            </button>
                            <button className="h-[5rem] w-[5rem] p-[0.5rem] mx-[1.6rem] text-2xl border-none outline-none bg-[#f1f1f1] border-2 border-[#f1f1f1] rounded-[3rem] cursor-pointer" onClick={handleRightClick}>
                                <i className="fa-solid fa-chevron-right"></i>
                            </button>
                        </div>
                    </div>
                    <div className="s-full overflow-hidden">
                        <div className="w-[2000rem] flex justify-left items-center gap-[50px]" ref={foodCardsRef}>
                            {foodList.map((food) => (
                                <FoodCard key={food.id} {...food} />
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Food;
