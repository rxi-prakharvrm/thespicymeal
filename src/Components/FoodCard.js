import React from 'react'

const FoodCard = ({imageId, text}) => {
    return (
        <div> 
            <div className="text-center flex flex-nowrap flex-col justify-between items-center cursor-pointer">
                <img className="w-[15rem] block" alt="food" src={"https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_288,h_360/" + imageId} />
                <h4 id="py-4">{text}</h4>
            </div>
        </div>
    )
}

export default FoodCard;