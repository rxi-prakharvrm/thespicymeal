import React from 'react'

const ResCard = ({
    cloudinaryImageId,
    name,
    cuisines,
    area,
    lastMileTravelString,
    costForTwoString,
    avgRating,
}) => {
    return (
        <div className="res-card">
            <div className="res-img-name-ctr">
                <img src={"https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/" + cloudinaryImageId} alt="Restaurant" />
                <h3 className="res-name">{name}</h3>
            </div>
            <div className="res-details">
                <h4 className="res-cuisines">{cuisines.slice(0, 4).join(", ")}</h4>
                <h4 className="res-area">{area}</h4>
                <span className="res-rating">
                    <h4>
                        <i className="fa-solid fa-star"></i>
                        {avgRating}
                    </h4>
                </span>
                <h4 className="res-last-mile">{lastMileTravelString}</h4>
                <h4 className="res-cost">{costForTwoString}</h4>
            </div>
        </div>
    )
}

export default ResCard;