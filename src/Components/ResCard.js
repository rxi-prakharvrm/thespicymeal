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
        <div className="w-[25rem] h-[33rem] flex flex-col justify-self-start items-center bg-white shadow-sm shadow-slate-400 hover:shadow-xl hover:shadow-slate-300 hover:-mt-4 transition-all ease-in-out delay-50 rounded-lg">
            <div className="h-64 w-full">
                <img className="h-full w-full rounded-t-lg" src={"https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/" + cloudinaryImageId} alt="Restaurant" />
            </div>
            <h3 className="text-3xl text-gray-800 font-semibold px-4 py-8">{name}</h3>
            <div className="p-2 text-2xl text-gray-600 font-semibold">
                <h4 className="text-gray-500 px-4">{cuisines.slice(0, 4).join(", ")}</h4>
                <h4 className="text-gray-500 px-4">{area}</h4>
                <span className="text-gray-500 px-4">
                    <h4>
                        <span className="text-yellow-500 mr-4"><i className="fa-solid fa-star"></i></span>
                        {avgRating}
                    </h4>
                </span>
            </div>
        </div>
    )
}

export default ResCard