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
    <div className="flex flex-col items-center bg-white shadow-sm shadow-slate-400 hover:shadow-lg hover:shadow-[rgba(0,0,0,0.1)]-300 transition-all ease-in-out rounded-[15px] overflow-hidden group relative">
      <div className="h-[18rem] w-full overflow-hidden flex justify-center items-center rounded-t-lg">
        <img
          className="w-full group-hover:scale-105 transition-all ease-in-out"
          src={
            "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/" +
            cloudinaryImageId
          }
          alt="Restaurant"
        />
      </div>
      <div className="w-full p-8 text-left">
        <div className="w-full flex justify-between pb-8">
          <h3 className="text-3xl text-gray-700 font-semibold box line-clamp-1 box-orient-vertical overflow-hidden">{name}</h3>
          <span className="ml-4 whitespace-nowrap text-gray-500">
            <h4>
              <span className="text-yellow-500 mr-4">
                <i className="fa-solid fa-star"></i>
              </span>
              {avgRating}
            </h4>
          </span>
        </div>
        <div className="text-2xl text-gray-600 font-semibold">
          <h4 className="text-gray-500 text-left box line-clamp-1 box-orient-vertical overflow-hidden">
            {cuisines.slice(0, 4).join(", ")}
          </h4>
          <h4 className="text-gray-500 px-4">{area}</h4>
        </div>
        {/* <button className="w-[100%] text-center py-4 mt-8 bg-gray-600 hover:bg-gray-500 transition-all text-white rounded-2xl">See Menu</button> */}
      </div>      
    </div>
  );
};

export default ResCard;
