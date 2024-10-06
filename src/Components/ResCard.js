import React from "react";

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
    <div className="h-full justify-self-stretch flex flex-col items-center bg-white shadow-sm shadow-slate-400 hover:shadow-lg hover:shadow-[rgba(0,0,0,0.1)]-300 transition-all ease-in-out rounded-[15px] overflow-hidden group">
      <div className="h-[18rem] w-full overflow-hidden  flex justify-center items-center rounded-t-lg">
        <img
          className="w-full group-hover:scale-105 transition-all ease-in-out"
          src={
            "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/" +
            cloudinaryImageId
          }
          alt="Restaurant"
        />
      </div>
      <h3 className="text-3xl text-gray-800 font-semibold px-4 py-8">{name}</h3>
      <div className="p-2 text-2xl text-gray-600 font-semibold">
        <h4 className="text-gray-500 px-4">
          {cuisines.slice(0, 4).join(", ")}
        </h4>
        <h4 className="text-gray-500 px-4">{area}</h4>
        <span className="text-gray-500 px-4">
          <h4>
            <span className="text-yellow-500 mr-4">
              <i className="fa-solid fa-star"></i>
            </span>
            {avgRating}
          </h4>
        </span>
      </div>
    </div>
  );
};

export default ResCard;
