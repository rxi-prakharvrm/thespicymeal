import React from 'react'
import { useState, useEffect } from 'react'
import FoodCard from './FoodCard'

const Food = () => {
    // let foods = [
    //     {address:"images/thali.png", name:"Premium Thali"},
    //     {address:"images/burger.png", name:"Burger"},
    //     {address:"images/sandwich.png", name:"Sandwich"},
    //     {address:"images/paneer_tikka.png", name:"Paneer Tikka"},
    //     {address:"images/bowl_of_rice.png", name:"Bowl of rice"}
    // ]

    const [foodList, setFoodList] = useState([]);

    const fetchFoodList = async () => {
        const data = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=28.7040592&lng=77.10249019999999&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING");
        const jsonData = await data.json();
        setFoodList(jsonData.data.cards[0].card.card.imageGridCards.info)
    }

    useEffect(() => {
        fetchFoodList();
    }, []);

    return (
        <>
            <div className="food-outer-ctr">
                <div className="food-ctr">
                    <div className="food-header-ctr">
                        <h2 className="food-header">What's on your mind?</h2>
                        <div className="more-food-btns-ctr">
                            <button className="more-food-left"><i className="fa-solid fa-chevron-left"></i></button>
                            <button className="more-food-right"><i className="fa-solid fa-chevron-right"></i></button>
                        </div>
                    </div> 
                    <div className="food-cards-ctr">
                        <div className="food-cards">
                            {
                                foodList.map((food) => {
                                    return <FoodCard key={food.id} {...food} />
                                })
                            }
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Food;