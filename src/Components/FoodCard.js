import React from 'react'

const FoodCard = ({imageId, text}) => {
    return (
        <> 
            <div className="food-card">
                <img alt="food" src={"https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_288,h_360/" + imageId} id="food-img" />
                <h4 id="food-name">{text}</h4>
            </div>
        </>
    )
}

export default FoodCard;