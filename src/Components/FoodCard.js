import React from 'react'

const FoodCard = ({imageId, text}) => {
    return (
        <div className="text-center flex flex-nowrap flex-col justify-left items-center cursor-pointer">
            <img className="w-[8rem] md:w-[12rem] lg:w-[16rem] block" alt="food" src={"https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_288,h_360/" + imageId} />
            <h4 id="py-4">{text}</h4>
        </div>
    )
}

export default FoodCard;