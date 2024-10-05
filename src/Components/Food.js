import React, { useState, useEffect, useRef } from "react";
import FoodCard from './FoodCard';
import Shimmer from "./Shimmer";

const Food = () => {
    const [foodList, setFoodList] = useState([]);
    const [counter, setCounter] = useState(0);
    const foodCardContainerRef = useRef(null);
    const itemsToSlide = 3;

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

    // Circular sliding logic
    const handleSlide = () => {
        setCounter(prevCounter => {
            const nextCounter = prevCounter + itemsToSlide;
            return nextCounter >= foodList.length ? (nextCounter % foodList.length) : nextCounter;
        });
    };

    useEffect(() => {
        const intervalId = setInterval(handleSlide, 5000);

        return () => clearInterval(intervalId);
    }, [foodList.length]);

    useEffect(() => {
        if (foodCardContainerRef.current) {
            foodCardContainerRef.current.style.transform = `translateX(-${counter * (100 / foodList.length)}%)`;
        }
    }, [counter, foodList.length]);

    return foodList.length === 0 ? (
        <Shimmer />
    ) : (
        <div className="w-full flex flex-nowrap justify-center items-center">
            <div className="max-w-[1024px] w-[90%] sm:w-[78%] mb-16 mt-8 flex flex-nowrap justify-center items-center">
                <div className="w-full">
                    <div className="h-[4rem] py-[4rem] flex flex-nowrap justify-between items-center">
                        <h2 className="text-3xl sm:text-4xl font-bold">What's on your mind?</h2>
                    </div>
                    <div className="relative overflow-hidden w-full">
                        <div
                            className="flex transition-transform duration-500 ease-in-out"
                            style={{
                                width: `${foodList.length * 100 / 5}%`, // Adjust container width based on 5 images at a time
                                transform: `translateX(-${counter * (100 / foodList.length)}%)`
                            }}
                            ref={foodCardContainerRef}
                        >
                            {foodList.map((food, index) => (
                                <div
                                    key={index}
                                    className="flex-none text-center"
                                    style={{
                                        width: `${100 / foodList.length}%`
                                    }}
                                >
                                    <FoodCard key={food.id} {...food} />
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Food;
