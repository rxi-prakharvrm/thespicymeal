import React from 'react'

const FoodCard = ({imageId, text}) => {
    return (
        <>
            <img className="w-[25vw] sm:w-[17vw] md:w-[13vw] lg:w-[9.7vw] xl:w[7vw] mr-[1%] block" alt="food" src={"https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_288,h_360/" + imageId} />
            <h4 id="py-4">{text}</h4>
        </>
    )
}

export default FoodCard;