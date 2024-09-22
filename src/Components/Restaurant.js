import React from 'react'
import { useState } from 'react'
import { Link } from 'react-router-dom';
import ResCard from './ResCard';
import ResNotFound from './ResNotFound';
import ShimmerRestaurant from './ShimmerRestaurant';
import useRestaurant from '../utils/useRestaurant';

// Shows the restaurants
const Restaurant = () => {
    const [searchText, setSearchText] = useState("");
    const [isResFound, setIsResFound] = useState(true);

    // This custom hook is responsible for fetching the restraunt data from the api and updating state variables listOfRes and filteredListOfRes
    const { listOfRes, filteredListOfRes, setFilteredListOfRes } = useRestaurant();

    const searchcall = () => {
        const filteredListOfRes = listOfRes.filter((res) => {
            return res.info.name.toLowerCase().includes(searchText.toLowerCase());
        })

        setFilteredListOfRes(filteredListOfRes);
        const isResFound = filteredListOfRes.length !== 0 ? true : false;
        console.log(filteredListOfRes, isResFound);
        setIsResFound(isResFound)
    }
    
    // If listOfRes contains nothing, show shimmer UI
    return listOfRes.length === 0 ?
        <ShimmerRestaurant />
        : (
            <div className="py-16 text-center  bg-[#f1f1f1]">
                {/* Filter restraunts based on its name */}
                <div className="w-[90%] mx-auto flex justify-center items-center">
                    <input className="max-w-[90%] w-[40rem] py-4 px-[1.6rem] text-[1.4rem] sm:text-[1.8rem] text-gray-600 outline-none bg-white border-2 border-solid border-gray-200 transition-all hover:shadow-xl hover:shadow-gray-200 rounded-xl" type="text" placeholder="Search you favourite restaurant..." value={searchText} onChange={(e) => { 
                        setSearchText(e.target.value)
                        searchcall();                    
                    }} />

                    <input className="py-4 ml-4 px-[1.6rem] text-[1.4rem] sm:text-[1.8rem] outline-none bg-[#5a5aeb] text-white transition-all hover:shadow-xl hover:shadow-[#64646f4d] rounded-xl cursor-pointer" type="button" value="Search" onClick={() => {
                        const filteredListOfRes = listOfRes.filter((res) => {
                            return res.info.name.toLowerCase().includes(searchText.toLowerCase());
                        })

                        setFilteredListOfRes(filteredListOfRes);
                        const isResFound = filteredListOfRes.length !== 0 ? true : false;
                        console.log(filteredListOfRes, isResFound);
                        setIsResFound(isResFound)
                    }} />
                </div>

                {
                    // if restaurant found, show that else show an error msg that 'restaurant not found'
                    isResFound ?
                        <div className="my-16 flex justify-center items-center">
                            <div className="w-[90%] max-w-[1366px] grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 place-content-center gap-12">
                                {filteredListOfRes.map((restaurant) => {
                                    return (
                                        <Link className="no-underline justify-self-center" key={restaurant.info.id} to={"/restaurants/" + restaurant.info.id}>
                                            <ResCard {...restaurant.info} />
                                        </Link>
                                    )
                                })}
                            </div>
                        </div> :
                        <ResNotFound />
                }
            </div>
        );
}

export default Restaurant;